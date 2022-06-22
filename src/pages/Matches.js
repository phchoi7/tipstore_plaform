import { useEffect, useState } from 'react';
// material
import { Container, Stack, Typography, Grid, Card, CardHeader, Box, Button } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import MatchesCard from 'src/components/matchesCard';
import { getDetailLeftLists, getDetailYcChartsInfo } from '../services/apiServices';
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
  }, [location]);

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

              <Grid item xs={12} md={6} lg={4}>
                <AppOrderTimeline
                  title="Order Timeline"
                  list={[...Array(5)].map((_, index) => ({
                    id: faker.datatype.uuid(),
                    title: [
                      '1983, orders, $4220',
                      '12 Invoices have been paid',
                      'Order #37745 from September',
                      'New order placed #XF-2356',
                      'New order placed #XF-2346',
                    ][index],
                    type: `order${index + 1}`,
                    time: faker.date.past(),
                  }))}
                />
              </Grid>

              <ProductCartWidget />
            </Grid>
          </>
        )}
      </Container>
    </Page>
  );
}
