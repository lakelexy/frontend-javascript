"use strict";
/// <reference path="./crud.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require('./crud'); // Use 'require' for CommonJS imports
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
