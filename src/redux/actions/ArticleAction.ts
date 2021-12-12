import {FetchAllArticlesAction, ArticleActions, FETCH_ARTICLES,FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE} from '../../types'

//fetch all articles
export function fetchAllArticles():ArticleActions{

    return {
        type: FETCH_ARTICLES
    }
}

// fetch all articles success
export function fetchAllArticlesSuccess(articles:[]):ArticleActions{

    return {
        type: FETCH_ARTICLES_SUCCESS,
        payload: articles
    }
}

// fetch all articles failure
export function fetchAllArticlesFailure(error:string):ArticleActions{

    return {
        type: FETCH_ARTICLES_FAILURE,
        payload: error
    }
}