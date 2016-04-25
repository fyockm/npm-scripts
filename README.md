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
$ grunt
```

Seriously, the example `Gruntfile.js` still uses `QUnit`?!?

### [Gulp](http://gulpjs.com/) - the streaming build system

`/gulp`

```sh
$ npm i -g gulp-cli
$ npm i -D gulp
...
$ gulp
```

Series/parallel- what the hell?!?

## [NPM Scripts](https://docs.npmjs.com/misc/scripts)

### [NPM Build Boilerplate](https://github.com/damonbauer/npm-build-boilerplate)

A collection of packages that build a website using NPM scripts.

`/npm-build-boilerplate`

### NPM Scripts (Basic)

Typical set of npm scripts set up for a simple project, for linting, testing and code coverage.

`/npm-scripts-simple`

### [Scripty](https://github.com/testdouble/scripty)

Because no one should be shell-scripting inside a JSON file.

`/scripty`
