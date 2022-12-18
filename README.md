This is MERN project based on Mongo DB ,Express Js , React Js and Node Js.
Our project works on the CRUD principle(Cretae, Read, Update and Delete).
MERN is a Full Stack developement which includes both Front-end and Back-end development in addition to a cloud database as a storage.

We use React JS as front-end developement for creating a complex and dynamic HTML.
It uses different components framework and connects them to the backend server and calls them as an HTML.

Express JS is a back-end or server web application framework running inside the Nodes JS (WHich is a runtime enviroment). Express JS is reponsible for routing URLs 
to server side that handles HTTP request and response.

MongoDB is used to store JSON data  and fetch our data using AXIOS API. 

On our project we use and installed different dependencies/packagesusing the npm (Nodemon Package Manager).
For the Clien part we install:
Axios (For Making API Requests), Moment (a Library for Date and Time), redux (For performing async tasks usind redux), @material-UI/core (for componnets imported from material UI).
Installing React JS

For the Server part we use dependencies:
Express (as a frame work), body-parser (for sending post requests), cors (for cross audited requests), mongoose (for creating models), nodemon (automatically reset the server incase of any change).
we initialize the Package.json (init -y)

Inorder to initialize the host we use "npm start" from the terminal in both the client directory and server directory to connect and eastablish database connectivity.
![CA1](https://user-images.githubusercontent.com/116893742/208264841-19d88c19-d6ed-458b-a025-004a56ecec00.JPG)
![CA2](https://user-images.githubusercontent.com/116893742/208264850-bf06da56-d2a4-47bf-978f-454f4d26c7eb.JPG)
![CA3](https://user-images.githubusercontent.com/116893742/208264856-a40d2f5c-d373-457c-9625-ad2b86cf5055.JPG)
![CA4](https://user-images.githubusercontent.com/116893742/208264865-8a9fd5b2-b500-4a3e-b213-27fd4de0b95c.JPG)

Our project is a student management system, which allows users to Store, Delete and populate student data. The system has two sections which are the create section which allows end users to create and save student information, and the second section the All Student part (table) which posts student information populated from the MongoDb. The All student section also includes the delete functionality under the action column. By clicking the Delete Icon a user can delete student information. To store a student's information, a user must fill out the form and click the Create Button. To store data, a user must fill in all the fields as required. The Registration number field takes only a number (integer) character. The other fields take only strings. All fields must be filled otherwise will not allow users to save/create the information. The section field is filled with a default "A" if the user didn't fill it. To see the effect the user must refresh the page after the creation of the student information.

Contribution-Isaias-10583631
I was mainly in the back-end/server development including:
Creating of Routes GET,POS, DELETE for fetching, updating and deleting data
Controllers that handle route functionality with the help of Express-JS and Node-JS
Setting up JSON Schema for MongoDB


