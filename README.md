#Sudoku

##By: Myles Borins

[![Dependency Status](https://david-dm.org/thealphanerd/sudoku.svg)](https://david-dm.org/thealphanerd/sudoku) [![devDependency Status](https://david-dm.org/thealphanerd/sudoku/dev-status.svg)](https://david-dm.org/thealphanerd/sudoku#info=devDependencies)

---

View it: http://kni.sh/sudoku

---

##Getting Started

Before doing anything else make sure you run ```npm i``` to install all dependencies!!!

###Development Server

```npm run start-dev -- [port]```

This starts a server on port 1337 or [port]

###Production Server

```npm start -- [port]```

This also starts a server on port 1337 or [port]

*Passing arguments to npm scripts require npm 2.0.2 or higher*

###Static Build

```npm run build```

You can then place the public folder wherever you would like to serve it from.

###Testing

To run the test suite once

```npm test```

To launch the test suite in watch mode

```npm run watch-test```

---

##Application Structure

The application was built fairly simply.  There is a lib that includes the most generic functionality needed for Sudoku, specifically generating a board and checking
for correctness.  Abstracting these function into a lib allowed the api surface to be independently tested.  

Inside the app folder there is a Sudoku factory that is a consumer of the lib.  The factory creates an object that maintains state, can be updated,
can return an html string of its current state (generated from a jade template), and can check its current state for correctness.

Finally the app itself uses the factory to generate a sudoku object, uses that object to generate the appropriate html string, and mounts that string in the dom.
Once mounted the app attaches the appropriate listeners to update the sudoku object and check for correctness

If you take a look at the package.json you will notice that the application has two difference exports.  If you require this project in a browserify project
you will require in the lib.  Alternatively, if it is require into a node project you will get the hapi plugin ready to mount as any arbitrary route.

---

##Technologies Used

####Browserify:

The primary technology that my project relies on is Browserify.  I have found over the last number of months that Browserify
is an extremely useful technology for rapidly producing streamlined client side applications.  You will notice that my final
payload in the public directory is a single HTML file and a single JS file, this is possible due to the magic of browserify transforms

####cssify

The first transform I used is cssify.  This allows me to require in .css files and have them included in my js payload.

####jadeify

The second transform I used is jadeify.  This allows me to require in .jade files and have them template html string in the client.
I can then easily inject those strings into the dom.

####uglifyify

The final transform I used is uglifyify.  It allows you to use the uglify squeeze transform before you code is processed by browserify
This helps to remove dead code paths that might not otherwise be pruned. While it did not save a ton of space on this project, I have seen
it be responsible for shaving up to 20% off a minified payload.

###lodash

lodash is a utility library that offers consistency and performance across browsers.  It is often used as a drop in replacement for underscore.
There is a bit of a debate within the community as to which is better performing, and I have see jsperfs that have proven both to be better.
I personally choose lodash due to a handful of methods not offered by underscore such as mapValues, which proves very useful for reconstructing
objects.  lodash was definitely overkill for this project, and ended up almost quadrupling the size of the final payload.  That being said the
ungzipped payload is still less than 50k, so this is not horrible, but worth noting.  I chose to use the library on the client specifically for a deep clone 
and deep equal method that I know would work across browser implementations.  If given more time these functions could definitely be implemented
or smaller projects such as substacks deep-equal could be used instead of injecting the entire lodash suite.

###npm scripts

You will notice that my project is using neither grunt nor gulp.  I find using only npm scripts allows you to have very similar functionality to
popular build tools, without require the person who picks up your project later to learn a new tool.  Although grunt / gulp are both popular,
who knows what build tool will be the rage in 3 months.  Alternative, as long as we are using npm, npm-scripts will very likely be a part
of the ecosystem.  When properly designed it allows individual modules designed with the unix philosophy to manage exactly what they need to do with
minimal configuration.  Why give a 10 line config to your linter when you can just call it with a file glob?

###Watchify

During development watchify is used to watch for file changes and rebuild the bundle.

###Hapi.js

A fantastic platform for building server, a current competitor to express.  I find that the plug-in infrastructure is very well designed, and a great
fit for small static projects like this that could end up mounted in a larger deployment.

###tape / tap-spec / testling

A basic testing suite was implemented with tape and piped through tap-spec to sanitize the output.  I am quite fond of the zero configuration and
very simple async syntax of tape.  I find it quick to both write tests, and read tests written by my peers.  You will notice that all of my tape
tests are actually being browserified and piped into testling.  This uses phantomjs to run the test suite in a browser environment so I can accurately
know that things work in browser (not just node).  Testling also offers a CI service, this would allow me to have my test suite ran on a variety of VM's
to test again all modern browsers.

###nodemon

nodemon allows you to daemonize your node scripts.  I am currently using it as a watcher to automate the running of my test suite in development.

###eslint

An alternative to jshint.  Instead of linting based on string analysis it uses esprima to parse the js into a tree and perform analysis in a smarter way.
eslint also offers pluggable rules, a feature not currently supported (to my knowledge) by jshint or jslint.

###jscs

eslint is fairly opinionated about what it does and doesn't do.  It does check for correctness, it does not check for style.  jscs is an esprima based
style linter, picking up where eslint stops.


---

##More ideas to implement

Abstract the grid into it's own npm module! (abstraction)
Make it all aria! (inclusive design)
Scale better. (responsiveness)
Sanitize orientation Change. (experience)

---

#License

Copyright (c) 2014, Myles Borins <myles.borins@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
