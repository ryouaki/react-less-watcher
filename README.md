
[![npm downloads](https://img.shields.io/npm/dm/react-less-watcher.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-less-watcher)

# react-less-watcher
A tool for help create-react-app work with less

# Description
It is only a simple tool for compile less to css. BTW, it not only work with create-react-app also can work with command line .<br/>

When you work with it, it will create a css file at the same directory of less, and with the same name, so you import the css file in your jsx file is ok.

```
  |-src
     |-main.less
     |-main.css
```

```jsx
  import './main.css';
  ...
```

**Note** : It will takes some time to compile the less file to css file, so you'd better to create a less file first, and then import the css file or you will get a error.

# Usage

## install
```
  $ npm install -save react-less-watcher
```

## package.json
```
  scripts: {
    "watch-less": "react-less-watcher -d src",
    "start": "react-scripts start&npm run watch-less"
  }
```

# Changed
- 2018-02-27 bug fix for does not create new css file when add a empty less file
- 2018-02-24 1.0.0 Released

# License
MIT
