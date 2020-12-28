import React from 'react';
import useForm from './useForm'
import validate from './FormValidationRules'
import './Form.css'
const Form = () => {
    const {handleChange, handleSubmit, values, errors} = useForm(login, validate);
    function login(){
        alert("Form Submit")
        console.log(values)
    }
    return (
        <div className="section is-fullheight">
            <div className="container">
                <div className="column is-4 is-offset-4">
                    <div className="box">
                        <form onSubmit={handleSubmit} noValidate>
                            <label className="label custom-label">Registration</label>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className={`input ${errors.fname && 'is-danger'}`}
                                        placeholder="Full Name"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.fname || ""}
                                        name="fname" required />
                                    {errors.fname && (
                                        <p className="help is-danger">{errors.fname}</p>
                                    )}
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className={`input ${errors.usrname && 'is-danger'}`}
                                        placeholder="Username"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.usrname || ""}
                                        name="usrname" required />
                                    {errors.usrname && (
                                        <p className="help is-danger">{errors.usrname}</p>
                                    )}
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className={`input ${errors.email && 'is-danger'}`}
                                        placeholder="Email"
                                        type="email"
                                        onChange={handleChange}
                                        value={values.email || ""}
                                        name="email" required />
                                    {errors.email && (
                                        <p className="help is-danger">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className={`input ${errors.birthYear && 'is-danger'}`}
                                        placeholder="Year of Birth"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.birthYear || ""}
                                        name="birthYear" required />
                                    {errors.birthYear && (
                                        <p className="help is-danger">{errors.birthYear}</p>
                                    )}
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className={`input ${errors.contact && 'is-danger'}`}
                                        placeholder="Mobile Number"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.contact || ""}
                                        name="contact" required />
                                    {errors.contact && (
                                        <p className="help is-danger">{errors.contact}</p>
                                    )}
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Gender</label>
                                <div className="control">
                                    <label className="radio">
                                    <input
                                        className={`${errors.gender && 'is-danger'}`}
                                        type="radio"
                                        onChange={handleChange}
                                        value="male"
                                        name="gender" required />  Male</label>
                                    <label className="radio">
                                    <input
                                        className={`${errors.gender && 'is-danger'}`}
                                        type="radio"
                                        onChange={handleChange}
                                        value="female"
                                        name="gender" required />  Female</label>
                                    {errors.gender && (
                                        <p className="help is-danger">{errors.gender}</p>
                                    )}
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className={`input ${errors.country && 'is-danger'}`}
                                        placeholder="Country"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.country || ""}
                                        name="country" required />
                                    {errors.country && (
                                        <p className="help is-danger">{errors.country}</p>
                                    )}
                                </div>
                            </div>
                            <button type="submit" className="button is-block is-info is-fullwidth">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Form;
