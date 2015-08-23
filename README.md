icons-fall
==========

[Icon's Fall official website](http://iconsfall.com/).


Continuous deployment
---------------------

Continuous integration is managed by [Codeship](https://www.codeship.io/).
Code analysis is performed by [Code Climate](https://codeclimate.com/).
Dependency tracking is managed by [Gemnasium](https://gemnasium.com/).

[![Build Status](https://img.shields.io/travis/amercier/iconsfall/master.svg?style=flat-square)](https://travis-ci.org/amercier/iconsfall)
[![Code Climate](https://img.shields.io/codeclimate/github/amercier/iconsfall.svg?style=flat-square)](https://codeclimate.com/github/amercier/iconsfall)
[![Test Coverage](http://img.shields.io/coveralls/amercier/iconsfall/master.svg?style=flat-square)](https://coveralls.io/r/amercier/iconsfall?branch=master)
[![Dependency Status](http://img.shields.io/gemnasium/amercier/iconsfall.svg?style=flat-square)](https://gemnasium.com/amercier/iconsfall)

[![Open Issues](http://img.shields.io/github/issues/amercier/iconsfall.svg?style=flat-square)](https://github.com/amercier/iconsfall/issues)

Pushes on master branch are automatically deployed on
[http://staging.iconsfall.com](http://staging.iconsfall.com).

Tags are automatically deployed on
[http://iconsfall.com](http://iconsfall.com).

Step 1: deploy to master branch

    git push

Step 2: test at [http://staging.iconsfall.com](http://staging.iconsfall.com)

Step 3: tag the latest commit

    git tag vx.y.z
    git push --tags


Setup
-----

Clone the repo:

    git clone git@github.com:amercier/iconsfall.git
    npm install


Development
-----------

    npm start


Build
-----

    npm run build
