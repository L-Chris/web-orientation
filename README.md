# web-orientation
Detect device orientation, Inspired by an [detect-orientation](https://aotu.io/notes/2017/01/31/detect-orientation/)

## Install
```javascript
yarn add web-orientation
```

## Usage
```javascript
import orientation from 'web-orientation'
orientation.type // orientatio-type: lanscape|protrait
orientation.isLandscape // boolean
orientation.isPortrait // boolean
orientation.get() // run and return orientatio.type
```