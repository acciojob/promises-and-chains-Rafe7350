//your JS code here. If required.
function getObject() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ age: document.getElementById('age').value, name: document.getElementById('name').value });
      }, 4000);
    });
  }
  
  function extractValue(obj) {
    return new Promise(resolve => {
      resolve(obj.age);
    });
  }
  
  function createNewObject(value) {
    return new Promise(resolve => {
      resolve({ welcomeMessage: `Welcome, ${value}. You can vote.` });
    });
  }
  
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
  
    if (!name || !age) {
      alert('Please fill in all fields.');
      return;
    }
  
    getObject()
      .then(obj => {
        if (obj.age >= 18) {
          return extractValue(obj);
        } else {
          throw new Error('You are not old enough.');
        }
      })
      .then(value => createNewObject(value))
      .then(newObj => {
        alert(newObj.welcomeMessage);
      })
      .catch(error => {
        alert(`Oh sorry ${name}. ${error.message}`);
      });
  });
  

