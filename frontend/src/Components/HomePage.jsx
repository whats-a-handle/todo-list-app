import { Container, Grid } from '@mui/material';
import TodoList from './TodoList';

const mainContainerStyle = {
  style: {
    backgroundColor: 'lightgrey', height: '100vh', maxWidth: '100%',
  },
};

const innerContainerStyle = {
  style: {
    width: '100%',
  },
};

const todoListContainerStyle = {
  style: {
    backgroundColor: 'lightgray',
    justifyContent: 'center',
  },
};
export default function HomePage() {
  return (
    <Container style={mainContainerStyle.style}>
      <Grid container justifyContent="center" style={innerContainerStyle.style}>
        <Grid container item lg={12} style={todoListContainerStyle.style}>
          <TodoList />
        </Grid>
      </Grid>
    </Container>
  );
}
