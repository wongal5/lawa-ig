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
/******/ 	return __webpack_require__(__webpack_require__.s = 378);
/******/ })
/************************************************************************/
/******/ ({

/***/ 378:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/aaron_144/hr/greenfield/lawa-ig/client/src/index.jsx: Unexpected token (6:1)\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mPictureGrid\u001b[39m from \u001b[32m'./components/prof_pg/PictureGrid.jsx'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mModalModalExample\u001b[39m from \u001b[32m'./components/prof_pg/modal.jsx'\u001b[39m\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m   | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 7 | \u001b[39m \n \u001b[90m 8 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\n \u001b[90m 9 | \u001b[39m\u001b[0m\n    at Parser.pp$5.raise (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:4454:13)\n    at Parser.pp.unexpected (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:1761:8)\n    at Parser.pp$9.jsxParseIdentifier (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:7029:10)\n    at Parser.pp$9.jsxParseNamespacedName (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:7040:19)\n    at Parser.pp$9.jsxParseElementName (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:7055:19)\n    at Parser.pp$9.jsxParseOpeningElementAt (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:7145:20)\n    at Parser.pp$9.jsxParseElementAt (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:7169:29)\n    at Parser.pp$9.jsxParseElement (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:7224:15)\n    at Parser.parseExprAtom (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:7236:21)\n    at Parser.pp$3.parseExprSubscripts (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:3494:19)\n    at Parser.pp$3.parseMaybeUnary (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:3474:19)\n    at Parser.pp$3.parseExprOps (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:3404:19)\n    at Parser.pp$3.parseMaybeConditional (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:3381:19)\n    at Parser.pp$3.parseMaybeAssign (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:3344:19)\n    at Parser.parseMaybeAssign (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:6433:24)\n    at Parser.pp$3.parseExpression (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:3306:19)\n    at Parser.pp$1.parseStatement (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:1906:19)\n    at Parser.parseStatement (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:5910:22)\n    at Parser.pp$1.parseBlockBody (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:2268:21)\n    at Parser.pp$1.parseTopLevel (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:1778:8)\n    at Parser.parse (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:1673:17)\n    at Object.parse (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babylon/lib/index.js:7305:37)\n    at File.parse (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babel-core/lib/transformation/file/index.js:480:24)\n    at File.parseCode (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babel-core/lib/transformation/file/index.js:560:20)\n    at /Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babel-core/lib/transformation/pipeline.js:45:12\n    at File.wrap (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babel-core/lib/transformation/file/index.js:520:16)\n    at Pipeline.transform (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babel-core/lib/transformation/pipeline.js:43:17)\n    at transpile (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babel-loader/index.js:14:22)\n    at Object.module.exports (/Users/aaron_144/hr/greenfield/lawa-ig/node_modules/babel-loader/index.js:88:12)");

/***/ })

/******/ });