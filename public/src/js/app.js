let deferredPrompt;

// check if sw is available in user browser
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js') // returns a promise
    .then(() => console.log('service worker registered.'));
}

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt fired');
  event.preventDefault;
  deferredPrompt = event;
  return false;
});

const getIp = new Promise((resolve, reject) => {
  fetch('https://httpbin.org/ip')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});

(async () => {
  const response = await fetch('https://httpbin.org/ip');
  const json = await response.json();
  console.log(json);
})();
