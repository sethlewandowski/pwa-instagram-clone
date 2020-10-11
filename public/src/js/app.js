let deferredPrompt;

// check if sw is available in user browser
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => console.log('service worker registered.'));
}

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt fired');
  event.preventDefault;
  deferredPrompt = event;
  return false;
});
