PROJECT OVERVIEW
A full-stack application that integrates with the NVD CVE API to retrieve, process, and visualize Common Vulnerabilities and Exposures (CVE) data. The project features a backend for data ingestion and API services, a frontend for interactive UI visualization, and a MongoDB database for secure data storage.

TECH STACK
1.Backend Framework:
Express.js: A minimal and flexible Node.js web application framework used for building the server-side application.
Database:
MongoDB: A NoSQL database for storing CVE (Common Vulnerabilities and Exposures) data. It's configured using Mongoose for object modeling.

2.Frontend Template Engine:
EJS (Embedded JavaScript): A templating engine used for rendering dynamic HTML pages with data passed from the backend.

3.API Integration:
NVD (National Vulnerability Database) API: The API is used to fetch CVE data and populate MongoDB. The Python script periodically pulls CVE data from this API and stores it in MongoDB.

4.Frontend:
HTML/CSS: For structuring and styling the web pages.
JavaScript: Used for handling pagination, updating results per page, and navigating between CVE details and list views.

5.Utilities:
dotenv: For loading environment variables, such as MongoDB connection details, from a .env file.
Requests: A Python library used in the script for making HTTP requests to the NVD API.
MongoDB's PyMongo: A Python client for interacting with MongoDB.
Deployment and Environment:

Local development: The application is set up to run on localhost (port 5000 for Express server, MongoDB running locally).
Server-side rendering: The application uses server-side rendering (SSR) with EJS to dynamically display CVE data.
This stack is designed for efficient data retrieval and display, offering functionalities like pagination and detailed CVE views.

PROBLEM STATEMENT

1.Fetch CVE Data: Consume CVE information from the NVD CVE API and store it in a database.

2.API Base URL: https://services.nvd.nist.gov/rest/json/cves/2.0
Use pagination (startIndex and resultsPerPage) to access all CVEs.
Data Processing:

3.Cleanse and deduplicate data.
Ensure high data quality.
Batch Synchronization:

4.Periodically synchronize the CVE database in batch mode (full refresh or incremental updates).
Develop APIs:

5.Fetch CVE details by:
CVE ID
Specific year
CVE Score
Last modified in N days

6.UI Visualization:
Display CVE data in a table with a "Total Records" count.
Include "Results Per Page" options (10, 50, 100) to dynamically update displayed records.

WORKFLOW
1.The application periodically fetches CVE data from the NVD API using Node.js and stores it in MongoDB.
2.Express handles requests from the front-end, fetching and filtering the data as per the user's query (e.g., by CVE ID, year, or score).
3.EJS dynamically renders the data on the front-end, allowing users to view the CVE records in a table with pagination options.
4.The backend also includes functionality for periodic synchronization of the database, either with a full refresh or incremental updates to keep the stored CVE data up to date.

SETUP INSTRUCTIONS
1.Clone the repository

git clone https://github.com/yourusername/cve-project.git
cd cve-project

2.Install dependencies:

npm install


SCREENSHOTS:
Read the API and display its results in a table with a "Total Records" count.:

<img width="959" alt="image" src="https://github.com/user-attachments/assets/3c8edcdf-5ce0-4c07-a376-c202cdd2ba3b" />

Whenarowis clicked, navigate to the second page:

<img width="959" alt="image" src="https://github.com/user-attachments/assets/80bca419-97c9-4735-baf6-dbd8976fc35c" />


