import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const textFieldStyles = {
  style: {
    width: '100%',
  },
};

const textFieldInputPropStyles = {
  style: {
    backgroundColor: '#f6f7f8',
  },
  sx: {
    boxShadow: 4,
    borderRadius: 3,
  },
};

export default function SearchBox() {
  return (
    <TextField
      style={textFieldStyles.style}
      id="standard-basic"
      placeholder="Find a to-do"
      variant="outlined"
      InputProps={{
        style: textFieldInputPropStyles.style,
        sx: textFieldInputPropStyles.sx,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
