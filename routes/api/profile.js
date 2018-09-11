const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Profile = require('../../models/Profile');

router.get('/test',(req,res)=> res.json({msg : 'Profile Works'}));

router.get('/',passport.authenticate('jwt', {session: false}), (req,res) => {
   const errors = {};
    Profile.findOne({user : req.user.id})
    .then(profile => {
        if(!profile){
            errors.noprofile = "There is no profile for this user";
            return res.status(404).json()
        }
    });
});
module.exports = router;