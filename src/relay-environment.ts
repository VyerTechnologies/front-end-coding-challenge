import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";

const fetchFn = async (params: RequestParameters, variables: Variables) => {
  const GITHUB_PERSONAL_ACCESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
  if (!GITHUB_PERSONAL_ACCESS_TOKEN)
    throw Error(
      "GITHUB_PERSONAL_ACCESS_TOKEN environmental variable is not defined"
    );
  const response = await fetch("https://api.github.com/graphql", {
    body: JSON.stringify({ query: params.text, variables }),
    headers: {
      Authorization: `bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return await response.json();
};

export default new Environment({
  network: Network.create(fetchFn),
  store: new Store(new RecordSource()),
});
