const express = require("express");
const Login = require("../Structure/Login");
const Register = require("../Structure/Register");
const Contacts = require("../Structure/Contacts");
const Senior = require("../Structure/Senior");
const Fet = require("../Structure/Fet");
const router = express.Router();

router.post("/sign-in", (req, res) => {
   const login = new Login({
      username: req.body.username,
      password: req.body.password
   });
   login.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/sign-up", (req, res) => {
   const register= new Register({
    firstName: req.body. firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    retypeEmail: req.body.retypeEmail,
    retypePassword: req.body.retypePassword,
    Mnumber: req.body.Mnumber
   });
   register.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/contact", (req, res) => {
   const contact = new Contacts({
    email: req.body.email,
    name: req.body.name,
    subject: req.body.subject,
    description: req.body.description,
   });
   contact.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/phases", (req, res) => {
   const senior = new Senior({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    phone:req.body.phone,
    email:req.body.email,
    address:req.body.address,
    nextOfKinFirstName:req.body.nextOfKinFirstName,
    nextOfKinLastName:req.body.nextOfKinLastName,
    nextOfKinEmail:req.body.nextOfKinEmail,
    nextOfKinPhone:req.body.nextOfKinPhone,
    selector:req.body.selector,
    selector1:req.body.selector1
   });
   senior.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/fet", (req, res) => {
    const fet = new Fet({
     firstName:req.body. firstName,
     lastName:req.body.lastName,
     phone:req.body.phone,
     email:req.body.email,
     address:req.body.address,
     nextOfKinFirstName:req.body.nextOfKinFirstName,
     nextOfKinLastName:req.body.nextOfKinLastName,
     nextOfKinEmail:req.body.nextOfKinEmail,
     nextOfKinPhone:req.body.nextOfKinPhone,
     selector1:req.body.selector1
    });
    fet.save()
       .then(data => {
          res.json(data)
       })
       .catch(error => {
          res.json(error)
       }
       )
 })
module.exports = router;