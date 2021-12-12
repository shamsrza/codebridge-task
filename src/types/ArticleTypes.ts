
//reducer case constants
export const FETCH_ARTICLES = "FETCH_ARTICLES"
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS"
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE"


//types
export type ArticleReducerState = {
    articles: [],
    isLoading: boolean,
    error: string
}

//action types
export type FetchAllArticlesAction = {
    type: typeof FETCH_ARTICLES
    payload?: string
}

export type FetchAllArticlesSuccessAction = {
    type: typeof FETCH_ARTICLES_SUCCESS
    payload: []
}

export type FetchAllArticlesFailureAction = {
    type: typeof FETCH_ARTICLES_FAILURE
    payload: string
}

export type ArticleActions = FetchAllArticlesAction | FetchAllArticlesSuccessAction | FetchAllArticlesFailureAction