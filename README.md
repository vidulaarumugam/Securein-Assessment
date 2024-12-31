
A full-stack application that integrates with the NVD CVE API to retrieve, process, and visualize Common Vulnerabilities and Exposures (CVE) data. The project features a backend for data ingestion and API services, a frontend for interactive UI visualization, and a MongoDB database for secure data storage.

The project uses the following tech stack:

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
