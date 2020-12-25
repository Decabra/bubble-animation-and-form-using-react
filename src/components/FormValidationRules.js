function validate(values){
    let errors = {};
    if (!values.fname){
        errors.fname = "Full name is required"
    }
    else if(values.fname.length < 6){
        errors.fname = "Full name must be 6 or more characters"
    }
    if (!values.usrname){
        errors.usrname = "Username name is required"
    }
    else if(/\s/.test(values.usrname)){
        errors.usrname = "Username must not contains spaces"
    }
    if (!values.email){
        errors.email = "Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid"
    }
    if (!values.birthYear){
        errors.birthYear = "Year of birth is required"
    }
    else if(!/^(19|20)\d{2}$/.test(values.birthYear)){
        errors.birthYear = "Please enter a valid Year"
    }
    else if((2020 - values.birthYear) < 15){
        errors.birthYear = "Age must be 15 years or more"
    }
    if (!values.contact){
        errors.contact = "Mobile number is required"
    }
    else if (!/^[0-9]+$/.test(values.contact)){
        errors.contact = "Mobile number must contains numbers only"
    }
    if (!values.gender){
        errors.gender = "Choose your gender"
    }
    if (!values.country){
        errors.country = "Country is required"
    }
    return errors;
}
export default validate;
