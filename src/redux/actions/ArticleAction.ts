import React from 'react'
import {Dispatch} from 'redux'
import axios from 'axios'

import {ArticleActions, FETCH_ARTICLES_LOADING,FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE} from '../../types'



//fetch all articles
export function fetchAllArticlesLoading():ArticleActions{

    return {
        type: FETCH_ARTICLES_LOADING
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

//fetch articles data
export function fetchAllArticles(){

    return (dispatch: Dispatch)=>{

        dispatch(fetchAllArticlesLoading())
        //axios call
        axios.get('https://api.spaceflightnewsapi.net/v3/articles')
        .then((res)=>{
            const articles = res.data
            dispatch(fetchAllArticlesSuccess(articles))
        }).catch((err)=>{
            dispatch(fetchAllArticlesFailure(err))
        })
    }
}