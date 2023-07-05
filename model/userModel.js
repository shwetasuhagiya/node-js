const mongoose = require('mongoose');

const loginModel = new mongoose.Schema({
        id : {type : Number},
        firstName : {type : String},
        lastName : {type : String},
        maidenName : {type : String},
        age : {type : Number},
        gender : {type : String},
        email : {type : String},
        phone : {type : String},
        username : {type : String},
        password : {type : String},
        birthDate : {type : String},
        image : {type : String},
        bloodGroup : {type : String},
        height : {type : Number},
        weight : {type : Number},
        eyeColor : {type : String},
        hair : {
            color : {type : String},
            type : {type : String}
        },
        domain : {type : String},
        ip : {type : String},
        address : {
            address : {type : String},
            city : {type : String},
            coordinates : {
                lat : {type : Number},
                lng : {type : Number}
            },
            postalCode : {type : String},
            state : {type : String}
        },
        macAddress : {type : String},
        university : {type : String},
        bank : {
            lacardExpiret : {type : String},
            cardNumber : {type : String},
            cardType : {type : String},
            currency : {type : String},
            iban : {type : String}
        },
        company : {
            address : {
                address : {type : String},
                city : {type : String},
                coordinates : {
                    lat : {type : Number},
                    lng : {type : Number}
                },
                postalCode : {type : String},
                state : {type : String}
            },
        },
        ein : {type : String},
        ssn : {type : String},
        userAgent : {type : String},
  });

  const login_Model = mongoose.model('user', loginModel);

  module.exports = login_Model;