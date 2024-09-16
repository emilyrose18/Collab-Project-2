const signupSubmitButton = document.querySelector('#signupButton')

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    console.log("hello");
   
    const email = document.querySelector('#email').value.trim();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
    else {
        alert('You need to fill the form out');
    }
  };
  
 
  signupSubmitButton.addEventListener('click', signupFormHandler);