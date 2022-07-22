const mod = {
    async load() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('mod loaded');
    }
}
addEventListener('gameload', e => {
    e.game.registerMod('mod', mod);
});