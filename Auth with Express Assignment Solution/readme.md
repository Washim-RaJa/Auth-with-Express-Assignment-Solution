# Introduction
- This is a full stack user info and login system that resembles functionality of instagram.

## Used tech stacks
- HTML, CSS and JavaScript for frontend.
- Node.js, Express.js and MongoDB for backend.

## Instructions
1. Download the project file.
2. Navigate to the backend folder.
3. Install package.json file by running `npm init -y` command in your terminal.
4. Install some dependencies by running the following command as shown below
    ```

    npm install express cookie-parser bcrypt mongoose jsonwebtoken cors email-validator dotenv

    ```
5. Create a `.env ` file in backend folder and inside the file define your "PORT", "MONGODB_URL" and "SECRET" key. A demonstration is shown for reference
    ``` 
        PORT= your_port_number
        MONGODB_URL=mongodb://localhost:27017/<database_name>
        SECRET=yoursecretkey
    ```
6. Now run the `node index.js` command in your terminal to start the server and establish the connection to your database.
7. Now navigate to frontend folder.
8. Inside the frontend folder load the `index.html` file which will render the signup form.
9. Fill your details and click signup button and it will redirect to the login page, fill your details there and it will again redirect to the user profile page and that's it, we are done!

## Note:
- In this project, I could not able to develop the user profile functionality properly as it needs the cookie value to get the user credentials.
- I tested the get user details api on Postman and it worked fine there but I couldn't be able to do the same on html file from client side on browser.
- Any instruction/suggestion to fix this issue will be highly appreciated.