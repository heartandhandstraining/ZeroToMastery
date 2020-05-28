# ZeroToMastery

This repository contains the source code, algorithms, resources and documents used during building 2 projects in the course: [The Complete Web Developer in 2020: Zero to Mastery](https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/)

## Project 1: RoboFriends

This app fetches some (JSON) data and displays a list of robofriends to the user. Via a searchbox, this user can search for a specific robofriend.
The app is hosted by Github Pages at [this link](https://thomasvoets.github.io/ZeroToMastery/)

## Project2: SmartBrain

SmartBrain is a Fullstack PERN project. PERN stands for:

- [PostgreSQL](https://www.postgresql.org/) - Database Solution
- [Express](https://expressjs.com/) - Node.js Framework
- [React](https://reactjs.org/) - Brower-side JavaScript Library
- [Node](https://nodejs.org/en/) - Server-side JavaScript Runtime

This app handles user registration and login/logout. If a user is logged in, he/she can submit a picture (in the form of a url). The app will locate a face in this picture and showes it to the user.

The front-end, called 'smart-brain' talks to a JSON web Server, called 'smart-brain-api'. This server handles all requests of the frontend and reaches out the [Clarifai API](https://www.clarifai.com/) to get the location of the face in the picture. The backend communicates to a PostgreSQL server via the package [Knex.js](http://knexjs.org/).

Please note that this app is not deployed to the web because it's code base is part of this course repo. So it's not possible to split this app into 2 Heroku projects. Neverthelless, this app is production ready with some small modifications:

- Split the app into 2 repositories, e.g. smart-brain and smart-brain-api & create a heroku project for each.
- For the back-end:
  - Make sure that the API key is set to an environment variable
  - Push it ot Heroku and set up the Postgres database
  - Handle the database connection as discribed on the [official docs](https://devcenter.heroku.com/articles/heroku-postgresql#connecting-in-node-js)
- The front-end should work out of the box. But if there are any issues, check out the [official docs](https://create-react-app.dev/docs/deployment/#static-server). Don't forget to copy all the api's (in the fetch methods) to the location of the server
