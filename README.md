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

## FILE STRUCTURE
<img width="484" alt="image" src="https://github.com/user-attachments/assets/353ecdfb-f686-429a-8d74-f6b2e73f6469" />



## WORKFLOW/APPROACH

The project is a full-stack application that retrieves, processes, and displays CVE data from the NVD API.

1.Data Fetching (Python): A Python script fetches CVE data periodically from the NVD API and stores it in MongoDB, ensuring up-to-date information.

2.Backend (Express.js & Node.js): Express.js serves as the backend, handling requests and interacting with MongoDB through Mongoose for data storage. Routes filter and fetch CVE data based on parameters like ID, year, and score.

3.Frontend (EJS): EJS is used to dynamically render HTML pages, displaying CVE data in a table with pagination and filtering options. Clicking on a record takes users to a detailed view.

4.Database (MongoDB): MongoDB stores the CVE data, with Mongoose providing schema modeling for easier database interaction.

5.Frontend Interaction: The UI is styled with HTML and CSS, while JavaScript handles dynamic elements like pagination.

6.Periodic Data Update: The Python script ensures regular updates to the CVE data, maintaining accuracy.

7.Deployment: The app is configured for local development with instructions for cloning, installing dependencies, and running the app.

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

## CONTACT
For queries or feedback, reach out at:
Name: Vidula N.A

Contact Number:9986747013

Email: vidulaarumugam6@gmail.com

GitHub: vidulaarumugam
