const submitButton = document.querySelector('#button')
const addLocation = async (event) => {
    event.preventDefault();
    console.log("helloooooo");
  
    const location_name = document.querySelector('#location').value.trim();
    const description = document.querySelector('#description').value.trim();
    const due_date = document.querySelector('#due-date').value.trim();
  
    if (location_name && description && due_date) {
      const response = await fetch('/api/bucketlist', {
        method: 'POST',
        body: JSON.stringify({ location_name, description, due_date }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('yay');
      } else {
        alert('Failed to sign up.');
      }
    }
    else {
        alert('You need to fill the form out');
    }
  };
  
    submitButton.addEventListener('click', addLocation);