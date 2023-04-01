window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
  const time = Math.floor(Math.random() * 5) + 1; // random time between 1 and 5 seconds
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i+1} resolved after ${time} seconds`);
    }, time * 1000);
  });
  promises.push(promise);
}
