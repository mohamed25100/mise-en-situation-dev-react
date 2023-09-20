import axios from "axios";
import { useSelector } from "react-redux";
import { getToken } from "../store/selectors/userSelector";
import { store } from "../store/store";

axios.interceptors.request.use(config => {
    const token = store.getState().user.token
    if(token ){
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
},
function (error) {
  return Promise.reject(error);
})