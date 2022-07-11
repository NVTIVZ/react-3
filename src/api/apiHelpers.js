import Future from "fluture";

const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

export const FutureRequest = (query, variables) =>
  Future((reject, resolve) => {
    const controller = new AbortController();
    fetch(endpoint, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: query.loc && query.loc.source.body,
        variables: variables,
      }),
      method: "POST",
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then(resolve, reject);

    return () => controller.abort();
  });
