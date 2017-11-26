# Schwaerz.At

## What is it?
A minimalistic website built with Angular using the [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0-beta.0 and [Angular 5](https://github.com/angular/angular).

## What you get?
* Routing
* Styling
* Welcome page
* Contact form with e-mail delivery
* Imprint

It can be used as a boilerplate to jump-start other websites, or as a fast and minimalistic web presence (as demonstrated by this example).

## Changelog

### 1.1.0 (2017-11-11)
* update to Angular CLI 1.6.0-beta.0 and Angular 5.0.0
* smaller bundle sizes through build optimizer and AOT compilation
* removing potentially superfluous whitespace characters via preserverWhiteSpaces component option
* Improved [Lighthouse](https://github.com/GoogleChrome/lighthouse) performance metric from 80 to 83 (using Chrome Canary 64)
* Improved PageSpeed Score from 92% to 93% and YSlow Score from 79% to 82%
![PageSpeed & YSlow Benchmark](/docs/1.1.0-Benchmark-PageSpeed-YSlow.png?raw=true "PageSpeed & YSlow Benchmark")


### 1.0.1 (2017-09-16)
* update to Angular CLI 1.4.2 and Angular 4.2.4
* update to npm 5, include package-lock.json
* reorganization of SCSS styles

### 1.0.0 (2017-05-21)
* Fix reply-to incorrect when replying to message
* convert newlines (\r\n) in email text to <br> when sending HTML formatted email
* restyling

### 0.0.1 (2017-05-10)
* initial commit with Angular CLI 1.0.3 and Angular 4.0.0
* Home Component, Contact Form, Imprint, Page not Found,
* Styling, branding and logo

## Dev info:
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

* Contact the author at [https://www.pertiller.tech](https://www.pertiller.tech) or write an e-mail to david@pertiller.tech.
