/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 386);
/******/ })
/************************************************************************/
/******/ ({

/***/ 386:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/albert/Documents/GitHub/lawa-ig/package.json: Error while parsing JSON - Unexpected token < in JSON at position 683\n    at JSON.parse (<anonymous>)\n    at OptionManager.addConfig (/Users/albert/Documents/GitHub/lawa-ig/node_modules/babel-core/lib/transformation/file/options/option-manager.js:214:62)\n    at OptionManager.findConfigs (/Users/albert/Documents/GitHub/lawa-ig/node_modules/babel-core/lib/transformation/file/options/option-manager.js:370:30)\n    at OptionManager.init (/Users/albert/Documents/GitHub/lawa-ig/node_modules/babel-core/lib/transformation/file/options/option-manager.js:412:12)\n    at File.initOptions (/Users/albert/Documents/GitHub/lawa-ig/node_modules/babel-core/lib/transformation/file/index.js:191:75)\n    at new File (/Users/albert/Documents/GitHub/lawa-ig/node_modules/babel-core/lib/transformation/file/index.js:122:22)\n    at Pipeline.transform (/Users/albert/Documents/GitHub/lawa-ig/node_modules/babel-core/lib/transformation/pipeline.js:42:16)\n    at transpile (/Users/albert/Documents/GitHub/lawa-ig/node_modules/babel-loader/index.js:14:22)\n    at Object.module.exports (/Users/albert/Documents/GitHub/lawa-ig/node_modules/babel-loader/index.js:88:12)");

/***/ })

/******/ });