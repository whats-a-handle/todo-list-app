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
import SearchIcon from '@mui/icons-material/Search';
import SearchBox from './SearchBox';

const outerBoxStyle = {
  sx: {
    flexGrow: 1, marginBottom: '1rem',
  },
};
const toolbarStyle = {
  style: {
    padding: '0.2rem',
  },
};

const menuButtonStyle = {
  sx: {
    ml: '1rem', mr: '1rem',
  },
};

const titleBoxStyle = {
  sx: {
    display: 'flex', flexGrow: { xs: 3, sm: 0 },
  },
};

const titleStyle = {
  style: {
    padding: '1rem',
  },
};

const searchBoxContainerStyle = {
  sx: {
    display: { xs: 'none', sm: 'flex' }, flexGrow: 1, paddingRight: '.5rem',
  },
};
const searchBoxStyle = {
  sx: {
    width: '100%',
  },
};

const mobileButtonStyle = {
  sx: {
    flexGrow: 1,
    display: { xs: 'flex', sm: 'none' },
  },
};
const shareButtonContainerStyle = {
  sx: {
    flexGrow: 1,
    display: { xs: 'none', sm: 'flex' },
  },
};
const shareButtonStyle = {
  sx: {
    color: 'inherit',
  },
};

const accountButtonContainerStyle = {
  sx: {
    paddingRight: 2, display: { xs: 'none', sm: 'flex' },
  },
};
export default function NewCustomAppBar() {
  return (
    <Box sx={outerBoxStyle.sx}>
      <AppBar position="static">
        <Toolbar style={toolbarStyle.style}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={menuButtonStyle.sx}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={titleBoxStyle.sx}>
            <Typography variant="h6" component="div" style={titleStyle.style}>
              TodoLister
            </Typography>
          </Box>
          <Box sx={searchBoxContainerStyle.sx}>
            <Box sx={searchBoxStyle.sx}>
              <SearchBox />
            </Box>
          </Box>
          <Box sx={mobileButtonStyle.sx}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShareIcon />
            </IconButton>
          </Box>
          <Box sx={shareButtonContainerStyle.sx}>
            <Button sx={shareButtonStyle.sx}>Share</Button>
          </Box>
          <Box sx={accountButtonContainerStyle.sx}>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
