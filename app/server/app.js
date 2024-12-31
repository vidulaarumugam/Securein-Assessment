const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Configuration
const mongoURI = "mongodb://localhost:27017/nvd";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.error("MongoDB connection error:", err));

// Define Schema and Model
const cveSchema = new mongoose.Schema({}, { strict: false });
const CVE = mongoose.model("CVE", cveSchema, "cve_data");

// Get all CVEs with pagination and images
app.get("/cves/list", async (req, res) => {
    const { page = 1, limit = 10, sortBy = "cve.published", order = "asc" } = req.query;
    const skip = (page - 1) * limit;
    const sortOrder = order === "asc" ? 1 : -1;

    try {
        const totalRecords = await CVE.countDocuments();
        const cves = await CVE.find()
            .skip(skip)
            .limit(parseInt(limit))
            .sort({ [sortBy]: sortOrder });

        res.render("list", {
            cves,
            totalRecords,
            page: parseInt(page),
            limit: parseInt(limit),
            sortBy,
            order,
        });
    } catch (err) {
        res.status(500).send(`<p>Error: ${err.message}</p>`);
    }
});

// Get CVE by ID
app.get("/cves/:id", async (req, res) => {
    try {
        const cve = await CVE.findOne({ "cve.id": req.params.id });
        if (!cve) return res.status(404).send("<p>CVE not found</p>");

        res.render("details", { cve });
    } catch (err) {
        res.status(500).send(`<p>Error: ${err.message}</p>`);
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
