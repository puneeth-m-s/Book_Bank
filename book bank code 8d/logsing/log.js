function add(){    
    var Email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;
    
    if (Email === 'admin' && password === 'password') {
      document.getElementById('Email').textContent = 'Login successful!';
    } else {
      document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
  }