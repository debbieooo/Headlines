import request from 'superagent';
import { Actions } from '../utils/AppConstants';
import AppDispatcher from '../utils/AppDispatcher';

const url = 'https://newsapi.org/v1/articles';
const API = '213327409d384371851777e7c7f78dfe';
export function getArticles(source, sortBy) {
  request.get(url)
    .set('api', API)
    .query({ source: source })
    .query({ sortBy: sortBy })
    .query({ apiKey: API })
    .end((err, response) => {
      if (err) return console.error(err);
      const result = JSON.parse(response.text);
      console.log(result);
      AppDispatcher.dispatch({
        type: Actions.GET_ARTICLES,
        response: result,
      });
    });
}
