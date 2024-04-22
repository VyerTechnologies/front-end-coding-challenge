import { Card, CardContent, Grid, Typography } from "@mui/material";

interface RepositoryListItemProps {
  owner: string;
  name: string;
  description?: string | null;
  issuesCount?: number;
  onSelect: () => void;
}

const RepositoryListItem = ({
  owner,
  name,
  description,
  issuesCount,
  onSelect,
}: RepositoryListItemProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} onClick={onSelect}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5">{name}</Typography>
          <Typography color="text.secondary" variant="body2">{description}</Typography>
          <Typography color="text.secondary" variant="body1">Open Issues: {issuesCount}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RepositoryListItem;
