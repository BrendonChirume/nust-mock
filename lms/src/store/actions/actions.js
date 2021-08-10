import { /*SIGN_IN_SELLER,*/ LOADING_SIGNIN, LOADING_SIGNIN_DONE, CLEAR_ERRORS, SET_AUTHENTICATED, SET_ERRORS, SET_UNAUTHENTICATED } from "../contructors";
import axios from "axios"

export const loginUser = (userCred, history) => (dispatch) => {
    dispatch({ type: LOADING_SIGNIN });
    // dispatch({ type: SET_AUTHENTICATED });
    
    //Send data to backend
    axios.post("/login", userCred)
    .then(res => {
        setAuthorizationHeader(res.data.token);
        // dispatch(getLoggedInUserData());
        dispatch({ type: SET_AUTHENTICATED });
        dispatch({ type: CLEAR_ERRORS });
        window.location.reload();
        window.location.href = "/"
        dispatch({ type: LOADING_SIGNIN_DONE });
        })
        .catch(err => {
            dispatch({ type: LOADING_SIGNIN_DONE });
            dispatch({
                type: SET_ERRORS,
                payload:  err.response.data.message || err.response.data.account || err.response.data.password
            })
        });
}
export const signinUser = (userCred) => (dispatch) => {
    dispatch({ type: LOADING_SIGNIN });
    // dispatch({ type: SET_AUTHENTICATED });


    //Send data to backend
    axios.post("/signup", userCred)
        .then(res => {
   
            setAuthorizationHeader(res.data.token);
            // dispatch(getLoggedInUserData());
            dispatch({ type: SET_AUTHENTICATED });
            dispatch({ type: CLEAR_ERRORS });
            window.location.reload();
            window.location.href = "/dash"
        
            
        })
        .catch(err => {
           
            dispatch({
                type: SET_ERRORS,
                payload:  err.response.data.error || err.response.data.account || err.response.data.password || err.response.data.email
            })
        });
}

// export const getLoggedInUserData = () => (dispatch) => {
//     axios.get(`/user`)
//         .then(res => {
//             console.log(res.data);
//             dispatch({
//                 type: SET_USER,
//                 payload: res.data
//             })
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }



export const logOut = () => dispatch => {
    localStorage.removeItem(`mdt`);
    delete axios.defaults.headers.common[`Authorization`];
    dispatch({ type: SET_UNAUTHENTICATED });
    window.history.go("/login");
    
}

const setAuthorizationHeader = (token) => {
    const CyberGrfx = `Bearer ${token}`;
    localStorage.setItem(`mdt`, token)
    axios.defaults.headers.common["Authorization"] = CyberGrfx;
}