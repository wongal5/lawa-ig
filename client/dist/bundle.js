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

throw new Error("Module build failed: TypeError: /Users/larry/lawa-ig/client/src/index.jsx: Duplicate declaration \"AllFeeds\"\n\u001b[0m \u001b[90m 27 | \u001b[39m}\u001b[33m;\u001b[39m\n \u001b[90m 28 | \u001b[39m\u001b[36mimport\u001b[39m fakeProfileTableData from \u001b[32m'../../database/fakeProfileTableData'\u001b[39m\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 29 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mAllFeeds\u001b[39m from \u001b[32m'./components/main_feed_pg/all_feed.jsx'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 30 | \u001b[39m\n \u001b[90m 31 | \u001b[39m\u001b[36mconst\u001b[39m fakeUserData \u001b[33m=\u001b[39m {\n \u001b[90m 32 | \u001b[39m  \u001b[32m'username'\u001b[39m\u001b[33m:\u001b[39m \u001b[32m'willputnam12'\u001b[39m\u001b[33m,\u001b[39m \u001b[0m\n    at File.buildCodeFrameError (/Users/larry/lawa-ig/node_modules/babel-core/lib/transformation/file/index.js:408:15)\n    at Scope.checkBlockScopedCollisions (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/scope/index.js:398:27)\n    at Scope.registerBinding (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/scope/index.js:592:16)\n    at Scope.registerDeclaration (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/scope/index.js:516:14)\n    at Object.Declaration (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/scope/index.js:176:36)\n    at NodePath._call (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/path/context.js:76:18)\n    at NodePath.call (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/path/context.js:48:17)\n    at NodePath.visit (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/path/context.js:105:12)\n    at TraversalContext.visitQueue (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/context.js:150:16)\n    at TraversalContext.visitMultiple (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/context.js:103:17)\n    at TraversalContext.visit (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/context.js:190:19)\n    at Function.traverse.node (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/index.js:114:17)\n    at traverse (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/index.js:79:12)\n    at NodePath.traverse (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/path/index.js:144:25)\n    at Scope._crawl (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/scope/index.js:828:10)\n    at Scope.crawl (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/scope/index.js:749:10)\n    at Scope.init (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/scope/index.js:744:32)\n    at NodePath.setScope (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/path/context.js:151:30)\n    at NodePath.setContext (/Users/larry/lawa-ig/node_modules/babel-traverse/lib/path/context.js:166:8)\n    at File._addAst (/Users/larry/lawa-ig/node_modules/babel-core/lib/transformation/file/index.js:492:8)\n    at File.addAst (/Users/larry/lawa-ig/node_modules/babel-core/lib/transformation/file/index.js:500:10)\n    at File.parseCode (/Users/larry/lawa-ig/node_modules/babel-core/lib/transformation/file/index.js:561:10)\n    at /Users/larry/lawa-ig/node_modules/babel-core/lib/transformation/pipeline.js:45:12\n    at File.wrap (/Users/larry/lawa-ig/node_modules/babel-core/lib/transformation/file/index.js:520:16)\n    at Pipeline.transform (/Users/larry/lawa-ig/node_modules/babel-core/lib/transformation/pipeline.js:43:17)\n    at transpile (/Users/larry/lawa-ig/node_modules/babel-loader/index.js:14:22)\n    at Object.module.exports (/Users/larry/lawa-ig/node_modules/babel-loader/index.js:88:12)");

/***/ })

/******/ });