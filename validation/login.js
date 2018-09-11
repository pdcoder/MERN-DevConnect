const Validator = require ('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data){
    let errors = [];

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    if(!Validator.isEmpty(data.email)){
        errors.email = "Email is required";
    }

    if(!Validator.isEmail(data.password)){
        errors.email = "Password is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};