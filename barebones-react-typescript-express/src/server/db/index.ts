import * as mysql from "mysql";
import config from "../config";


const pool = mysql.createPool(config.mysql);

export const Query = (query:string, values?: any) => {

    const sql = mysql.format(query,values);
    console.log(sql);
    

  return new Promise((resolve, reject) => {
    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};


import blogs from './queries/blogs';
export default {
    blogs
}