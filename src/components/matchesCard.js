
import merge from 'lodash/merge';

// @mui

import { Card, CardHeader, Box ,Typography,Grid,Divider} from '@mui/material';
import Avatar from '@mui/material/Avatar';


// components


// ----------------------------------------------------------------------



export default function MatchesCard() {
  

  return (
    <Card >
    <CardHeader  />
    <Grid item sx={{display:'flex',justifyContent:'space-around',textAlign:'center'}}>
    <Box sx={{ p: 3, pb: 1 }} dir="ltr" >
    <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 80, height: 80}}
      />
        <Typography variant="h4" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
    </Box>
    <Box sx={{ p: 3, pb: 1 }} dir="ltr" >
   
        <Typography variant="h1" sx={{ color: 'text.secondary' }}>
          VS
        </Typography>
   
    </Box>
    <Box sx={{ p: 3, pb: 1 }} dir="ltr" >
    <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 80, height: 80}}
      />
        <Typography variant="h4" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.main' }}>
          OR
        </Typography>
    </Box>
    </Grid>
    <Divider />
    <Grid sx={{textAlign:'center'}}>
        <Typography variant='h4' sx={{color:'text.secondary'}}>
            Game Predilection 本場預測
        </Typography>
    </Grid>
    <Grid sx={{display:'flex',justifyContent:'center'}}>
    <Box sx={{ p: 3, pb: 1 }} dir="ltr" >
   
        <Typography variant="h4" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.main' }}>
          OR
        </Typography>
    </Box>
    <Box sx={{ p: 3, pb: 1 }} dir="ltr" >
   
        <Typography variant="h4" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.main' }}>
          OR
        </Typography>
    </Box>
    <Box sx={{ p: 3, pb: 1 }} dir="ltr" >
   
        <Typography variant="h4" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.main' }}>
          OR
        </Typography>
    </Box>
    </Grid>
    
    
  </Card>
  );
}
