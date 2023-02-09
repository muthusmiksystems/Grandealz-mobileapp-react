const validate = (details) => {

    const formErrors = {};

    // Name
    if (details.Name !== undefined) {
      if (details.Name.length == 0) {
        formErrors.Name = "Name is required!";
      }
    }
    
    //phone number
    if (details.phone !== undefined) {
      if (details.phone.length == 0) {
        formErrors.phone = "Mobile Number is required!";
      } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(details.phone)) {
        formErrors.phone = "This is not a valid mobile number!";
      }
    }
    //Pin code
    if (details.pincode !== undefined) {
      if (details.pincode.length == 0) {
        formErrors.pincode = "Pincode is required!";
      } 
    }

    //Address
   if (details.address !== undefined) {
      if (details.address.length == 0) {
        formErrors.address = "Address is required!";
      }
    }


    //Locality
   if (details.locality !== undefined) {
    if (details.locality.length == 0) {
      formErrors.locality = "Locality is required!";
    }
  }
  
    return formErrors;
  };
  export default validate;