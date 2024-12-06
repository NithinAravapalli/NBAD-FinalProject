## Goal:
##### Create a live web application based on the specifications outlined below.

---

#### Use MongoDB, Use React
- Choose one of the following: Node.js, PHP, Python, or Java.

--- 

- App title:
- The title of your app should be the N54

Requirements:

* [x] The app must be a Single Page Application (SPA), with the frontend and backend fully decoupled and communicating through HTTP calls.
* [x] Focus on functionality; design is secondary.
* [x] The app should begin with a login page.
* [x] Use JWT for authentication.
* [x] The credentials should be your first name as both the login and password (for testing purposes).
* [x] Usually, credentials are stored encrypted inside the database. But to simplify this project, feel free to hardcode it on the backend code.
* [x] After logging in, users should be redirected to a dashboard page and not see the login page again, unless they log out.
* [x] The dashboard page must contain a 200-word summary of the selected topic.
* [x] Include a reference (URL) for the source of your content.
* [x] Below the summary, add a paragraph describing the technical aspects of your project, such as the tech stack and infrastructure.
* [x] All pages of the SPA should include a top menu with links to the Dashboard, Summary, and Reports pages.
* [x] Add the logout button there as well.
* [x] Attempting to access the Dashboard, Summary, or Reports pages without logging in should redirect users to the login page.
* [x] The Summary and Reports pages should each include a dynamic chart.
* [x] The chart content must be retrieved asynchronously from the backend/database via an HTTP GET call with a JSON response.
* [x] The chart data can be hardcoded and should correlate with your topic.
* [x] Use any charting library (e.g., D3.js).
* [x] Include a paragraph below each chart explaining its content and source.
* [x] Incorporate ADA/WCAG accessibility principles into the frontend code as much as possible.
* [x] Host both the backend and frontend on the same server (box).
* [x] Use NGINX or Apache to serve the frontend.
* [x] The backend should run on port 3000.
* [x] The frontend should run on the standard HTTP port (80).
* [x] The backend should operate independently of the frontend and respond to HTTP calls appropriately.
* [x] You will likely need two endpoints - one for each chart.
* [x] Remember to use JWT to validate these requests.
* [x] Once your app is fully operational you can work on making it prettier.
* [x] Commit the entire project (backend and frontend code) to a single GitHub repository.
* [x] Do not commit sensitive information, like secret keys or passwords.
* [x] Do not include unnecessary files (e.g., node_modules).
* [x] Use .gitignore to manage this.
* [x] Ensure that the app is accessible from any computer at any time. Verify that it remains running even after disconnecting from SSH.

##### Content:
###### Topic-Recent innovations in Generative AI from the last 6 months

--- 

`
You must search online for an innovation/news related to the subject defined for your project. Once you choose one (1) random article, please take note of its URL, as you will need to cite it on the Dashboard text of your app. Also, from the content of that URL, you will invent two (2) possible data visualizations (charts). If the article already contains charts, you can mimic them on your app. The data of those charts must be realistic and based on the content of that source URL. As you can see, you will use the content you found online in a few places: on the Dashboard, to drive the charts, and on the textual explanation under the charts.
`