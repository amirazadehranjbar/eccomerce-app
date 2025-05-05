const express = require("express");
const authRoutes = express.Router();

authRoutes.post("/admin/login", (req, res) => {

    const { email, password } = req.body;
    
    res.status(200).json({email, password});

});

module.exports = authRoutes;