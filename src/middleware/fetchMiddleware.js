import qs from 'qs'

export const API_HOST = 'http://localhost:8000/'
export const API_REQUEST = Symbol('FETCH_MIDDLEWARE/API_REQUEST')
/**
 * Example of action
 * export const fetchXXX = (url, reqData) => (
 *   [API_REQUEST] : {
       types: [FETCH_XXX, FETCH_XXX_SUCCESS, FETCH_XXX_FAIL],
       url: '/api/xxx',
       reqData: {
         xxx: xxx,
         xxx: xxx
       },
     }
   )
 */

export default () => next => async (action) => {
  const request = action[API_REQUEST]
  if (request) {
    const [typeRequest, typeSuccess, typeFail] = request.types

    const requestOptions = {
      reqData: request.reqData || {},
      method: 'POST',
      url: request.url || '',
      headers: {
        token: '', // get token after login or from cache
        Authorization: '', // get access_token after login
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      contentType: 'json', // json, urlEncoded...
      onSuccess: request.onSuccess || (() => {
        console.log('success')
      }),
      onFail: request.onFail || ((err) => {
        console.log(err)
      }),
    }

    const {
      contentType, reqData, url, method, headers, onSuccess, onFail,
    } = requestOptions

    const requestUrl = `${API_HOST}${url}`
    const fetchOptions = {
      method,
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    };

    if (contentType) {
      if (contentType === 'json') {
        fetchOptions.headers['Content-Type'] = 'application/json';
        fetchOptions.body = JSON.stringify(reqData);
      } else if (contentType === 'urlEncoded') {
        fetchOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        fetchOptions.body = qs.stringify(reqData);
      } else {
        throw new Error('Invalid contentType, currently it only support "application/json" and "application/x-www-form-urlencoded".');
      }
    }

    next({ type: typeRequest })

    try {
      const response = await fetch(requestUrl, { ...fetchOptions })
      // TODO: not status 200 or status 200 but error handle
      const result = await response.json()
      next({
        type: typeSuccess,
        payload: result,
      })

      if (typeof onSuccess === 'function') {
        onSuccess(result) // success callback
      }
    } catch (err) {
      next({
        type: typeFail,
        error: {
          message: err.message,
        },
      })

      if (typeof onFail === 'function') {
        onFail(err) // fail callback
      }
    }
  } else {
    next(action)
  }
}