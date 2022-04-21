import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import SearchBox from './SearchBox';

export default function NewCustomAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ padding: 5 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" style={{ padding: 10 }}>
            TodoLister
          </Typography>
          <Box sx={{ flexGrow: 4, paddingRight: 1 }}>
            <SearchBox />
          </Box>
          <Box sx={{
            flexGrow: 1, paddingLeft: 5, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center',
          }}
          >
            <Button color="inherit">Share</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
