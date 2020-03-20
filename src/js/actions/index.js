import { ADD_ARTICLE, DATA_LOADED, LOADER, ERROR } from "../constants/action-types";
import Axios from "axios";


export function loader(e) {
    return {
        type: LOADER,
        payload: e
    }
}

export function error() {
    return {
        type: ERROR
    }
}

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    }
}

export const postData = (data) => {
    return {
        type: DATA_LOADED,
        payload: data
    }
}

export const getData = () => {
    return function (dispatch) {
        dispatch(loader());
        try {
            return Axios.get("https://jsonplaceholder.typicode.com/posts").then(
                res => {
                    dispatch(postData(res.data.slice(0, 10)))
                }
            )
        } catch (e) {
            return dispatch(error(e.message));
        }
    }
}