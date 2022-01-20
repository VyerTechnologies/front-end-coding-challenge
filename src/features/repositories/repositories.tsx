import { Typography } from "@mui/material";
import { Suspense, useEffect } from "react";
import { useQueryLoader } from "react-relay/hooks";
import { graphql } from "relay-runtime";

import { repositoriesQuery } from "./__generated__/repositoriesQuery.graphql";
import { RepositoryList } from "./repository-list";

export const RepositoriesQuery = graphql`
  query repositoriesQuery($query: String!, $type: SearchType!) {
    search(first: 25, query: $query, type: $type) {
      nodes {
        ... on Repository {
          id
          description
          name
        }
      }
    }
  }
`;

const Repositories = () => {
  const [queryReference, loadQuery] =
    useQueryLoader<repositoriesQuery>(RepositoriesQuery);

  useEffect(() => {
    loadQuery({ query: "react in:repo org:facebook", type: "REPOSITORY" });
  }, []);

  return (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      {queryReference ? (
        <RepositoryList queryReference={queryReference} />
      ) : (
        <Typography>No results match the search criteria.</Typography>
      )}
    </Suspense>
  );
};

export default Repositories;
