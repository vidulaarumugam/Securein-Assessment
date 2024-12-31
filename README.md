## PROJECT OVERVIEW

A full-stack application that integrates with the NVD CVE API to retrieve, process, and visualize Common Vulnerabilities and Exposures (CVE) data. The project features a backend for data ingestion and API services, a frontend for interactive UI visualization, and a MongoDB database for secure data storage.



## TECH STACK
- **Backend Framework**: Express.js (Node.js)
- **Database**: MongoDB (Mongoose)
- **Frontend**: EJS, HTML/CSS(bootstrap), JavaScript
- **API Integration**: NVD CVE API
- **Utilities**: dotenv, axios, requests, MongoDB's PyMongo

Local development
The application is set up to run on localhost (port 5000 for Express server, MongoDB running locally).
Server-side rendering: The application uses server-side rendering (SSR) with EJS to dynamically display CVE data.
This stack is designed for efficient data retrieval and display, offering functionalities like pagination and detailed CVE views.

## PROBLEM STATEMENT

1.Fetch CVE Data: Consume CVE information from the NVD CVE API and store it in a database.

2.API Base URL: https://services.nvd.nist.gov/rest/json/cves/2.0
Use pagination (startIndex and resultsPerPage) to access all CVEs.
Data Processing:

3.Cleanse and deduplicate data:Ensure high data quality.

4.Batch Synchronization: Periodically synchronize the CVE database in batch mode (full refresh or incremental updates).


5.Develop APIs:
Fetch CVE details by
CVE ID
Specific year
CVE Score
Last modified in N days

6.UI Visualization:
Display CVE data in a table with a "Total Records" count.
Include "Results Per Page" options (10, 50, 100) to dynamically update displayed records.

## WORKFLOW

1.The application periodically fetches CVE data from the NVD API using Node.js and stores it in MongoDB.

2.Express handles requests from the front-end, fetching and filtering the data as per the user's query (e.g., by CVE ID, year, or score).

3.EJS dynamically renders the data on the front-end, allowing users to view the CVE records in a table with pagination options.

4.The backend also includes functionality for periodic synchronization of the database, either with a full refresh or incremental updates to keep the stored CVE data up to date.

## SETUP INSTRUCTIONS

1.Clone the repository

git clone https://github.com/yourusername/Securein-Assessment.git
cd cve-project

2.Install dependencies:

npm install

3.Running app.js

node app.js

## INPUT SCREENSHOTS
app.js
<img width="756" alt="image" src="https://github.com/user-attachments/assets/774dfbd6-24d1-40ba-b4f7-b690cbca9216" />

Seperate frontend files with help of ejs were made the code is attached in repository.

## OUTPUT SCREENSHOTS 

Read the API and display its results in a table with a "Total Records" count.:

<img width="959" alt="image" src="https://github.com/user-attachments/assets/3c8edcdf-5ce0-4c07-a376-c202cdd2ba3b" />

When a rowis clicked, navigate to the second page:

<img width="959" alt="image" src="https://github.com/user-attachments/assets/80bca419-97c9-4735-baf6-dbd8976fc35c" />


