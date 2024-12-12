// crud.d.ts

import { RowID, RowElement } from './interface';  // Make sure to import from the correct path

  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
