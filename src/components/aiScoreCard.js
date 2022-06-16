import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box , CircularProgress ,Typography,Button} from '@mui/material';
import "./LiveScore.css";
import { useNavigate } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

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


 







export default function AiScoreCard({data}) {
    const navigate = useNavigate();
   console.log(data)
    const DetailsButton = (matchDetails) => {
        
        const handelMatchDetails = () => {
            console.log('navigate!!')
            navigate("../matches",{ state: matchDetails.matchDetails });
        }

      
        return(
          <Button className="matches__stats btn btn--icon" role='button' onClick={handelMatchDetails}>
          <span className="sr-only">Stats</span>
          <svg width={24} height={24} viewBox="0 0 24 24" >
            <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />
          </svg>
        </Button>
        )
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell>Date 日子</TableCell>
            <TableCell>Teams 比賽</TableCell>
            <TableCell align="right">System Choice 系統分析勝負</TableCell>
            <TableCell align="right">System Pick 系統選擇</TableCell>
            <TableCell align="right">Result 結果</TableCell>
            <TableCell align="right">Match Details </TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((data) => (
            <TableRow
              key={data.homeTeam}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.matchTime}
              </TableCell>
              <TableCell align="right">{data.homeTeam} vs {data.visitTeam}</TableCell>
              <TableCell align="right"><CircularProgressWithLabel value={data.recPercent}/></TableCell>
              <TableCell align="right">{data.matchResult === "胜" ? "主隊" : "客隊"}</TableCell>
              <TableCell align="right"> {data.result1 === '0:0' ? '未開始': data.result1}</TableCell>
              <TableCell align="right"><DetailsButton  matchDetails={data}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
