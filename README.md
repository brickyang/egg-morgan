# egg-morgan

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-morgan.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-morgan
[travis-image]: https://img.shields.io/travis/brickyang/egg-morgan.svg?style=flat-square
[travis-url]: https://travis-ci.org/brickyang/egg-morgan
[codecov-image]: https://img.shields.io/codecov/c/github/brickyang/egg-morgan.svg?style=flat-square
[codecov-url]: https://codecov.io/github/brickyang/egg-morgan?branch=master
[david-image]: https://img.shields.io/david/brickyang/egg-morgan.svg?style=flat-square
[david-url]: https://david-dm.org/brickyang/egg-morgan
[snyk-image]: https://snyk.io/test/npm/egg-morgan/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-morgan
[download-image]: https://img.shields.io/npm/dm/egg-morgan.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-morgan

[Morgan](https://github.com/expressjs/morgan) plugin for egg.js, based on [koa-morgan@0.x](https://github.com/koa-modules/morgan).

## Install

```bash
$ npm i egg-morgan --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.morgan = {
  enable: true,
  package: 'egg-morgan',
};
```

## Configuration

Support all [morgan](https://github.com/expressjs/morgan) configurations.

```js
// {app_root}/config/config.default.js
exports.morgan = {
  format: 'combined',
  // options: {},
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## License

[MIT](LICENSE)
