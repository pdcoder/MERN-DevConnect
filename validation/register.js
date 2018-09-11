const Validator = require ('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegister(data){
    let errors = [];

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.name = !isEmpty(data.namel) ? data.name : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    if(!Validator.isEmpty(data.email)){
        errors.email = "Email is required";
    }

    if(!Validator.isEmpty(data.name)){
        errors.name = "Name is required";
    }

    if(!Validator.isEmpty(data.password)){
        errors.email = "Password is required";
    }

    if(!Validator.isLength(data.password, {min:6, max:30})){
        errors.password = "Password must be atleast 6 characters";
    }

    if(!Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password is required";
    }
    if(!Validator.equals(data.password, data.password2)){
        errors.password = "Password must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};