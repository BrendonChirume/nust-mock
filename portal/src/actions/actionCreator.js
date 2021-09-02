import types from './actionTypes';

export function handleModal(payload) {
  return { type: types.SHOW_MODAL, payload };
}

// function actionTypesEndsInSuccess(type) {
//   return type.substring(type.length - 8) === '_SUCCESS';
// }

// export function apiCalls() {
//   function payload() {
//     let connection = mysql.createConnection({
//       host: "127.0.0.1",
//       port: 3306,
//       user: "root",
//       password: "brendonchirume0+1Y74c4",
//       database: "dispenseware",
//     });

//     connection.connect();

//     connection.query(
//       "SELECT * FROM patient",
//       function (error, results, fields) {
//         if (error) throw error;
//         console.log(results);
//         return results;
//       }
//     );

//     connection.end();
//   }
//   return async (dispatch, getState) => {
// let patients = await payload();
//     dispatch({ type: types.GET_PATIENTS, payload });
//   };
// }
