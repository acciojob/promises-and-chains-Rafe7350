// Get references to the form elements
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('btn');

// Add a listener to the form submission event
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Check if the inputs are valid
  if (!nameInput.value || !ageInput.value) {
    alert('Please enter valid details');
    return;
  }

  // Create a promise that resolves after 4 seconds with an object
  const delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(ageInput.value) >= 18) {
        resolve({ name: nameInput.value, age: Number(ageInput.value) });
      } else {
        reject({ name: nameInput.value });
      }
    }, 4000);
  });

  // Handle the result of the promise
  delayPromise
    .then((data) => {
      alert(`Welcome, ${data.name}. You can vote.`);
    })
    .catch((error) => {
      alert(`Oh sorry ${error.name}. You aren't old enough.`);
    });
});
