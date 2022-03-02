
# Infographic
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements
This project requires the following to run:
* Any editor tool
* [Node.js](https://nodejs.org/en/)
* npm (normally comes with node.js)
* GIT (Understand GIT command before starting the project)

## Steps to run this project
### Clone the project
git clone https://github.com/btdesignteam/budget-infographic.git

### Open the project in the terminal 
cd "project-folder-location"

### `npm install` or `npm i` 
Run this code if you download/pull for the first time.

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build-qa`
- For this project, html it direcly added to dupal not via iframe. So **COMMENT OUT** bootstrap in main.scss before building as it will affect the whole website css
- Run this code if going to deploy to QA

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


### `npm run build-prod`
- For this project, html it direcly added to dupal not via iframe. So **COMMENT OUT** bootstrap in main.scss before building as it will affect the whole website css
- Run this code if going to deploy to prod

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


### add to dupal body , change to freeform html
Below is an example for the code to add in dupal. Bear in mind below main.css, main.js will change everything.

```
    <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link href="/bt_files/graphs/2022/top-10-news-infographic/static/css/main.054e197e.chunk.css" rel="stylesheet">

    <div id="infographic"></div>
    <script>!function (e) { function r(r) { for (var n, i, p = r[0], f = r[1], a = r[2], c = 0, s = []; c < p.length; c++)i = p[c], Object.prototype.hasOwnProperty.call(o, i) && o[i] && s.push(o[i][0]), o[i] = 0; for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (e[n] = f[n]); for (l && l(r); s.length;)s.shift()(); return u.push.apply(u, a || []), t() } function t() { for (var e, r = 0; r < u.length; r++) { for (var t = u[r], n = !0, p = 1; p < t.length; p++) { var f = t[p]; 0 !== o[f] && (n = !1) } n && (u.splice(r--, 1), e = i(i.s = t[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function i(r) { if (n[r]) return n[r].exports; var t = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(t.exports, t, t.exports, i), t.l = !0, t.exports } i.m = e, i.c = n, i.d = function (e, r, t) { i.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t }) }, i.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function (e, r) { if (1 & r && (e = i(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var t = Object.create(null); if (i.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) i.d(t, n, function (r) { return e[r] }.bind(null, n)); return t }, i.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return i.d(r, "a", r), r }, i.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, i.p = "/bt_files/graphs/2022/top-10-news-infographic/"; var p = this["webpackJsonptop-10-news-infographic"] = this["webpackJsonptop-10-news-infographic"] || [], f = p.push.bind(p); p.push = r, p = p.slice(); for (var a = 0; a < p.length; a++)r(p[a]); var l = f; t() }([])</script>
    <script src="/bt_files/graphs/2022/top-10-news-infographic/static/js/2.aaecedc0.chunk.js"></script>
    <script src="/bt_files/graphs/2022/top-10-news-infographic/static/js/main.c44f3a39.chunk.js"></script>
```