import { useState, useEffect } from "react";


const useForm = (validate) => {
    const [ details] = useState({});
    var [data,setData]=useState()
    const [formValues, setFormValues] = useState(details);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  

    const handleChange = (e,name) => {
    // const { name, value } = e.target;
    console.log(formValues,"useformdata.....");
    setFormValues({ ...formValues, [name]:e});

  };

  const handleSubmit = (e) => {
    e.preventDefault();
        if (formValues.firstName && formValues.lastName && formValues.email && formValues.password && formValues.phonenumber) {
          setFormErrors(validate(formValues));
        }
        else {
          if (!formValues.firstName && formValues.lastName && formValues.email && formValues.password &&  formValues.phonenumber) {
            let Error = { "signundef": "First Name is required!" }
            setFormErrors(Error);
          }
          else if (!formValues.lastName && formValues.firstName && formValues.email && formValues.password &&   formValues.phonenumber) {
            let Error = { "signundef": "Last Name is required!" }
            setFormErrors(Error);
          }
          else if (!formValues.email && formValues.lastName && formValues.firstName && formValues.password &&  formValues.phonenumber) {
            let Error = { "signundef": "Email is required!" }
            setFormErrors(Error);
          }
          else if (!formValues.password && formValues.lastName && formValues.email && formValues.firstName &&  formValues.phonenumber) {
            let Error = { "signundef": "Password is required!" }
            setFormErrors(Error);
          }
          else if (!formValues.lastName && formValues.email && formValues.password && formValues.firstName && formValues.phonenumber) {
            let Error = { "signundef": "Confirm password is required!" }
            setFormErrors(Error);
          }
          else if (!formValues.phonenumber && formValues.lastName && formValues.email && formValues.password &&   formValues.firstName) {
            let Error = { "signundef": "Mobile Number is required!" }
            setFormErrors(Error);
          }
          else {
            let Error = { "signundef": "Please fill all the fields!" }
            setFormErrors(Error);
          }
        }     
    console.log('formValues handlesubmit', formValues);
    //setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

    useEffect(() => {
    console.log(formErrors),"errors";
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues,'formValues'); 
      setData(formValues);
      console.log(data);
    }
  },[formErrors]);
  

   return { handleChange, details, handleSubmit,formErrors,data,formValues}

}
export default useForm;