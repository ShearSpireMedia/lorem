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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(){\n\tlet makebtn, copybtn, input, output, blurbcopy, sonnets, sonnetbtn, titlehead;\n\tfunction init(){\n\t\ttitlehead = document.getElementById(\"titlehead\");\n\t  makebtn = document.getElementById(\"makebtn\");\n\t  copybtn = document.getElementById(\"copybtn\");\n\t  input = document.getElementById(\"wordcount\");\n\t  output = document.getElementById(\"blurb\");\n\t  blurbcopy = document.getElementById(\"blurbcopy\");\n\t  makebtn.addEventListener(\"click\",showNonsense,false);\n\t  copybtn.addEventListener(\"click\",copyToClipboard,false);\n\n\t\tsonnetbtn = document.getElementById(\"sonnetbtn\");\n\t\tsonnetbtn.addEventListener(\"click\",showSonnet,false);\n\t  renderNonsense(input.value);\n\t  document.removeEventListener(\"DOMContentLoaded\", init);\n\t}\n\tfunction showNonsense(){\n\t\ttitlehead.innerHTML = \"The Nonsense You Requested\";\n\t  renderNonsense(input.value);\n\t}\n\tfunction renderNonsense(num){\n\t\tlet loremObject = LoremMaker.getLorem(num);\n\t \t output.innerHTML = loremObject.blurb;\n\t \t if (Number(num) === 0){\n\t\t\t input.value = loremObject.count;\n\t\t }\n        blurbcopy.value = loremObject.blurb.split(\"<br>\").join(\"\\n\");\n\t}\n    function copyToClipboard() {\n        blurbcopy.select();\n        document.execCommand(\"copy\");\n        alert(\"Your text is in the clipboard. You may now paste it into your layout.\");\n    }\n\tconst LoremMaker = function(){\n\t\tlet words = [\"a\",\"ac\",\"accumsan\",\"aenean\",\"aliquam\",\"aliquet\",\"amet\",\"ante\",\"arcu\",\"at\",\"auctor\",\"augue\",\"bibendum\",\"commodo\",\"condimentum\",\"congue\",\"consectetur\",\"consequat\",\"convallis\",\"cras\",\"curabitur\",\"cursus\",\"dapibus\",\"diam\",\"dictum\",\"dignissim\",\"dis\",\"dolor\",\"donec\",\"dui\",\"duis\",\"efficitur\",\"egestas\",\"eget\",\"eleifend\",\"elementum\",\"elit\",\"enim\",\"erat\",\"eros\",\"est\",\"et\",\"etiam\",\"eu\",\"euismod\",\"ex\",\"facilisi\",\"facilisis\",\"fames\",\"faucibus\",\"felis\",\"fermentum\",\"feugiat\",\"finibus\",\"fringilla\",\"fusce\",\"habitant\",\"hendrerit\",\"id\",\"illegitimi\",\"imperdiet\",\"in\",\"integer\",\"ipsum\",\"justo\",\"lacinia\",\"lacus\",\"laoreet\",\"lectus\",\"leo\",\"libero\",\"ligula\",\"lobortis\",\"lorem\",\"luctus\",\"maecenas\",\"magna\",\"magnis\",\"malesuada\",\"mattis\",\"mauris\",\"maximus\",\"mentus\",\"metus\",\"mi\",\"molestie\",\"mollis\",\"montes\",\"morbi\",\"mus\",\"nam\",\"nascetur\",\"natoque\",\"nec\",\"neque\",\"netus\",\"nibh\",\"nisi\",\"nisl\",\"non\",\"noncompis\",\"nulla\",\"nullam\",\"nunc\",\"odio\",\"orci\",\"ornare\",\"parturient\",\"pellentesque\",\"penatibus\",\"phasellus\",\"placerat\",\"porta\",\"porttitor\",\"posuere\",\"pretium\",\"proin\",\"pulvinar\",\"purus\",\"quam\",\"quis\",\"quisque\",\"rhoncus\",\"ridiculus\",\"risus\",\"rutrum\",\"sagittis\",\"sapien\",\"scelerisque\",\"sed\",\"semper\",\"senectus\",\"sit\",\"sodales\",\"sollicitudin\",\"stupido\",\"suscipit\",\"suspendisse\",\"tellus\",\"tempus\",\"tincidunt\",\"tortor\",\"tristique\",\"turpis\",\"ullamcorper\",\"ultrices\",\"ultricies\",\"urna\",\"ut\",\"varius\",\"vehicula\",\"vel\",\"velit\",\"venenatis\",\"vestibulum\",\"vitae\",\"vivamus\",\"viverra\",\"volutpat\",\"vulputate\"];\n\t\tfunction getLorem(count = 0){\n\t\t\tcount = Number(count);\n\t\t\tlet warr = [];\n\t\t\tlet len = words.length;\n\t\t\tcount = count > 0 ? count : randRange(30,len-1);\n\t\n\t\t\tfor (let i=0;i<count;i++){\n\t\t\t\tlet randomWord = words[randRange(0,len-1)];\n\t\t  \t\twarr.push(randomWord);\n\t\t\t}\n\t\t\tfor (let i=0;i<count;i++){\n\t\t\t  if (i % 10 === 0){\n\t\t\t\twarr[i] = warr[i].substring(0,1).toUpperCase() + warr[i].substring(1);\n\t\t\t\t if (i>=150 && i % 150 === 0){\n\t\t\t\t   warr[i] = \"<br><br>\" + warr[i];\n\t\t\t\t }\n\t\t\t  }\n\t\t\t  if (i % 10 === 9 || i === count - 1){\n\t\t\t\twarr[i] = warr[i] + \".\";\n\t\t\t  }\n\t\t\t}\n\t\t\treturn {\"blurb\":warr.join(\" \"),\"count\":count};\n\t\t}\n\n\t\treturn {\"getLorem\":getLorem}\n\t}();\n\t//random number utility function\n\tfunction randRange(min, max) {\n\t\treturn Math.floor(Math.random()*(max-min+1))+min;\n\t}\n\tdocument.addEventListener('DOMContentLoaded', function (e) {\n\t\ttry {\n\t\t\tinit(e);\n\t\t\tgetSonnets();\n\t\t} catch (error){\n\t\t\tconsole.log(\"Data didn't load\", error);\n\t\t}\n\t});\n\tfunction showSonnet(){\n\t\ttitlehead.innerHTML = \"The Shakespeare Sonnet You Requested\";\n\t\tlet num = randRange(0,sonnets.length-1);\n\t\tlet sonnet = sonnets[num].join(\" \") + \" (Sonnet #\" + (num+1) + \")\";\n\t\toutput.innerHTML = sonnet;\n\t\tblurbcopy.value = sonnet;\n\t}\n\tfunction setSonnets(j){\n\t\tsonnets = [];\n\t\tfor (let i=0;i<j.length;i++){\n\t\t\tsonnets[i] = j[i].lines.slice();\n\t\t}\n\t\tsonnetbtn.style.display = \"inline\";\n\t}\n\tfunction getSonnets(){\n\t\tfetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/sonnets.json').then(function(response) {\n\t\t\tif(response.ok) {\n\t\t\t\treturn response.json();\n\t\t\t}\n\t\t\tthrow new Error('Network response was not ok.');\n\t\t}).then(function(myJson) {\n\t\t\tsetSonnets(myJson);\n\t\t}).catch(function(error) {\n\t\t\tconsole.log('There has been a problem with your fetch operation: ', error.message);\n\t\t});\n\t}\n}());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });