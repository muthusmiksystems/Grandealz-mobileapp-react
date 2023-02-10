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

        if (formValues.Name && formValues.address && formValues.locality && formValues.mobile && formValues.pincode) {
          setFormErrors(validate(formValues));
          console.log("sujithhhhhhhhh", formValues)
        }
        else {
          if (formValues.Name===undefined && formValues.phone && formValues.pincode && formValues.address && formValues.locality) {
            let Error = { "Name": "Name is required!" }
            setFormErrors(Error);
          }
          else if (formValues.phone===undefined && formValues.Name && formValues.pincode && formValues.address && formValues.locality) {
            let Error = { "mobile": "Mobile no is required!" }
            setFormErrors(Error);
          }
          if (!formValues.pincode===undefined && formValues.Name && formValues.phone && formValues.address && formValues.locality) {
            let Error = { "pincode": "pincode is required!" }
            setFormErrors(Error);
          }
          else if (!formValues.address===undefined && formValues.Name && formValues.phone && formValues.pincode && formValues.locality) {
            let Error = { "address": "Address is required!" }
            setFormErrors(Error);
          }
          else if (!formValues.locality===undefined && formValues.Name && formValues.phone && formValues.pincode && formValues.address) {
            let Error = { "locality": "locality is required!" }
            setFormErrors(Error);
          }
          else {
            let Error = { "allerror": "Please fill all fields!" }
            setFormErrors(Error);
          }
        }
    console.log('formValues handlesubmit.....', formValues);
    //setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setData(formValues);
    }
  }, [formErrors]);

  return { handleChange, details, handleSubmit, formErrors, data, formValues }

}
export default useForm;