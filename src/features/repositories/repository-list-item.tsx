import { Card, CardContent, Grid, Typography } from "@mui/material";

interface RepositoryListItemProps {
  description?: string | null;
  name?: string;
}

export const RepositoryListItem = (props: RepositoryListItemProps) => {
  const { description, name } = props;
  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
