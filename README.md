<h1 align="center">Rokomari Personal Blog. Mobile & desktop.</h1>

<p align="center">
  <img src="./src/assets/images/rokomari.jpg" alt="rokomari-logo" width="120px" height="120px"/>
  <br>
  <i>Rokomari Personal Blog is a free open source blog application
    <br> which client side depends on react, react-router, scss, react-bootstrap and server side depends on<br> express, mongoDB and some other stuff.</i>
  <br>
</p>

## Table of Contents

1. [Get Started](#get-started)
2. [Project File Structure](#project-file-structure)
3. [License](#license)

## Get Started
### Prerequisites
In order to install Rokomari Personal Blog, the following prerequisites must be installed:
```js
$  npm
$  git
```

### Clone the Project
1. Open your command line and run:
```js
$ git clone https://github.com/rokomari-com/blog.git
```

### Installation Process
In order to install, the following steps must be taken:

1. Open your command line, go to the extracted folder and run `npm install` to install all dependencies and then run `npm start` to open the project at `http://localhost:3000` port in your local machine:
```js
$  npm install
$  npm start
```
**[⬆ back to top](#table-of-contents)**

## Project File Structure
```bash
│   .gitignore
│   LICENSE
│   package-lock.json
│   package.json
│   README.md
│
├───public
│       favicon.ico
│       index.html
│       manifest.json
│       robots.txt
│
└───src
    │   App.js
    │   App.test.js
    │   index.css
    │   index.js
    │   reportWebVitals.js
    │   setupTests.js
    │
    ├───assets
    │   ├───fonts
    │   │       Coustard-Regular.ttf
    │   │       Lora-Regular.ttf
    │   │
    │   └───images
    │           rokomari.jpg
    │
    ├───components
    │   ├───body
    │   │   ├───Post
    │   │   │       Post.js
    │   │   │       Post.scss
    │   │   │
    │   │   ├───PostContainer
    │   │   │       PostContainer.js
    │   │   │       PostContainer.scss
    |   |   |
    │   │   └───SinglePost
    │   │           SinglePost.js
    │   │           SinglePost.scss
    │   │
    │   └───layouts
    │       ├───Footer
    │       │       Footer.js
    │       │       Footer.scss
    │       │
    │       ├───Header
    │       │       Header.js
    │       │       Header.scss
    │       │
    │       └───Navbar
    │               Navbar.js
    │               Navbar.scss
    │
    └───sass
        │   app.scss
        │   config.scss
        │
        ├───_base
        │       _basic.scss
        │       _typography.scss
        │
        └───_helpers
                _media-query.scss
                _mixins.scss
                _variables.scss
```

## License

(The MIT License)

Copyright (c) 2020 Rokomari.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#table-of-contents)**