const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// MongoDB Configuration
const mongoURI = "mongodb://localhost:27017/nvd";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.error("MongoDB connection error:", err));

// Define Schema and Model
const cveSchema = new mongoose.Schema({}, { strict: false });
const CVE = mongoose.model("CVE", cveSchema, "cve_data");

// API Routes

// Get all CVEs with pagination
app.get("/api/cves", async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    try {
        const totalRecords = await CVE.countDocuments();
        const cves = await CVE.find().skip(skip).limit(parseInt(limit));
        res.json({ totalRecords, cves });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get CVE by ID
app.get("/api/cves/:id", async (req, res) => {
    try {
        const cve = await CVE.findOne({ "cve.id": req.params.id });
        if (!cve) return res.status(404).json({ message: "CVE not found" });
        res.json(cve);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Filter CVEs by year
app.get("/api/cves/year/:year", async (req, res) => {
    const { year } = req.params;
    try {
        const cves = await CVE.find({ "cve.published": new RegExp(`^${year}`) });
        res.json(cves);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Filter CVEs by score
app.get("/api/cves/score", async (req, res) => {
    const { min = 0, max = 10 } = req.query;
    try {
        const cves = await CVE.find({
            $or: [
                { "metrics.cvssMetricV2.cvssData.baseScore": { $gte: parseFloat(min), $lte: parseFloat(max) } },
                { "metrics.cvssMetricV3.cvssData.baseScore": { $gte: parseFloat(min), $lte: parseFloat(max) } },
            ],
        });
        res.json(cves);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get CVEs last modified in N days
app.get("/api/cves/modified/:days", async (req, res) => {
    const { days } = req.params;
    const targetDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

    try {
        const cves = await CVE.find({ "cve.lastModified": { $gte: targetDate } });
        res.json(cves);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
