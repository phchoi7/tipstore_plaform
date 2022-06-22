import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, CircularProgress, Typography, Button, Modal } from '@mui/material';
import './LiveScore.css';
import { useNavigate, useParams } from 'react-router-dom';
import { checkName, checkLeagueName } from './AiScoreCard.function';
import BasicModal from './BasicModal';
import Avatar from '@mui/material/Avatar';

const convert = require('chinese_convert');

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '1.25rem',
  textAlign: 'center',
  boxShadow: 24,
  padding: '3rem 2rem 2rem',
};
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function AiScoreCard({ data, user }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const DetailsButton = (matchDetails) => {
    const { matchId } = useParams();
    const handelMatchDetails = () => {
      navigate(`../matches/${matchDetails.matchDetails.matchId}`, { state: matchDetails.matchDetails });
    };

    return (
      <Button className="matches__stats btn btn--icon" role="button" onClick={handelMatchDetails}>
        <span className="sr-only">Stats</span>
        <svg width={24} height={24} viewBox="0 0 24 24">
          <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />
        </svg>
      </Button>
    );
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Start</TableCell>
            <TableCell>Date 日子</TableCell>
            <TableCell>Teams 比賽</TableCell>
            <TableCell align="right">System Choice 系統分析勝負</TableCell>
            <TableCell align="right">System Pick 系統選擇</TableCell>
            <TableCell align="right">Result 結果</TableCell>
            <TableCell align="right">Match Details </TableCell>
          </TableRow>
        </TableHead>
        {user ? (
          <TableBody>
            {data.map((data) => (
              <TableRow
                key={data.matchId}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  background: data.isOk === '1' ? '#d8fbd5' : data.isOk === '0' ? 'none' : '#fbd5eb',
                }}
              >
                <TableCell>
                  {data.matchLong === '未' ? (
                    <span className="tag tag--icon">
                      <svg width={6} height={6} viewBox="0 0 8 8">
                        <circle fill="#613cea" cx={4} cy={4} r={4} />
                      </svg>
                      未開始
                    </span>
                  ) : data.matchLong === '完' ? (
                    <span className="tag tag--red tag--icon">
                      <svg width={6} height={6} viewBox="0 0 8 8">
                        <circle fill="#efefef" cx={4} cy={4} r={4} />
                      </svg>
                      己完場
                    </span>
                  ) : (
                    ''
                  )}
                </TableCell>
                <TableCell component="th" scope="row">
                  {data.matchTime}
                </TableCell>
                <TableCell>
                  <Avatar alt={data.typeName} src={checkLeagueName(data.typeName)} sx={{ width: 20, height: 20 }} />
                  {convert.cn2tw(checkName(data.homeTeam))} vs {convert.cn2tw(checkName(data.visitTeam))}
                </TableCell>
                <TableCell align="right">
                  <CircularProgressWithLabel value={Number(data.recPercent)} />
                </TableCell>
                <TableCell align="right">{data.matchResult === '胜' ? '主隊' : '客隊'}</TableCell>
                <TableCell align="right"> {data.result1}</TableCell>
                <TableCell align="right">
                  <DetailsButton matchDetails={data} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {data.slice(0, 2).map((data) => (
              <TableRow key={data.homeTeam} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {data.matchTime}
                </TableCell>
                <TableCell align="right">
                  {convert.cn2tw(checkName(data.homeTeam))} vs {convert.cn2tw(checkName(data.visitTeam))}
                </TableCell>
                <TableCell align="right">
                  <CircularProgressWithLabel value={data.recPercent} />
                </TableCell>
                <TableCell align="right">{data.matchResult === '胜' ? '主隊' : '客隊'}</TableCell>
                <TableCell align="right"> {data.result1 === '0:0' ? '未開始' : data.result1}</TableCell>
                <TableCell align="right">
                  <Button className="matches__stats btn btn--icon" role="button" onClick={handleOpen}>
                    <span className="sr-only">Stats</span>
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />
                    </svg>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
        <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
      </Table>
    </TableContainer>
  );
}
