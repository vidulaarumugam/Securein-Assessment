const mongoose = require("mongoose");

// Define the Schema for CVEs
const cveSchema = new mongoose.Schema(
  {
    // Define key fields explicitly, or use strict: false to allow flexibility
    cve: {
      id: { type: String, required: true },
      publishedDate: { type: Date },
      metrics: {
        cvssMetricV2: {
          cvssData: {
            baseScore: { type: Number },
          },
        },
        cvssMetricV3: {
          cvssData: {
            baseScore: { type: Number },
          },
        },
      },
    },
  },
  { strict: false } // Allows storing dynamic fields from CVE data
);

// Add indexes to improve query performance
cveSchema.index({ "cve.id": 1 }); // Index for searching by ID
cveSchema.index({ "cve.publishedDate": 1 }); // Index for filtering by year

// Create the Model
const CVE = mongoose.model("CVE", cveSchema, "cve_data");

// Export the Model
module.exports = CVE;
