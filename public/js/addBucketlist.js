const submitButton = document.querySelector('#button')
const addLocation = async (event) => {
    event.preventDefault();
    
    console.log("hello");
  
    const location = document.querySelector('#location').value.trim();
    const description = document.querySelector('#description').value.trim();
    const due_date = document.querySelector('#due-date').value.trim();
  
    if (location && description && due_date) {
      const response = await fetch('/api/location', {
        method: 'POST',
        body: JSON.stringify({ location, description, due_date }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('Bucketlist added!');
      } else {
        alert('Failed to add bucketlist.');
      }
    }
    else {
        alert('You need to fill the form out');
    }
  };
  
submitButton.addEventListener('click', addLocation)
document.querySelector('#bucketlist-form');