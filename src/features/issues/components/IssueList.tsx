import { Typography, Grid, CircularProgress, Button, TextField } from "@mui/material";
import { Suspense, useState } from 'react';
import { useLazyLoadQuery, graphql } from "react-relay/hooks";

const issuesQuery = graphql`
  query IssueListQuery($owner: String!, $name: String!, $after: String, $first: Int = 25) {
    repository(owner: $owner, name: $name) {
      issues(first: $first, after: $after, states: [OPEN], orderBy: {field: CREATED_AT, direction: ASC}) {
        edges {
          node {
            id
            title
            createdAt
            bodyText
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;


const IssueList = ({ owner, name }: { owner: String; name: String }) => {
 const [after, setAfter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const data = useLazyLoadQuery(
    issuesQuery,
    { owner, name, after },
    { fetchPolicy: 'store-and-network' }
  ) as any

  const filteredIssues = data.repository.issues.edges.filter((edge: any )=>
    edge.node.bodyText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNext = () => {
    if (data.repository.issues.pageInfo.hasNextPage) {
      setAfter(data.repository.issues.pageInfo.endCursor);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Suspense fallback={<CircularProgress />}>
      <TextField
        label="Search Issues"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button onClick={() => setAfter(null)} disabled={!after}>First Page</Button>
          <Button onClick={handleNext} disabled={!data.repository.issues.pageInfo.hasNextPage}>Next Page</Button>
        </Grid>
        {!data ? (
          <CircularProgress />
        ) : (
          filteredIssues.map((edge: any) => (
            <Grid item xs={12} key={edge.node.id}>
              <Typography>{edge.node.title} - {new Date(edge.node.createdAt).toLocaleDateString()}</Typography>
              <Typography variant="body2">{edge.node.bodyText}</Typography>
            </Grid>
          ))
        )}
      </Grid>
    </Suspense>
  );
};

export default IssueList;
