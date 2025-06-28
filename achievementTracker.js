/**
 * achievementTracker - Simple Badge and Achievement System
 * Author: MaryGiochi
 * License: Custom
 */

class achievementTracker {
    constructor() {
        this.achievements = new Set();
    }

    /**
     * Unlocks a new achievement.
     * @param {string} name - Name of the achievement to unlock.
     */
    unlock(name) {
        if (typeof name !== 'string' || name.trim() === '') {
            console.error('[achievementTracker] Invalid achievement name.');
            return;
        }
        if (this.achievements.has(name)) {
            console.log(`[achievementTracker] Achievement "${name}" already unlocked.`);
            return;
        }
        this.achievements.add(name);
        console.log(`[achievementTracker] Achievement unlocked: ${name}`);
    }

    /**
     * Checks if an achievement is unlocked.
     * @param {string} name - Name of the achievement.
     * @returns {boolean}
     */
    has(name) {
        return this.achievements.has(name);
    }

    /**
     * Lists all unlocked achievements.
     * @returns {string[]}
     */
    list() {
        return Array.from(this.achievements);
    }
}

// Example usage:
// const tracker = new achievementTracker();
// tracker.unlock('First Win');
// console.log(tracker.has('First Win')); // true
// console.log(tracker.list()); // ['First Win']

module.exports = achievementTracker;
