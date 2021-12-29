const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignupModels');
const contentsTemplateCopy = require('../models/ContentsModels');
const mongoose = require('mongoose');


router.post('/signup', (req, res)=> {
	const {username, password} = req.body
	signUpTemplateCopy.findOne({username: username}, (err, user) => {
		if (user){
			res.send({message: "User already registered"})
		} else {
			const user = new signUpTemplateCopy({
				username,
				password
			})

			user.save(err => {
				if (err){
					res.send(err)
				} else {
					res.send({message:"Successfully Registered, Please login now."})
				}
			})
			
		}
	})
})

/* router.post('/signup', (req, res) => {
	const signedUpUser = new signUpTemplateCopy({
		username: req.body.username,
		password: req.body.password,
	});

	signedUpUser
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			res.json(err);
		});
}); */

router.post('/login', (req, res) => {
	const {username, password} = req.body;
	signUpTemplateCopy.findOne({username:username}, (err, user)=>{
		if (user){
			if(password === user.password){
				res.send({message: "Login Successful", user:user})
			} else {
				res.send({message: "Password didn't match"})
			}
		} else {
			res.send({message: "User not registered"})
		}
	})
})

router.get('/contentList', (req, res) => {
	try {
		contentsTemplateCopy.find({}, (e, result) => {
			res.json(result);
		});
	} catch (e) {
		res.json(e);
	}
});

router.post('/write', (req, res) => {
	const contentsWrite = new contentsTemplateCopy({
		title: req.body.title,
		username: req.body.username,
		address: req.body.address,
		content: req.body.content,
	});

	contentsWrite
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
