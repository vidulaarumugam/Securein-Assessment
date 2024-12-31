const express = require("express");
const CVE = require("../models/cveModel");

const router = express.Router();

// Get all CVEs with pagination
router.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * parseInt(limit);

  try {
    const totalRecords = await CVE.countDocuments();
    const cves = await CVE.find().skip(skip).limit(parseInt(limit));
    res.json({ totalRecords, cves });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get CVE by ID
router.get("/:id", async (req, res) => {
  try {
    const cve = await CVE.findOne({ "cve.id": req.params.id });
    if (!cve) return res.status(404).json({ message: "CVE not found" });
    res.json(cve);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Filter CVEs by year
router.get("/year/:year", async (req, res) => {
  const { year } = req.params;

  try {
    const cves = await CVE.find({ "cve.publishedDate": new RegExp(`^${year}`) });
    res.json(cves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Filter CVEs by score
router.get("/score", async (req, res) => {
  const { min = 0, max = 10 } = req.query;

  try {
    const cves = await CVE.find({
      $or: [
        { "cve.metrics.cvssMetricV2.cvssData.baseScore": { $gte: parseFloat(min), $lte: parseFloat(max) } },
        { "cve.metrics.cvssMetricV3.cvssData.baseScore": { $gte: parseFloat(min), $lte: parseFloat(max) } },
      ],
    });
    res.json(cves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
