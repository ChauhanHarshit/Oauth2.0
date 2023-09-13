const express = require('express');

const passport = require('passport');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/login',(req,res) =>{
    res.render('login');
});

// router.get('/logout',(req,res)=>{
//     // handle with passport
//     res.send('logging out');
// })

router.get('/google' ,passport.authenticate('google',{
    scope: ['profile']
}));

router.get('/google/redirect',passport.authenticate('google', {session: false}) ,(req,res) =>{
    // res.send("<h1>Thankyou for singing in</h1>")
    res.send(req.user);
    // res.redirect('/admin/add-product');rs
    console.log(err);
})


router.get('/facebook' ,passport.authenticate('facebook',{
    scope: ['profile']
}));

router.get('/facebook/redirect',passport.authenticate('facebook', {session: false}) ,(req,res) =>{
    // res.send("<h1>Thankyou for singing in</h1>")
    res.send(req.user);
    // res.redirect('/admin/add-product');
    console.log(err);
})

module.exports = router;