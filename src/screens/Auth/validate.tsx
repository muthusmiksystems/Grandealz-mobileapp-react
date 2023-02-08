const validate = (details) => {
    const formErrors = {};
    console.log("passowrd present", details)
    //Login page or sign in
    if (details.emailorusername !== undefined) {
      if (details.emailorusername.length == 0) {
        formErrors.emailorusername = "Email/Username is required!";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(details.emailorusername)) {
        if (details.emailorusername.length < 4) {
          formErrors.emailorusername = "Please enter a valid emailId!";
        }
      }
    }
    //Sign up
   if (details.email !== undefined) {
      if (details.email.length == 0) {
        formErrors.email = "Email is required!";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(details.email)) {
        formErrors.email = "Please enter a valid emailId !";
      }
    }
    //ForgotPage email
    if (details.forgotemail !== undefined) {
      if (details.forgotemail.length == 0) {
        formErrors.forgotemail = "Email is required!";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(details.forgotemail)) {
        formErrors.forgotemail = "please enter a valid emailId!";
      }
    }
    //Sign Up phone number
    if (details.phone !== undefined) {
      if (details.phone.length == 0) {
        formErrors.phone = "Mobile Number is required!";
      } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(details.phone)) {
        formErrors.phone = "This is not a valid mobile number!";
      }
    }
    //login password loginpassword
    if (details.loginpassword !== undefined) {
      console.log(details.loginpassword, "checking")
      if (details.loginpassword.length == 0) {
        formErrors.loginpassword = "Password is required!";
      }
    }
    //Sign Up password
    if (details.password !== undefined) {
      if (details.password.length == 0) {
        formErrors.password = "Password is required!";
      } else if (!/^[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(details.password)) {

        formErrors.password = "password must have min 8 characters with number";

      }
    }

    
    //Sign Up confirm password
    if (details.password !== undefined) {
      if (details.password2 !== undefined) {
  
        if (details.password2.length == 0) {
          formErrors.password2 = " Confirm password is required!";
        }
        else if (details.password2 !== details.password) {
          formErrors.password2 = "Confirm password doesn't match!";
        }
      }
    }
    
    if (details.firstName !== undefined) {
      if (details.firstName.length == 0) {
        formErrors.firstName = "First Name is required!";
      }
    }
  
   if (details.lastName !== undefined) {
      if (details.lastName.length == 0) {
        formErrors.lastName = "Last Name is required!";
      }
    }
  
    if (details.userName !== undefined) {
      if (details.userName.length == 0) {
        formErrors.userName = "User Name is required!";
      } else if (!/^(?=.*?[a-z])(?=.*?[0-9]).{5,}$/.test(details.userName)) {
        formErrors.userName = "User Name should contain lower case alphabets only and atleast 1 numeric value";
      }
    }
  
    return formErrors;
  };
  export default validate;