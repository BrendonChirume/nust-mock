import types from './actionTypes';

export function viewpatientsDetails(paylod) {
  return { type: types.VIEW_patient_DETAILS, paylod };
}
export function handleModal(payload) {
  return { type: types.SHOW_MODAL, payload };
}
export function showModal(...params) {
  return { type: 'ALERT_BAR', payload: params };
}

// ? triggers actions in ElementsHoc
export function toggleAction(payload) {
  return { type: types.TOGGLE_ACTION, payload };
}

export function cycleCountSearch(event, tableID) {
  return { type: types.CYCLE_COUNT_ARRAY, tableID, event };
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
