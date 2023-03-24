import {openDatabase} from 'react-native-sqlite-storage';

import StorageKeys from '../constants/StorageKeys';

const db = openDatabase({
  name: StorageKeys.productsTable,
});

export const createProductsTable = () => {
  try {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS products_table
          (
              product_id INTEGER PRIMARY KEY AUTOINCREMENT,
              created_date TEXT,
              product_name TEXT,
              product_price INTEGER,
              product_dsc TEXT,
              product_img BLOB
          );`,
        [],
        (sqlTxn, res) => {
          console.log('Product table created successfully');
        },
      );
    });
  } catch (error) {
    console.log('Product table not created');
  }
};
