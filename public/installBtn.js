window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    console.log('👍', 'beforeinstallprompt', event)

    window.deferredPrompt = event

    // show install button
    document.getElementById('butInstall').classList.toggle('hidden', false)
})

document.getElementById('butInstall').addEventListener('click', async () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    document.getElementById('butInstall').classList.toggle('hidden', true)
})