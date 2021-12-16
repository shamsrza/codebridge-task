//reducer case constants
export const FETCH_ARTICLES_LOADING = "FETCH_ARTICLES_LOADING"
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS"
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE"


//types
export type ArticleReducerState = {
    articles: ArticleState[],
    isLoading: boolean,
    error: string
}

export type ArticleState={
  id: string;
  imageUrl: string;
  publishedAt: string;
  title: string;
  summary: string;
  url: string;
  posts: [];
  disabled: boolean;
  onClick: Function;
}

//action types
export type FetchAllArticlesLoadingAction = {
    type: typeof FETCH_ARTICLES_LOADING
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

export type ArticleActions = FetchAllArticlesLoadingAction | FetchAllArticlesSuccessAction | FetchAllArticlesFailureAction