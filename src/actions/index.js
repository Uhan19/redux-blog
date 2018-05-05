import axios from "axios";

export const FETCH_POSTS = "fetch_posts";

const rootURL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=lamborghiniaventadorLP700-4";

export function fetchPosts() {
  const request = axios.get(`${rootURL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}
