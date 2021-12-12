import {ArticleReducerState, FETCH_ARTICLES,FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE} from '../../types'

const initiState:ArticleReducerState = {
    articles: [],
    isLoading: false,
    error: ''
}

export default function articleReducer(state: ArticleReducerState=initiState, action:any){
    switch(action.type){
        // fetch article, loading true
        case FETCH_ARTICLES:
            return {
                ...state,
                isLoading: true
            }

         // if fetching is successful
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                articles: action.payload,
                error: ''
            } 

        // if fetching has any errors
        case FETCH_ARTICLES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }  
        default:
            return state
    }
}