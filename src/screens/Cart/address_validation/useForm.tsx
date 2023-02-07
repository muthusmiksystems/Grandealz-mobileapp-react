import { useState, useEffect } from "react";


const useForm = (validate) => {
  const [details] = useState({});
  var [data, setData] = useState()
  const [formValues, setFormValues] = useState(details);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e, name) => {
    // const { name, value } = e.target;
    console.log(formValues, "useformdata.....");
    setFormValues({ ...formValues, [name]: e });
  };

  const handleSubmit = (e, type) => {
    
    e.preventDefault();
    switch (type) {
      case '1':
        //signup  
        if (formValues.Name && formValues.phone && formValues.pincode && formValues.address && formValues.locality) {
          setFormErrors(validate(formValues));
          console.log("sujithhhhhhhhh", formValues)
        }
        else {
          if (!formValues.Name && formValues.phone && formValues.pincode && formValues.address && formValues.locality) {
            let Error = { "Name": "Name is required!" }
            setFormErrors(Error);
          }
          else if (!formValues.phone && formValues.Name && formValues.pincode && formValues.address && formValues.locality) {
            let Error = { "mobile": "Mobile no is required!" }
            setFormErrors(Error);
          }
          if (!formValues.pincode && formValues.Name && formValues.phone && formValues.address && formValues.locality) {
            let Error = { "pincode": "pincode is required!" }
            setFormErrors(Error);
          }
          else if (!formValues.address && formValues.Name && formValues.phone && formValues.pincode && formValues.locality) {
            let Error = { "address": "Address is required!" }
            setFormErrors(Error);
          }
          else if (!formValues.locality && formValues.Name && formValues.phone && formValues.pincode && formValues.address) {
            let Error = { "locality": "locality is required!" }
            setFormErrors(Error);
          }
          else {
            let Error = { "allerror": "Please fill all fields!" }
            setFormErrors(Error);
          }
        }
        break;
    }
    console.log('formValues handlesubmit', formValues);
    //setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues, 'formValues.......', formErrors, "samuel");
      setData(formValues);
      console.log(data, "samuel");
    }
  }, [formErrors]);

  return { handleChange, details, handleSubmit, formErrors, data, formValues }

}
export default useForm;