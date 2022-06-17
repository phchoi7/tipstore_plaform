import merge from 'lodash/merge';

// @mui

import { Card, CardHeader, Box, Typography, Grid, Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import TimerIcon from '@mui/icons-material/Timer';
import { checkName } from './AiScoreCard.function';
// components

const convert = require('chinese_convert');

// ----------------------------------------------------------------------

export default function MatchesCard({ guessWin, guessScore, guessHalfFull, data }) {
  return (
    <Card>
      <CardHeader />
      <Grid item sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 80, height: 80 }} />
          <Typography variant="h4" sx={{ color: 'text.secondary' }}>
            {convert.cn2tw(checkName(data.homeTeam))}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            OR
          </Typography>
        </Box>
        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
          <Typography variant="h1" sx={{ color: 'text.secondary' }}>
            VS
          </Typography>
        </Box>
        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 80, height: 80 }} />
          <Typography variant="h4" sx={{ color: 'text.secondary' }}>
            {convert.cn2tw(checkName(data.visitTeam))}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.main' }}>
            OR
          </Typography>
        </Box>
      </Grid>
      <Divider>Recommendations 投注推薦</Divider>
      <Grid sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
          <SportsSoccerIcon />

          <Typography variant="body1" sx={{ color: 'text.main' }}>
            {convert.cn2tw(guessWin)}
          </Typography>
        </Box>
        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
          <TimerIcon />
          <Typography variant="body1" sx={{ color: 'text.main' }}>
            {convert.cn2tw(guessHalfFull)}
          </Typography>
        </Box>
        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
          <ScoreboardIcon />
          <Typography variant="body1" sx={{ color: 'text.main' }}>
            {guessScore}
          </Typography>
        </Box>
      </Grid>
    </Card>
  );
}
