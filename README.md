# npm-scripts
Sample code for the #PghJS [NPM Scripts Meetup](http://www.meetup.com/Pittsburgh-JavaScript/events/229086018/)

For more info, please [see accompanying slides](./npm_script.pptx) or [pdf version](./npm_scripts.pdf)

## Taskrunners

### [Grunt](http://gruntjs.com/) - the JavaScript Task Runner

`/grunt`

```sh
$ npm i -g grunt-cli
$ npm i -D grunt
...
# install grunt plugins
...
$ grunt
```

Seriously, [the sample `Gruntfile.js`](http://gruntjs.com/sample-gruntfile) still uses `QUnit`?!?

### [Gulp](http://gulpjs.com/) - the streaming build system

`/gulp`

```sh
$ npm i -g gulp-cli
$ npm i -D gulp
...
# install gulp plugins
...
$ gulp
```

Series/parallel - what the hell?!?

## [NPM Scripts](https://docs.npmjs.com/misc/scripts) - How npm handles the "scripts"

```sh
...
# install actual tools
...
$ npm run [script]
```

### [NPM Build Boilerplate](https://github.com/damonbauer/npm-build-boilerplate)

A collection of packages that build a website using NPM scripts.

`/npm-build-boilerplate`

### NPM Scripts (Basic Usage)

Typical set of npm scripts set up for a simple project, for linting, testing and code coverage.

`/npm-scripts`

### [Scripty](https://github.com/testdouble/scripty)

Because no one should be shell-scripting inside a JSON file.

`/scripty`


### Honorable mentions

- `[p-s](https://github.com/kentcdodds/p-s)` - package-scripts.js - brand new
- `[npm-quick-run](https://github.com/bahmutov/npm-quick-run)` - shortcut for `npm run [script]`
