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

As an FT reader,
So that my feedback can be actioned,
I want my rating to be stored.

As the FT,
So that any user can give feedback,
We want the site to be deployed to the cloud (e.g. AWS, Google, Heroku)
```

V2:
```
As the FT,
So that we can assess feedback,
We want to view the ratings.
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
1. Test-drove front-end functionality to allow user to provide a rating (first user story).
1. Test-drove back-end functionality to store ratings in a database (second user story).
1. Researched deployment options and decided on Heroku for convenience given the limited time frame in which this exercise was carried out.
1. Deployed app on Heroku (third user story).
1. Test-drove full stack functionality to retrieve all ratings from the database and list them on a page (fourth user story).

## Testing

Development was driven by a combination of automated unit and end-to-end tests. These were written using [Mocha](https://mochajs.org/) (for assertions) and [Zombie](http://zombie.js.org/) (for browser automation). Tests can be run with `npm test`.

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
- [ESLint](https://eslint.org/) for linting. Run `npm run lint` to see the results. If no errors are listed then all of the code passes.
- [Nodemon](https://github.com/remy/nodemon) to automate restarting the application when changes are made in development.
- npm scripts for starting and testing the app (`npm start` and `npm test` respectively), as is normal for Node apps.

## Architecture

The architecture of the app is shown below:

```
TO-DO: Diagram of Architecture
```

## Basis of design

I used this exercise as a learning experience - prior to this I had only created full stack websites using Ruby (with Sinatra or Rails) for the back-end. In order to learn as much as possible, I decided to write a full stack JavaScript app to improve my understanding of that language and the tools available for it.

More specifically, the app uses the technologies below for the following reasons:
- Node.js:
  - as a learning exercise;
  - it is used by FT.
- Express:
  - to save time (using the generator);
  - for its popularity, as it is easier to find assistance online when I encountered a problem.
- Mocha/Zombie and ESLint:
  - for testing and linting automation (respectively);
  - popularity in the wider community.
- Mongoose:
  - as a learning exercise;
  - straightforward setup;
  - compatibility with Express.
- MongoDB:
  - unified usage of JSON across the board to ease the CRUD process.

## Deployment

The app was deployed to Heroku instead of any alternatives primarily for convenience.

At a future stage, the option of deploying this app using an IaaS should be explored. This would allow greater flexibility which may be beneficial if the app were scaled up to handle greater traffic.

## Next steps

The following possibilities would be considered in future if development of this app were continued:

- Use of Continuous Integration e.g. Travis CI to ensure problems are detected early.
- Deployment via a more flexible option e.g. IaaS.
- Extraction of router responsibilities to controller modules to improve app's adherence to SOLID.
- Increased test coverage.
- Rewrite all code to ES6 standards, using a transpiler such as Babel for production.
- Use of a bundler e.g. Webpack to store modules in a dependency graph and minify assets.
- True separation of front-end and back-end apps. Currently the back-end serves the front-end HTML via Pug, Express' default view engine.
- Separated front-end and back-end apps running in containers.

## Resources

The following guides were used to aid in the development of this app:
- [Express web framework tutorial (Mozilla web docs)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
