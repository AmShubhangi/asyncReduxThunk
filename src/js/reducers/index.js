import { ADD_ARTICLE, DATA_LOADED, LOADER, ERROR } from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
    loading: false,
    error: ''
}

function rootReducer(state = initialState, action) {

    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }
    if (action.type === DATA_LOADED) {
        return {
            ...state,
            loading: state.loading = false,
            remoteArticles: state.remoteArticles.concat(action.payload)
        }
    }

    if (action.type === LOADER) {
        state.loading = true;
    }

    if (action.type === ERROR) {
        return {
            ...state,
            error: state.error
        }
    }
    return { ...state };
}

export default rootReducer;