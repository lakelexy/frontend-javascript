/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
const CRUD = require('./crud');  // Use 'require' for CommonJS imports

// Create a row object with the type RowElement
const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };

// Insert a new row and get the newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with age
const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };

// Update the row using the newRowID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the newRowID
CRUD.deleteRow(newRowID);
