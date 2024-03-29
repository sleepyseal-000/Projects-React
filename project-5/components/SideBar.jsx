import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import './SideBar.css'; // import the CSS file
import infoImage from '../src/assets/info.png';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      width: '50vw', // adjust the width for smaller screens
    },
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: theme.zIndex.drawer,
    [theme.breakpoints.down('sm')]: {
      width: '50vw', // adjust the width for smaller screens
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    zIndex: theme.zIndex.drawer - 1,
  },
}));

function SideBar(props) {
  const classes = useStyles();
  const shuffledData = props.weatherData.sort(() => 0.5 - Math.random());
  const randomData = shuffledData.slice(0, 3);



  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List className='list'>
          <ListItem className='list title'>
            <Typography variant="h12">
              Weather
            </Typography>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Typography variant="h6">
                Dashboard 🏠
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Typography variant="h6">
                Search 🔎
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Typography variant="h6">
                About 
                <img src={infoImage} alt="info" style={{ marginLeft: '10px', width: '20px', height:'20px'}} />
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* Your main content goes here */}
        <div className="dashboard-card-container">
          {randomData.map((data, index) => (
            <div className="card" key={index}>
              <h2>{data.city_name}</h2>
              <p>Humidity: {data.rh} %</p>
              <p>Wind: {data.wind_spd} m/s</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default SideBar;
