window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    console.log('👍', 'beforeinstallprompt', event)
})