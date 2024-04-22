import { Grid } from "@mui/material";
import { PreloadedQuery, usePreloadedQuery } from "react-relay/hooks";

import { repositoriesQuery } from "../__generated__/repositoriesQuery.graphql";
import { RepositoriesQuery } from "../repositories";
import RepositoryListItem from "./RepositoryListItem";

interface RepositoryListProps {
  queryReference: PreloadedQuery<repositoriesQuery, Record<string, unknown>>;
  onSelectRepository: (owner: string, name: string) => void;
}

const RepositoryList = ({ queryReference, onSelectRepository }: RepositoryListProps) => {
  const data = usePreloadedQuery<repositoriesQuery>(RepositoriesQuery, queryReference);

  return (
    <Grid container spacing={2}>
      {data.search.nodes?.map((node: any) => (
        <RepositoryListItem
          key={node.id}
          name={node.name}
          owner={node.owner.login}
          description={node.description}
          issuesCount={node.issues.totalCount}
          onSelect={() => onSelectRepository(node.owner.login, node.name)}
        />
      ))}
    </Grid>
  );
};

export default RepositoryList;
