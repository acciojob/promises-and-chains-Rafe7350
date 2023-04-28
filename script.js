// your JS code here. If required.
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
  const delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(ageInput.value) >= 18) {
        resolve({ name: nameInput.value, age: Number(ageInput.value) });
      } else {
        reject({ name: nameInput.value });
      }
    }, 4000);
  });

  delayPromise
    .then((data) => {
      alert(`Welcome, ${data.name}. You can vote.`);
    })
    .catch((error) => {
      alert(`Oh sorry ${error.name}. You aren't old enough.`);
    });
});