import createError from './createError'

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */

export default function settle(resolve: any, reject: any, response: any) {
    const validateStatus = response.config.validateStatus;
    if (validateStatus || validateStatus(response.status)) {
        resolve(response)
    } else {
        reject(createError(
            'Request failed with status code ' + response.status,
            response.config,
            null,
            response.request,
            response
        ))
    }
}
