import React from 'react';
// @mui
import { Grid, Container, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// components
import Page from '../dashboardComponents/Page';

// sections
import {

  AppWidgetSummary,

} from '../sections/@dashboard/app';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// ----------------------------------------------------------------------


export default function DashboardApp() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const [text, setText] = React.useState('');

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} onClick={()=>{setText("End Users Registered"); handleOpen()}} title="End Users Registered" color="info" total={714000} icon={'fa-solid:users'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} onClick={()=>{setText("Golf Owner Registered"); handleOpen()}} title="Golf Owner Registered" total={1352831} color="info" icon={'maki:golf'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} onClick={()=>{setText("Travel Owner Registered"); handleOpen()}} title="Travel Owner Registered" total={1723315} color="info" icon={'healthicons:travel-alt'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} title="Sight Seeing Authority Registered" total={234} color="info" icon={'carbon:building-insights-3'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} title="Active Golf Booking" color="info" total={714000} icon={'fa6-solid:golf-ball-tee'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} title="Active Hotel Booking" total={1352831} color="info" icon={'fa6-solid:hotel'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} title="Active Rental Car Booking" total={1723315} color="info" icon={'bxs:car'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} title="Active Customer Order Forms" total={234} color="info" icon={'ri:customer-service-2-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} title="Revenue Through Site" color="info" total={714000} icon={'ant-design:money-collect-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} title="Revenue Through Golf Affiliate" total={1352831} color="info" icon={'fa6-solid:money-check-dollar'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} title="Revenue Through Hotel Affiliate" total={1723315} color="info" icon={'fa6-solid:money-check-dollar'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} title="Revenue Through Rental Car Affiliate" total={234} color="info" icon={'fa-solid:money-check'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary style={{cursor:"pointer"}} title="Revenue Through Customer Made Forms" total={234} color="info" icon={'emojione-monotone:money-bag'} />
          </Grid>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {text}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repudiandae!
            </Typography>
          </Box>
          </Modal>

        </Grid>
      </Container>
    </Page>
  );
}
