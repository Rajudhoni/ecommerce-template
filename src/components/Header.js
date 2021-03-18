import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ElevationScroll(props) {
    const { children } = props;
  
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
      },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "0.1em",
        [theme.breakpoints.down("md")]: {
          marginBottom: ".1em",
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom: "0.1em",
        },
      },
    appbar: {
        backgroundColor: "#fff",
        zIndex: 1301,
        borderBottom: "1px solid #ebebeb"
        // boxShadow: "14px 14px 40px 0 rgb(118 126 173 / 8%)",
      },
      toolbar: {
        display: "flex",
        marginRight: "auto",
        marginLeft: "auto",
        // paddingTop: "15px",
        // paddingBottom: "15px",
        paddingRight: "25px",
        paddingLeft: "25px",
        height: "100%",
        width: "100%",
        // maxWidth: "1150px",

      },
      logo: {
        height: "1.9em",
        [theme.breakpoints.down("md")]: {
          height: "1.9em",
        },
        [theme.breakpoints.down("xs")]: {
          height: "1.9em",
        },


        
      },
      logoContainer: {
        // marginRight: "25px",
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
        },
        position: "static",
        left: 0,
        top: 0,
        right: "auto",
        bottom: 0,
        marginLeft: "30px",
        [theme.breakpoints.down("sm")]: {
          marginLeft: "-10px",
        },
       
      },
      customTabRoot: {
        color: "#606060",
        textAlign: "center",
        marginTop: "15px",
        marginBottom: "15px",
        marginRight: "180px"
      },
      customTabIndicator: {
          backgroundColor: "#606060"
       
      },
      tab: {
        fontFamily: [
          'DM Sans',
          'sans-serif',
        ].join(','),
        textTransform: "none",
        fontWeight: "400",
        fontSize: "14px",
        minWidth: "5px",
        marginLeft: "5px",
        lineHeight: 1.5
      },
      navright: {
        justifySelf:"flex-start"
    
        // WebkitBoxPack: "center",
        // WebkitBoxAlign: "center"
      },   
      icon: {
        color: "#3a3a3a",
        fontSize: "1em"

      },
      drawer: {
        backgroundColor: "#fff",
        top: "50px",
        zIndex: 1300,
      },
      drawerItem: {
        color: "black",
        paddingTop: "10px",
        paddingRight: "30px",
        paddingBottom: "10px",
        paddingLeft: "16px",
        fontSize: "16px",
        color: "#3a3a3a"

      },
})
);
  
const Header = ()=>  {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState(0);
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
  


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const tabs = (
      <React.Fragment>
                       <Grid justify={"center"} alignItems={"center"} container>
       <Grid style={{ justifySelf: "flex-start" }} item>
       {/* <Button
       //   component={Link}
       //   to="/"
         className={classes.logoContainer}
         
         disableRipple
       >
         <img alt="logo" src="https://cdn.shopify.com/s/files/1/0260/1061/5830/files/store-logo_300x300.png?v=1583938824"  className={classes.logo} />
       </Button> */}
       </Grid>
       <Grid item>
         <Grid container justify={"center"}>
           
           <Tabs
               value={value}
               onChange={handleChange}
               centered
               aria-label="Navigation Tabs"
               classes={{
                root: classes.customTabRoot,
                indicator: classes.customTabIndicator,
              }}
              
           >
               <Tab label="Home" className={classes.tab} />
               <Tab label="Shop" className={classes.tab}/>
               <Tab label="Offers" className={classes.tab}/>
               <Tab label="About" className={classes.tab}/>
               <Tab label="Contact" className={classes.tab}/>
        
           </Tabs>
          
         </Grid>
    
       </Grid>
       

       
     </Grid>
     <Grid style={{ justifySelf: "flex-start", marginLeft: "auto" }} item>
         <Grid item container direction="row"
                justify="flex-start"
                alignItems="center"
                style={{marginRight:"100px"}}>
                 
                 <IconButton aria-label="add to shopping cart">
                    <SearchIcon />
                </IconButton>
                <IconButton  aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
         </Grid>
       </Grid>
      </React.Fragment>
    )


    const drawer = (
      <React.Fragment>
                <SwipeableDrawer
                  disableBackdropTransition={!iOS}
                  disableDiscovery={iOS}
                  open={openDrawer}
                  onClose={() => setOpenDrawer(false)}
                  onOpen={() => setOpenDrawer(true)}
                  classes={{ paper: classes.drawer }}
                  anchor="top"
                >
                   <List disablePadding>
                   <ListItem
                      divider
                      // component={Link}
                      // to="#"
                      onClick={() => {
                        setOpenDrawer(false);
                       
                      }}
                    >
                       <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                           Home
                      </ListItemText>
                    </ListItem>


                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                      onClick={() => {
                        setOpenDrawer(false);
                       
                      }}
                    >
                       <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                         Shop
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                      onClick={() => {
                        setOpenDrawer(false);
                       
                      }}
                    >
                       <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                           Offer
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                      onClick={() => {
                        setOpenDrawer(false);
                       
                      }}
                    >
                       <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                           About
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                      onClick={() => {
                        setOpenDrawer(false);
                       
                      }}
                    >
                       <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                           Contact
                      </ListItemText>
                    </ListItem>

                   </List>

            </SwipeableDrawer>

              <Grid style={{ justifySelf: "flex-start", marginLeft: "auto" }} item>
         <Grid item container direction="row"
                justify="flex-start"
                alignItems="center"
                style={{marginRight:"30px"}}>
                 
                 <IconButton aria-label="add to shopping cart" className={classes.icon}>
                    <SearchIcon  />
                </IconButton>
                <IconButton  aria-label="add to shopping cart" className={classes.icon}>
                    <AddShoppingCartIcon />
                </IconButton>

                <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
              >
                <MenuIcon className={classes.drawerIcon} />
              </IconButton>
         </Grid>
       </Grid>
      </React.Fragment>
    )
  return (
    <nav className={classes.root}>
    <ElevationScroll>
 <AppBar  position="fixed" classes={{root: classes.appbar}}>
   <Toolbar style={{ alignItems: "center", justifyContent: "center" }} disableGutters classes={{ root: classes.toolbar }}>
   <Button
       //   component={Link}
       //   to="/"
         className={classes.logoContainer}
         
         disableRipple
       >
         <img alt="logo" src="https://cdn.shopify.com/s/files/1/0260/1061/5830/files/store-logo_300x300.png?v=1583938824"  className={classes.logo} />
       </Button>
       {matches ? drawer : tabs}
   </Toolbar>
 </AppBar>
 </ElevationScroll>
 <div className={classes.toolbarMargin} />
</nav>
  );
}


export default Header;