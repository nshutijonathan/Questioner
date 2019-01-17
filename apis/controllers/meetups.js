const meetups = require('../models/meetup.js');
const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
  res.send({
  	status: 200,
  	data: meetups
  });
});

router.post('/', (req, res) => {
	const meetup ={
		id: meetups.length + 1,
	    createdon: new Date(),
	    location: req.body.location,
	    images: req.body.images,
	    topic: req.body.topic,
	    happeningon: req.body.happeningon,
	    tags:req.body.tags
	};

	meetups.push(meetup);
	res.send({
		status: 200,
		data: meetups
	});
	});

module.exports = router;