// ==========================================
// MEDCHANIC.MD - SM-2 ANKI FLASHCARD ENGINE
// ==========================================

const AnkiEngine = {
    // Calculate next review interval using SuperMemo SM-2 algorithm
    calculateNextReview: function(cardState, rating) {
        // rating: 'again' (1), 'good' (3), 'easy' (4)
        let { interval = 0, repetition = 0, easeFactor = 2.5 } = cardState;
        
        if (rating === 'again') {
            repetition = 0;
            interval = 1; // review again tomorrow / soon
        } else {
            if (repetition === 0) {
                interval = 1;
            } else if (repetition === 1) {
                interval = 6;
            } else {
                interval = Math.round(interval * easeFactor);
            }
            repetition++;
        }
        
        // Adjust Ease Factor
        if (rating === 'again') {
            easeFactor = Math.max(1.3, easeFactor - 0.2);
        } else if (rating === 'good') {
            // ease factor stays roughly same
        } else if (rating === 'easy') {
            easeFactor = easeFactor + 0.15;
        }
        
        const nextReviewDate = new Date();
        nextReviewDate.setDate(nextReviewDate.getDate() + interval);
        
        return {
            interval,
            repetition,
            easeFactor: parseFloat(easeFactor.toFixed(2)),
            nextReview: nextReviewDate.toISOString()
        };
    },
    
    // Filter cards due today
    getDueCards: function(allCards, userProgressMap) {
        const now = new Date();
        return allCards.filter(card => {
            const progress = userProgressMap[card.id];
            if (!progress || !progress.nextReview) return true; // new card
            return new Date(progress.nextReview) <= now;
        });
    }
};

// ==========================================
// DEVICE SESSION LOCKER & PAYMENT HELPER
// ==========================================

const MedchanicSecurity = {
    getDeviceFingerprint: function() {
        let fp = localStorage.getItem('medchanic_device_id');
        if (!fp) {
            fp = 'dev_' + Math.random().toString(36.2) + Date.now().toString(36);
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
