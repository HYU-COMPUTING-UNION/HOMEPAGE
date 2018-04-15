import fetch from 'isomorphic-fetch';
import 'isomorphic-form-data';

import {
  Environment,
  Network,
  RecordSource,
  Store,
  fetchQuery,
  commitMutation,
  commitLocalUpdate,
} from 'relay-runtime';

function create({ baseUrl, headers = {} }) {
  const defaults = {
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: {
      ...headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  let environment;
  let addedHeaders;

  const setHeaders = h => {
    addedHeaders = h;

    environment = new Environment({
      network: Network.create(
        (operation, variables, cacheConfig, uploadables) => {
          const request = {
            ...defaults,
            headers: {
              ...defaults.headers,
              ...addedHeaders,
            },
            method: 'POST',
          };

          if (uploadables) {
            const formData = FormData();
            formData.append('query', operation.text);
            formData.append('variables', JSON.stringify(variables));
            Object.keys(uploadables).forEach(key => {
              if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
                formData.append(key, uploadables[key]);
              }
            });

            request.headers['Content-Type'] = 'multipart/form-data';

            request.body = formData;
          } else {
            request.body = JSON.stringify({
              query: operation.text,
              variables,
            });
          }
          return fetch(`${baseUrl}/graphql`, request).then(response =>
            response.json(),
          );
        },
      ),
      store: new Store(new RecordSource()),
    });
  };

  const getEnvironment = () => environment;

  setHeaders();

  return {
    getEnvironment,
    setHeaders,
    fetch: (url, options) =>
      fetch(`${baseUrl}${url}`, {
        ...defaults,
        ...options,
        headers: {
          ...defaults.headers,
          ...(options && options.headers),
          ...addedHeaders,
        },
      }),
    fetchQuery: fetchQuery.bind(undefined, getEnvironment()),
    commitMutation: commitMutation.bind(undefined, getEnvironment()),
    commitLocalUpdate: commitLocalUpdate.bind(undefined, getEnvironment()),
  };
}

export default { create };
