import React, { useRef, useEffect, useState } from 'react';

// modal imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from '@mui/material/Link';
// end

// eslint-disable-next-line import/no-unresolved
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import jpMap from '../../assets/img/main/jpmap.png'



mapboxgl.accessToken = 'pk.eyJ1IjoiYWFyeWFnbG9iYWwiLCJhIjoiY2wybXNydW5rMHZ0dDNicWN6OXk0OW9iYSJ9.sLWQvg-i51poM7WO4eOlqw';


const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [142.8235, 43.6203]
      },
      properties: {
        title: 'Mapbox',
        description: 'Hokaido 1, Japan'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [142.8535, 43.1203]
      },
      properties: {
        title: 'Mapbox',
        description: 'Hokaido 2, Japan'
      }
    }
  ]
};

// modal functions
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
} 
// end
export default function Mapbox() {
// modal handler
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password")
  });
};
// ends

  const mapContainer = useRef(null);
  const [markerLngLat, setMarkerLngLat] = useState([138.2529, 36.2048]);
  const [mapObject, setMap] = useState();


useEffect(() => {
  const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: markerLngLat,
    zoom: 7,
  });

  setMap(map);
  // add markers to map
  // eslint-disable-next-line no-restricted-syntax
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);

  new mapboxgl.Marker(el)
  .setLngLat(feature.geometry.coordinates)
  .addTo(map);
  el.addEventListener('click', () => 
  { 
     // eslint-disable-next-line no-alert
    //  alert("Marker Clicked.");
    handleOpen();
  }
)

}
},[]);

function setMapCenter(coords) {
  if (mapObject) {
    mapObject.setCenter(coords);
  }
}

  return (
    <>

<div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Register" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
          
          <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={12}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

  
          </TabPanel>
          <TabPanel value={value} index={1}>
           
          <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

          </TabPanel>
        </Box>
      </Modal>
    </div>

    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
    <div className="map_and_form ">

      <div className="map_search_form">
         <img src={jpMap} alt=""/>

         <a id="area_0" href="#/" onClick={() => setMapCenter([142.8635, 43.2203])}>HOKKAIDO</a>
         <a id="area_1" href="#/" onClick={() => setMapCenter([141.1500, 39.1362])}>TOHOKU</a>
         <a id="area_2" href="#/" onClick={() => setMapCenter([136.8115, 34.8586])}>CHUBU</a>
         <a id="area_3" href="#/" onClick={() => setMapCenter([139.6911, 36.4599])}>KANTO</a>
         <a id="area_4" href="#/" onClick={() => setMapCenter([133.6947, 35.0806])}>CHUGOKU</a>
         <a id="area_5" href="#/" onClick={() => setMapCenter([135.5629, 34.6413])}>KANSAI</a>
         <a id="area_6" href="#/" onClick={() => setMapCenter([134.5550, 34.0704])}>CHIGOKU</a>
         <a id="area_7" href="#/" onClick={() => setMapCenter([130.8000, 32.5900])}>KYUSYU</a>
         <a id="area_8" href="#/" onClick={() => setMapCenter([127.8056, 26.3344])}>OKINAWA</a>

      </div>          
    </div>
   
    </>
  );
}
