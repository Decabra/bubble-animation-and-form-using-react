import {useState, useEffect} from  'react';

const useForm = (callback, validate) => {
    const[values, setValues] = useState({});
    const[errors, setErrors] = useState({});
    const[isSubmit, setIsSubmit] = useState(false)
    const[isChange, setIsChange] = useState(false)

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmit){
            callback();
        }
        setIsSubmit(false);
    } , [callback, errors, isSubmit, validate, values]);
    
    useEffect(() => {
        if(isChange){
            setErrors(validate(values))
        }
    }, [isChange, validate, values])
    
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
    };
    const handleChange = (event) => {
        setIsChange(true)
        event.persist();
        setValues( values => ({...values, [event.target.name]: event.target.value}));
    };

    return {handleChange, handleSubmit, values, errors}
};
export default useForm;
