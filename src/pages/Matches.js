import { useEffect, useState } from 'react';
// material
import { Container, Stack, Typography, Grid, Card, CardHeader, Box, Button } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import MatchesCard from 'src/components/matchesCard';
import { getDetailLeftLists, getDetailYcChartsInfo ,getHistoryDetail} from '../services/apiServices';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import ColumnDataTable from '../sections/@dashboard/app/ColumnDataTable'
import { useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import { useLocation, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// ----------------------------------------------------------------------

export default function Matches() {
  const theme = useTheme();
  const [openFilter, setOpenFilter] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isLoaded, setLoaded] = useState(true);
  const [matchAnalyze, setMatchAnalyze] = useState();
  const [matchHistory, setMatchHistory] = useState();
  const [homeGoal, setHomeGoal] = useState({
    goal:'',
    lose:'',
    goalDifferent:'',
    goalDiffCountMatch:'',
    total:''
  });
  const [awayGoal, setAwayGoal] = useState({
    goal:'',
    lose:'',
    goalDifferent:'',
    goalDiffCountMatch:'',
    total:''
  });
  const [match, setMatches] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathMatchId = location.pathname.slice(19);
    getDetailLeftLists(location.state ? location.state.matchId : pathMatchId)
      .then((response) => {
        try {
          setMatchAnalyze(response);
        } catch {
          navigate(-1);
        }
      })
      .finally(() => {
        setLoaded(false);
      });

    getDetailYcChartsInfo(location.state ? location.state.matchId : pathMatchId)
      .then((response) => {
        try {
          setMatches(response);
        } catch {
          navigate(-1);
        }
      })
      .finally(() => {
        setLoading(false);
      });

      getHistoryDetail(location.state ? location.state.matchId : pathMatchId)
      .then((response) => {
        try {
          setMatchHistory(response);
          console.log('setMatchHistory',response)
          response.homeStacList.forEach((items) => {
            
              console.log(items)

              if(items.type === '总'){
                const  goalDiff = items.obtainCount - items.loseCount
                const goalDiffCountMatch = goalDiff / items.matchCount
                const tempHome = {
                  goal: items.obtainCount,
                  lose:items.loseCount,
                  goalDifferent: goalDiff,
                  goalDifferentCountMatch: goalDiffCountMatch,
                  total:items.matchCount
                }
                setHomeGoal(tempHome)
              }
            
           
          })

          response.custStacList.forEach((items) => {
            
            console.log(items)
            

            if(items.type === '总'){
              const  goalDiff = items.obtainCount - items.loseCount
              const goalDiffCountMatch = goalDiff / items.matchCount
              const tempAway = {
                goal: items.obtainCount,
                lose:items.loseCount,
                goalDifferent: goalDiff,
                goalDifferentCountMatch: goalDiffCountMatch,
                total:items.matchCount
              }
              setAwayGoal(tempAway)
            }
          
         
        })


        } catch {
          navigate(-1);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [location]);

  console.log('homegoal',homeGoal)

  const goBack = () => {
    navigate(-1);
  };

  const loadingArea = () => {
    return (
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Grid>
    );
  };

 
  return (
    <Page title="Dashboard: Products">
      <Container>
        {isLoading && isLoaded ? (
          loadingArea()
        ) : (
          <>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'baseline' }}>
              <Button onClick={goBack}>
                <ArrowBackIcon />
              </Button>

              <Typography variant="h4" sx={{ mb: 5 }}>
                Match Details
              </Typography>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sx={{ mb: 5 }}>
                <MatchesCard
                  guessWin={match ? match.analyInfo.winner : ''}
                  guessHalfFull={match ? match.analyInfo.halfWholeResult : ''}
                  guessScore={match ? match.analyInfo.scoreResult : ''}
                  data={location.state}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <AppCurrentVisits
                  title="勝率計算"
                  chartData={[
                    { label: 'Win', value: Number(match ? match.analyInfo.winPossibility : 0) },
                    { label: 'Draw', value: Number(match ? match.analyInfo.drawPossibility : 0) },
                    { label: 'Lose', value: Number(match ? match.analyInfo.losePossibility : 0) },
                  ]}
                  chartColors={[
                    theme.palette.primary.main,
                    theme.palette.chart.yellow[0],
                    theme.palette.chart.violet[0],
                  ]}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Goal Difference Rates"
              subheader={`${homeGoal.total} game`}
              chartData={[
                { label: `Home Team`, value: homeGoal && Number(homeGoal.goalDifferentCountMatch) },
                { label: 'Away Team', value: awayGoal && Number(awayGoal.goalDifferentCountMatch) },
              ]}
            />
          </Grid>

            </Grid>
          </>
        )}
      </Container>
    </Page>
  );
}
