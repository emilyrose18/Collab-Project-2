const loginButton = document.querySelector('#loginButton')

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    console.log("hello");
   
    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert("You are now logged in!")
        document.location.replace('/');
      } else {
        alert('Failed to login');
      }
    }
    else {
        alert('You need to fill the form out');
    }
  };
  
  loginButton.addEventListener('click', loginFormHandler)
  document.querySelector('#login-form');