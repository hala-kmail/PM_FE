import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' ,
      position: 'fixed',
      top: 100,
      left: 0,
      width: '100%',
      height: '100%',
      alignItems: 'baseline',
      zIndex: 1000     
     }}>
      <CircularProgress />
    </Box>
  );
}