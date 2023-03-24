const express = require('express');
const router = express.Router();
const Phones = require('../models/Phone.model');

router.get("/phones", (req, res, next) => {
    res.status(200).json({Phones});
  }); 

  router.get('/:phoneId', async (req, res) => {
    const phoneFound = await Phones.findById(req.params.phoneId)
    res.status(200).json({phoneFound: phoneFound})
});
 
  
  
  