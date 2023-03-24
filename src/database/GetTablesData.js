import {openDatabase} from 'react-native-sqlite-storage';

import StorageKeys from '../constants/StorageKeys';

const db = openDatabase({
  name: StorageKeys.productsTable,
});

export const getTablesData = async sqlQuery => {
  return new Promise((resolve, reject) => {
    try {
      db.transaction(
        txn => {
          txn.executeSql(sqlQuery, [], (sqlTxn, res) => {
            let len = res.rows.length;
            if (len > 0) {
              let results = [];
              for (let i = 0; i < len; i++) {
                let item = res.rows.item(i);
                results.push(item);
              }
              resolve(results);
            } else {
              resolve([]);
            }
          });
        },
        err => reject(err),
      );
    } catch (e) {
      reject([]);
    }
  });
};
