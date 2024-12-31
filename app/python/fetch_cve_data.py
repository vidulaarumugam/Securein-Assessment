import requests
import pymongo
import time
from datetime import datetime

# MongoDB Configuration
MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "nvd"
COLLECTION_NAME = "cve_data"

# NVD API Configuration
API_BASE_URL = "https://services.nvd.nist.gov/rest/json/cves/2.0"
API_PARAMS = {"startIndex": 0, "resultsPerPage": 1000}  # Customize as needed

# Connect to MongoDB
client = pymongo.MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]

def fetch_cve_data():
    """Fetch CVE data from the NVD API and store it in MongoDB."""
    start_index = 0
    total_records = 0

    while True:
        # Update startIndex for pagination
        API_PARAMS["startIndex"] = start_index

        response = requests.get(API_BASE_URL, params=API_PARAMS)
        if response.status_code != 200:
            print(f"Error fetching data: {response.status_code}")
            break

        data = response.json()
        if "vulnerabilities" not in data:
            print("No vulnerabilities found.")
            break

        vulnerabilities = data["vulnerabilities"]
        if not vulnerabilities:
            break

        # Insert/Update data in MongoDB
        for item in vulnerabilities:
            cve_id = item["cve"]["id"]
            collection.update_one({"cve.id": cve_id}, {"$set": item}, upsert=True)

        total_records += len(vulnerabilities)
        start_index += len(vulnerabilities)
        print(f"Processed {total_records} records so far...")

        if len(vulnerabilities) < API_PARAMS["resultsPerPage"]:
            break

    print(f"Completed syncing {total_records} records to MongoDB.")

if __name__ == "__main__":
    fetch_cve_data()
