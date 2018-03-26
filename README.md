# Financial Times Cloud Engineer Technical Exercise

This repository stores a website that asks for and stores a simple rating score for using [ft.com](https://www.ft.com/).

This was completed for the Financial Times Cloud Engineer tech test.

This README outlines the app usage, specification, the process used to develop the app and proposed future steps.

## Getting started

### As a user

The website is deployed on Heroku [here](https://ft-feedback.herokuapp.com/).

### As a developer

This section assumed you have [Node.js](https://nodejs.org/en/) and [MongoDB](https://docs.mongodb.com/manual/installation/) installed on your machine.

1. `git clone` this repository.
1. `cd` into the cloned directory.
1. `npm install` to install dependencies.
1. `sudo service mongod start` to start mongo.
1. `npm test` to run tests.
1. `npm run lint` to lint source code.
1. `npm run devstart` to run the app locally in development mode, otherwise `npm start`.
1. navigate to `localhost:3000` in the browser to use locally hosted app.

## User stories

MVP:
```
As an FT reader,
So that I can give feedback on my experience,
I want to rate ft.com.

As the FT,
So that user feedback can be actioned,
We want ratings to be stored.

As the FT,
So that any user can give feedback,
We want the site to be deployed to the cloud (e.g. AWS, Google, Heroku)
```

V2:
```
As the FT,
So that we can assess feedback,
We want to view all of the ratings.
```

V3:
```
As the FT,
So that our sites have a common aesthetic,
We want the new site to use Origami.
```

## Approach

1. Digested the exercise and wrote this README.
1. Wrote user stories for MVP, V2, and V3
1. Researched technology used by FT to inform architecture decisions.
1. Decided on technologies to use (see Decisions).
1. Diagrammed proposed architecture of app.
1. Setup the basic skeleton of the app using Express.
1. Test-drove front-end functionality to allow user to provide a rating (first user story, MVP).
1. Test-drove back-end functionality to store ratings in a database (second user story, MVP).
1. Researched deployment options and decided on Heroku.
1. Deployed app on Heroku (third user story, MVP).
1. Test-drove full stack functionality to retrieve all ratings from the database and list them on a page (V2 user story).
1. Refactored/extracted to improve adherence to SOLID principles, using existing tests to ensure functionality was not disrupted.

## Testing

Development was driven by a combination of automated unit and end-to-end (e2e) tests. These were written using [Mocha](https://mochajs.org/) (for assertions) and [Zombie](http://zombie.js.org/) (for browser automation). Tests can be run with `npm test`.

The testing strategy was as follows:
- Models (of which there is one, `Rating`) tested using unit tests.
- Views tested using e2e/feature tests.
- Persistence to database tested using e2e/feature tests. At a later stage, unit tests should be written using a mock database to test interactions with database.
- Controller and routers tested using e2e/feature tests. At a later stage, unit tests should be written to test methods on the controller and router.

The test output is shown below:

```
roland@roland-laptop:~/Projects/ft$ npm test

> ft@0.0.0 test /home/roland/Projects/ft
> mocha



  All ratings page
    ✓ loads successfully
    ✓ has a table of ratings
    ✓ has a back button
    within table of ratings
      ✓ has a score header
      ✓ has a date header

  Index page
    ✓ loads successfully
    ✓ asks the user for feedback
    ✓ has a button to list of ratings
    ✓ has a feedback form
    feedback form has a
      ✓ very negative response
      ✓ slightly negative response
      ✓ slightly positive response
      ✓ very positive response
    selecting a response
      ✓ redirects the user

  Confirmation page
    ✓ loads successfully
    ✓ thanks the user for their feedback
    ✓ states the rating's score and date
    ✓ has a back button

  Rating
    ✓ has a rating score
    ✓ has date of creation


  20 passing (1s)
```

## Automation

The following automation was used in the development of this app:
- [Mocha](https://mochajs.org/) for automated test assertions.
- [Zombie](http://zombie.js.org/) for browser automation. This permitted development using end-to-end feature tests.
- [Nodemon](https://github.com/remy/nodemon) to automate restarting the application when changes are made in development.
- npm scripts for starting and testing the app (`npm start` and `npm test` respectively), as is normal for Node apps.
- [ESLint](https://eslint.org/) for linting. Run `npm run lint` to see the results. If no errors are listed then all of the code passes e.g.
```
roland@roland-laptop:~/Projects/ft$ npm run lint

> ft@0.0.0 lint /home/roland/Projects/ft
> eslint ./src/**
```

## Architecture

The architecture of the app is shown below:

```
TO-DO: Diagram of Architecture
```

## Basis of design

I used this exercise as a learning experience - prior to this I had only created full stack websites using Ruby (with Sinatra or Rails) for the back-end. In order to learn as much as possible, I decided to write a full stack JavaScript app to improve my understanding of that language and the tools available for it.

The disadvantage to this was that it took me longer to set up the various parts of the app, leaving me with less time to improve code quality and implement user stories.

More specifically, the app uses the technologies below for the following reasons:
- Node.js:
  - as a learning exercise;
  - it is used by FT.
- Express:
  - to save time (using the generator);
  - for its popularity, as it is easier to find assistance online when I encountered a problem.
- Mocha/Zombie and ESLint:
  - for testing and linting automation (respectively);
  - popularity in the wider community;
  - ease of setting up.
- Mongoose:
  - as a learning exercise;
  - ease of setting up;
  - compatibility with Express.
- MongoDB:
  - unified usage of JSON across the board to ease the CRUD process.

## Deployment

The app was deployed to Heroku instead of any alternatives primarily for convenience.

At a future stage, the option of deploying this app using an IaaS should be explored. This would allow greater flexibility which may be beneficial if the app were scaled up to handle greater traffic.

## Next steps

The following possibilities would be considered in future if development of this app were continued:

- Styling using Origami components (V3 user story).
- Use of Continuous Integration e.g. Travis CI to ensure problems are detected early.
- Deployment via a more flexible option e.g. IaaS.
- Increased test coverage (see Testing)
- Hide functionality to view all ratings behind some form of authentification. While this was not specified in the requirements, presumably FT would not want all users to be able to see all feedback.
- Rewrite all code to ES6 standards for futureproofing, using a transpiler such as Babel for production.
- Use of a bundler e.g. Webpack to store modules in a dependency graph and minify assets.
- True separation of front-end and back-end apps. Currently the back-end serves the front-end HTML via Pug, Express' default view engine.
- Containerised front-end and back-end apps e.g. using Docker.

## Resources

The following guide was used to aid in the development of this app:
- [Express web framework tutorial (Mozilla web docs)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

Additionally, the 'getting started' documentation for Express, Mocha, Zombie and Mongoose provided essential assistance.
