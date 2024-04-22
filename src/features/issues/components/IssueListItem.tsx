// src/features/issues/components/IssueListItem.tsx
import { Card, CardContent, Typography } from '@mui/material';
import { graphql } from 'relay-runtime';

export const issueFragment = graphql`
  fragment IssueListItem_issue on Issue {
    id
    title
    createdAt
  }
`;

interface IssueListItemProps {
  issue: {
    id: string;
    title: string;
    createdAt: string;
  };
}

const IssueListItem = ({ issue }: IssueListItemProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{issue.title}</Typography>
        <Typography color="textSecondary">{new Date(issue.createdAt).toLocaleDateString()}</Typography>
      </CardContent>
    </Card>
  );
};

export default IssueListItem;
