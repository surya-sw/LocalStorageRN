import {openDatabase} from 'react-native-sqlite-storage';

import StorageKeys from '../constants/StorageKeys';

const db = openDatabase({
  name: StorageKeys.productsTable,
});

export const deleteTables = tableName => {
  try {
    db.transaction(txn => {
      txn.executeSql(`DROP TABLE  ${tableName}`, (sqlTxn, res) => {
        console.log('Table Successfully Droped', tableName);
      });
    });
  } catch (error) {
    console.log('Table Successfully error', error);
  }
};
