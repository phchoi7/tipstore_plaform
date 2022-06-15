import { useEffect, useState } from 'react';
// material
import { Container, Stack, Typography, Grid, Card, CardHeader, Box } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import MatchesCard from 'src/components/matchesCard';
import { getDetailLeftLists, getDetailYcChartsInfo} from '../services/apiServices';
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
// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const theme = useTheme();
  const [openFilter, setOpenFilter] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [matchAnalyze, setMatchAnalyze] = useState();
  const [match, setMatches] = useState();

  useEffect(() => {
    getDetailLeftLists().then((response) => {
      setMatchAnalyze(response);
      setLoading(false);
    });

    getDetailYcChartsInfo().then((response) => {
      setMatches(response);
      setLoading(false);
    });
  }, []);

  console.log('matchAnalyze:',matchAnalyze);



  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} sx={{mb: 5 }} >
          <MatchesCard />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
                <AppCurrentVisits
                  title="勝率計算"
                  chartData={[
                    { label: 'Win', value:  Number(match ? match.analyInfo.winPossibility: 0) },
                    { label: 'Draw', value: Number(match ? match.analyInfo.drawPossibility: 0) },
                    { label: 'Lose', value: Number(match ? match.analyInfo.losePossibility: 0)},
                  ]}
                  chartColors={[
                    theme.palette.primary.main,
                    theme.palette.chart.yellow[0],
                    theme.palette.chart.violet[0],
                   
                  ]} />
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
                  }))} />
              </Grid>


        <ProductCartWidget />
        </Grid>
      </Container>
    </Page>
  );
}
