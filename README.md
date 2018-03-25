# Financial Times Cloud Engineer Technical Exercise

This repository stores a website that asks for and stores a simple rating score for using [ft.com](https://www.ft.com/).

This was completed for the Financial Times Cloud Engineer tech test.

## Getting started

This section assumed you have [Node.js](https://nodejs.org/en/) and [MongoDB](https://docs.mongodb.com/manual/installation/) installed on your machine.

As a developer:
1. `git clone` this repository.
1. `cd` into the cloned directory.
1. `npm install` to install dependencies.
1. `sudo service mongodb start` to start mongo.
1. `npm test` to run tests.
1. `npm run lint` to lint source code.
1. `npm run devstart` to run the app on port 3000 in development mode, or `npm start` to run the app normally.
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

## Testing

Development was driven by a combination of automated unit and end-to-end tests. These were written using [Mocha](https://mochajs.org/) (for assertions) and [Zombie](http://zombie.js.org/) (for browser automation). Tests can be run with `npm test`.

## Automation

The following automation was used in the development of this app:
- [Mocha](https://mochajs.org/) for automated test assertions.
- [Zombie](http://zombie.js.org/) for browser automation. This permitted development using end-to-end feature tests.
- [ESLint](https://eslint.org/) for linting. Run `npm run lint` to see the results. If no errors are listed then all of the code passes.
- [Nodemon](https://github.com/remy/nodemon) to automate restarting the application when changes are made in development.
- npm scripts for starting and testing the app (`npm start` and `npm test` respectively), as is normal for Node apps.

## Architecture

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

## Next steps

## Resources

The following guides were used to aid in the development of this app:
- [Express web framework tutorial (Mozilla web docs)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
