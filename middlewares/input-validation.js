const { response } = require("express");
const { validationResult } = require("express-validator");

const inputValidation = ( req, res = response, next ) => { 

  const errors = validationResult( req );

  if ( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });  
  }

  return next();

};

module.exports = inputValidation;
