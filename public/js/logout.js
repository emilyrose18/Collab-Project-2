const logout = async () => {
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      alert("You are now logged out")
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#logout')
  document.addEventListener('click', logout);