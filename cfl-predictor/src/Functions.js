// General helper functions

Sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}