import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";

const getPostState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostState,(state)=>{
    return state.posts;
});

export const getPostById = createSelector(getPostState,(state, props)=>{
    // console.log(props.id);
    return state.posts.find(post=> post.id === props.id);
});