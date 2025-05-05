const express = require("express");
const authRoutes = express.Router();
const adminModel = require("../models/adminModel");

authRoutes.post("/admin/login", async (req, res) => {

    const { email, password } = req.body;

    const adminPassword = await adminModel.findOne({ email:email }).select("password");

    if (!adminPassword) throw "this email is not registered...!";

    console.log(adminPassword);
    
    res.status(200).json({email, password});

});

module.exports = authRoutes;