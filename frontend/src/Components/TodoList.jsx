import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
// import TodoCard from './TodoCard';

export default function TodoList() {
  const todoColumn = [];
  const inProgressColumn = [];
  const doneColumn = [];

  const renderTodoCards = (items) => {
    let gridItems = [];
    if (items !== null && items !== undefined) {
      gridItems = items.map((item) => (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {item}
        </Grid>
      ));
    }
    return gridItems;
  };
  return (
    <Box
      sx={{
        maxHeight: '100%',
        maxWidth: '100%',
        width: '100%',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <Grid container item xs={12} align="center" justifyContent="center" sx={{ minHeight: '80vh' }}>
        <Grid
          container
          item
          xs={4}
          rowSpacing={1}
          sx={{
            borderRadius: 3, backgroundColor: 'rgb(246, 247, 248)', paddingBottom: '10px', marginLeft: 1, marginRight: 1, boxShadow: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              Todo
            </Typography>
          </Grid>
          {renderTodoCards(todoColumn)}
        </Grid>
        <Grid
          container
          item
          xs={4}
          rowSpacing={1}
          sx={{
            borderRadius: 3, backgroundColor: 'rgb(246, 247, 248)', paddingBottom: '10px', marginLeft: 1, marginRight: 1, boxShadow: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              In-progress
            </Typography>
          </Grid>
          {renderTodoCards(inProgressColumn)}
        </Grid>
        <Grid container item xs={1} />
        <Grid
          container
          item
          xs={2}
          rowSpacing={1}
          sx={{
            borderRadius: 3, backgroundColor: 'rgb(246, 247, 248)', paddingBottom: '10px', boxShadow: 1, marginLeft: 1, marginRight: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              Done!
            </Typography>
          </Grid>
          {renderTodoCards(doneColumn)}
        </Grid>
      </Grid>
    </Box>
  );
}
