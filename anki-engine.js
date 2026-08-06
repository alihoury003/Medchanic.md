// ========================================================
// MEDCHANIC.MD - ADVANCED ANKI FLASHCARD ENGINE (90% RETENTION)
// ========================================================

const AnkiEngine = {
    // True Anki intervals tuned for ~90% retention:
    // First exposure: Again = 1 min (0.01d), Hard = 0.5 day, Good = 2 days max, Easy = 4 days.
    // Subsequent reviews: multiplying interval by Ease Factor (default 2.5).
    calculateNextReview: function(cardState, rating) {
        let { interval = 0, repetition = 0, easeFactor = 2.5 } = cardState;
        
        if (rating === 'again') {
            repetition = 0;
            interval = 0.02; // review again shortly (<1 day)
        } else if (rating === 'hard') {
            if (repetition === 0) interval = 0.5; // 12 hours
            else interval = Math.max(1, Math.round(interval * 1.2));
            repetition++;
        } else if (rating === 'good') {
            if (repetition === 0) interval = 2; // 2 days max on first good exposure as requested
            else if (repetition === 1) interval = 6;
            else interval = Math.round(interval * easeFactor);
            repetition++;
        } else if (rating === 'easy') {
            if (repetition === 0) interval = 4; // 4 days on first easy exposure
            else if (repetition === 1) interval = 10;
            else interval = Math.round(interval * easeFactor * 1.3);
            repetition++;
        }
        
        // Adjust Ease Factor based on rating
        if (rating === 'again') {
            easeFactor = Math.max(1.3, easeFactor - 0.2);
        } else if (rating === 'hard') {
            easeFactor = Math.max(1.3, easeFactor - 0.15);
        } else if (rating === 'easy') {
            easeFactor = easeFactor + 0.15;
        }
        
        const nextReviewDate = new Date();
        // if interval is fractional (like 0.5 day), add hours
        const hoursToAdd = interval < 1 ? Math.round(interval * 24) : 0;
        const daysToAdd = interval >= 1 ? Math.round(interval) : 0;
        
        if (hoursToAdd > 0) {
            nextReviewDate.setTime(nextReviewDate.getTime() + (hoursToAdd * 60 * 60 * 1000));
        } else {
            nextReviewDate.setDate(nextReviewDate.getDate() + daysToAdd);
        }
        
        return {
            interval: parseFloat(interval.toFixed(2)),
            repetition,
            easeFactor: parseFloat(easeFactor.toFixed(2)),
            nextReview: nextReviewDate.toISOString()
        };
    },

    getStateCategory: function(cardState) {
        if (!cardState || cardState.repetition === 0) return 'new';
        if (cardState.interval < 21) return 'young';
        return 'mature';
    }
};

const MedchanicSecurity = {
    getDeviceFingerprint: function() {
        let fp = localStorage.getItem('medchanic_device_id');
        if (!fp) {
            fp = 'dev_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
            localStorage.setItem('medchanic_device_id', fp);
        }
        return fp;
    },
    validateSession: function(userProfile) {
        const currentDevice = this.getDeviceFingerprint();
        if (userProfile && userProfile.activeDeviceId && userProfile.activeDeviceId !== currentDevice) {
            alert('Security Notice: This account is currently active on another device. Simultaneous device sharing is not permitted on Medchanic.MD.');
            localStorage.clear();
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }
};
