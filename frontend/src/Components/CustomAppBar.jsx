import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
            sx={{ ml: 2, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" style={{ padding: 10 }}>
            TodoLister
          </Typography>
          <Box sx={{ flexGrow: 1, paddingRight: 1 }}>
            <Box sx={{ width: '100%' }}>
              <SearchBox />
            </Box>

          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton color="inherit">
              <ShareIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <Button sx={{ color: 'inherit' }}>Share</Button>
          </Box>
          <Box sx={{ paddingRight: 2, display: { xs: 'none', sm: 'flex' } }}>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
