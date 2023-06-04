class Profile {

    setProfile(n, a, e,) {
        this.name = n;
        this.age = a;
        this.email = e;

        this.saveProfile();
    }

    getProfile() {
        document.getElementById("FN").value = localStorage.getItem('name');
        document.getElementById("age").value = localStorage.getItem('age');
        document.getElementById("e").value = localStorage.getItem('email');
    }

    saveProfile() {
        let storeName = document.getElementById('FN').value;
        localStorage.setItem('name', storeName);
        let storeAge = document.getElementById('age').value;
        localStorage.setItem('age', storeAge);
        let storeEmail = document.getElementById('e').value;
        localStorage.setItem('email', storeEmail);
       alert('Data saved in localStorage succussfully!!')
    }

}

function validateForm(e) {
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
  
  var name = document.forms['Login']['fName'].value;

  if (!name) {
    alert("Please enter your name");
    document.getElementById('FN').focus();
  } else if (name.length < 3) {
    alert("Name must be at least 3 characters long");
    document.getElementById('FN').focus();
    // return false
  }
  

    var age = document.forms['Login']['ageField'].value;

    if (!age) {
      alert("Age cannot be empty");
      document.getElementById('age').focus();
    //  return false
    } else if (parseInt(age) < 12 || parseInt(age) > 95) {
      alert("Age should be between 12 and 95");
      document.getElementById('age').focus();
    }
    

    var email = document.forms['Login']['email'].value;

    if (!email) {
      alert("Please enter your email address");
      document.getElementById('e').focus();
    } else if (!isValidEmail(email)) {
      alert("Not a valid email address");
    // return false
    }
    
    function isValidEmail(email) {
      var regex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
      return regex.test(email);
    }
  return true;
}

function UpdateProfile() {
    Profile = new Profile();
    if (validateForm()) {
        Profile.setProfile();
    }  
}

function displayProfile() {
  m = new Profile();
  console.log(m) 
    m.getProfile();
}