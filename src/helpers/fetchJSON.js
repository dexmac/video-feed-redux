/**
 * Wraps a promise and adds two methods to it (cancel() && isCancelled())
 * Based on proposed solutions to this problem:
 * https://github.com/facebook/create-react-app/issues/3482
 * From here:
 * https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 *
 * @param promise
 * @returns {Promise<any>} - the promise contains two methods: cancel() which will reject the promise and isCancelled() which returns
 * the cancellation state
 */
const makeCancellable = promise => {
  let hasCancelled_ = false;

  let wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => {
        hasCancelled_ ? reject({ isCancelled: true }) : resolve(val);
      },
      error => {
        hasCancelled_ ? reject({ isCancelled: true }) : reject(error);
      }
    );
  });

  wrappedPromise.cancel = () => {
    hasCancelled_ = true;
  };
  wrappedPromise.isCancelled = () => hasCancelled_;

  return wrappedPromise;
};

/**
 * Fetches JSON from a given URL
 *
 * @param url
 * @returns {Promise<Response>} - the promise is wrapped by makeCancellable which provides two more methods on it:
 * cancel() and isCancelled()
 */
export const fetchJSON = url =>
  makeCancellable(
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          const error = `Warning: Error fetching JSON from ${url} - Network response status is: ${
            response.status
          }`;
          console.warn(error);
          return { error };
        }
      })
      .catch(errMsg => {
        const error = `Warning: There was a problem with the fetch operation to: ${url} - 
          ${errMsg}`;
        console.warn(error);
        return { error };
      })
  );
