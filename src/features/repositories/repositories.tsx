import { Button, Typography } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { useQueryLoader } from "react-relay/hooks";
import { graphql } from "relay-runtime";

import { repositoriesQuery } from "./__generated__/repositoriesQuery.graphql";
import { RepositoryList } from "./components";
import { IssueList } from "../issues/components";

export const RepositoriesQuery = graphql`
  query repositoriesQuery($query: String!, $type: SearchType!) {
    search(first: 25, query: $query, type: $type) {
      nodes {
        ... on Repository {
          id
          name
          owner {
            login
          }
          description
          issues(states: [OPEN]) {
            totalCount
          }
        }
      }
    }
  }
`;

const Repositories = () => {
  const [queryReference, loadQuery] = useQueryLoader<repositoriesQuery>(RepositoriesQuery);
  const [selectedRepo, setSelectedRepo] = useState<{ owner: string; name: string; } | null>(null);

  useEffect(() => {
    loadQuery({ query: "topic:react sort:stars-desc", type: "REPOSITORY" });
  }, [loadQuery]);

  const handleSelectRepository = (owner: string, name: string) => {
    setSelectedRepo({ owner, name });
  };

  const handleBack = () => {
    setSelectedRepo(null);
  };

  return (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      {!selectedRepo ? (
        queryReference ? (
          <RepositoryList
            queryReference={queryReference}
            onSelectRepository={handleSelectRepository}
          />
        ) : (
          <Typography>No results found.</Typography>
        )
      ) : (
        <div>
          <Button onClick={handleBack} sx={{ mb: 2 }}>
            Back to Repositories
          </Button>
          <IssueList owner={selectedRepo.owner} name={selectedRepo.name} />
        </div>
      )}
    </Suspense>
  );
};

export default Repositories;
