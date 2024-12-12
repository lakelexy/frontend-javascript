/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/crud.js":
/*!********************!*\
  !*** ./js/crud.js ***!
  \********************/
/***/ ((module) => {

function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}

// Export the functions using CommonJS syntax
module.exports = {
  insertRow,
  deleteRow,
  updateRow
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

/// <reference path="./crud.d.ts" />
Object.defineProperty(exports, "__esModule", ({ value: true }));
var CRUD = __webpack_require__(/*! ./crud */ "./js/crud.js"); // Use 'require' for CommonJS imports
// Create a row object with the type RowElement
var row = { firstName: 'Guillaume', lastName: 'Salva' };
// Insert a new row and get the newRowID
var newRowID = CRUD.insertRow(row);
// Create an updated row with age
var updatedRow = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };
// Update the row using the newRowID
CRUD.updateRow(newRowID, updatedRow);
// Delete the row using the newRowID
CRUD.deleteRow(newRowID);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNwQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLG9DQUFvQzs7QUFHcEMsSUFBTSxJQUFJLEdBQUcsbUJBQU8sQ0FBQyw0QkFBUSxDQUFDLENBQUMsQ0FBRSxxQ0FBcUM7QUFFdEUsK0NBQStDO0FBQy9DLElBQU0sR0FBRyxHQUFlLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFFdEUsd0NBQXdDO0FBQ3hDLElBQU0sUUFBUSxHQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFNUMsaUNBQWlDO0FBQ2pDLElBQU0sVUFBVSxHQUFlLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUV0RixvQ0FBb0M7QUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFckMsb0NBQW9DO0FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL2NydWQuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluc2VydFJvdyhyb3cpIHtcbiAgY29uc29sZS5sb2coJ0luc2VydCByb3cnLCByb3cpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigxMDAwKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVJvdyhyb3dJZCkge1xuICBjb25zb2xlLmxvZygnRGVsZXRlIHJvdyBpZCcsIHJvd0lkKTtcbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSb3cocm93SWQsIHJvdykge1xuICBjb25zb2xlLmxvZyhgVXBkYXRlIHJvdyAke3Jvd0lkfWAsIHJvdyk7XG4gIHJldHVybiByb3dJZDtcbn1cblxuLy8gRXhwb3J0IHRoZSBmdW5jdGlvbnMgdXNpbmcgQ29tbW9uSlMgc3ludGF4XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5zZXJ0Um93LFxuICBkZWxldGVSb3csXG4gIHVwZGF0ZVJvd1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9jcnVkLmQudHNcIiAvPlxuXG5pbXBvcnQgeyBSb3dJRCwgUm93RWxlbWVudCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmNvbnN0IENSVUQgPSByZXF1aXJlKCcuL2NydWQnKTsgIC8vIFVzZSAncmVxdWlyZScgZm9yIENvbW1vbkpTIGltcG9ydHNcblxuLy8gQ3JlYXRlIGEgcm93IG9iamVjdCB3aXRoIHRoZSB0eXBlIFJvd0VsZW1lbnRcbmNvbnN0IHJvdzogUm93RWxlbWVudCA9IHsgZmlyc3ROYW1lOiAnR3VpbGxhdW1lJywgbGFzdE5hbWU6ICdTYWx2YScgfTtcblxuLy8gSW5zZXJ0IGEgbmV3IHJvdyBhbmQgZ2V0IHRoZSBuZXdSb3dJRFxuY29uc3QgbmV3Um93SUQ6IFJvd0lEID0gQ1JVRC5pbnNlcnRSb3cocm93KTtcblxuLy8gQ3JlYXRlIGFuIHVwZGF0ZWQgcm93IHdpdGggYWdlXG5jb25zdCB1cGRhdGVkUm93OiBSb3dFbGVtZW50ID0geyBmaXJzdE5hbWU6ICdHdWlsbGF1bWUnLCBsYXN0TmFtZTogJ1NhbHZhJywgYWdlOiAyMyB9O1xuXG4vLyBVcGRhdGUgdGhlIHJvdyB1c2luZyB0aGUgbmV3Um93SURcbkNSVUQudXBkYXRlUm93KG5ld1Jvd0lELCB1cGRhdGVkUm93KTtcblxuLy8gRGVsZXRlIHRoZSByb3cgdXNpbmcgdGhlIG5ld1Jvd0lEXG5DUlVELmRlbGV0ZVJvdyhuZXdSb3dJRCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=