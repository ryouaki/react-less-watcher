# react-less-watcher
A tool for help create-react-app work with less

# Description
It is only a simple tool for compile less to css. BTW, it not only work with create-react-app also can work with command line .

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