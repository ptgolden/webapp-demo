# Web application demo
This is a small web application that searches and renders results from the
[British National Bibliography](http://bnb.data.bl.uk/) database. It is built
using the following libraries:
  * [Browserify](http://browserify.org/)
  * [Backbone](http://backbonejs.org/)
  * [jQuery](http://jquery.com/)
  * [underscore.js](http://underscorejs.org)

## Setup
Run the command `npm install` to install all dependencies.

## Building
JavaScript files are bundled and built using [Browserify](http://browserify.org).
The entry point for the bundle is located at src/index.js. All other files are
included in the bundle using calls to `require`.

To bundle all javascript files together, run the command `npm run build`. You
will now be able to start the application by opening the index.html file in the
root directory.

For ease of development, you can automatically bundle files as dependencies are
changed by running the command `npm run watch`.
