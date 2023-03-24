import {openDatabase} from 'react-native-sqlite-storage';

import StorageKeys from '../constants/StorageKeys';

const db = openDatabase({
  name: StorageKeys.productsTable,
});

export const InsertData = async (sqlQuery, dataSet) => {
  return new Promise((resolve, reject) => {
    try {
      db.transaction(function (tx) {
        tx.executeSql(sqlQuery, dataSet, (tx, results) => {
          resolve(true);
          console.log('Results', results.rowsAffected);
        });
      });
    } catch (error) {
      console.log(error);
      reject(false);
    }
  });
};
