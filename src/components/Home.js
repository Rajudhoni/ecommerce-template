import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Divider from '@material-ui/core/Divider';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Footer from './Footer';

const useStyles = makeStyles((theme)=> ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "1em",
        [theme.breakpoints.down("md")]: {
          marginBottom: "1em",
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom: "1em",
        },
      },
    searchbar: {
       color: "#333",
       fontSize: '15px',
       fontWeight: 400,
       lineHeight: 1.6,
     
      

    },

    socialLinks:{
        paddingLeft: 0,
        marginLeft: 0,
        "& li": {
            display: "inline",
            padding: '10px'
            
        }
    },
    socialIcon: {
        color: "#333",
    
    }, 
    listItem: {
        fontSize: "16px",
        color: "#333",
        lineHeight: 1.6
    },
    sidenavlinkActive: {
        fontWeight: 700,
        fontSize: "16px",
        color: "#333",
        lineHeight: 1.6
    },
    mainContent: {
        paddingLeft: "30px"
    }, 
    mainh2:{
        marginTop: "-1px",
        fontSize: '1.63333em',
        fontWeight: 400,
        lineHeight: 1.4,
        color: "#333",
        fontFamily: [
            'Times New Roman',
            'sans-serif',
          ].join(','),
    }, 
    maingridItem: {
        marginBottom: "30px",
        paddingLeft: "20px"
    }, 
    productimage: {
        paddingTop: "100.0%", 
        marginBottom: "10px",
    }, 
    productTitle: {
        fontSize: "16.5px",
        fontFamily: [
            'Times New Roman',
            'sans-serif',
          ].join(','),
        fontStyle: "normal",
        textDecoration: "optimizeLegibility",
        textAlign: "center !important",
        "& a": {
          textDecoration: "none",
          color: "#333"
        }
        
    },
    productPrice:{
      height: "1px",
      width: "1px",
      margin: "-1px",
      overflow: "hidden",
    }
    
}))

const Home = () => {
    const classes = useStyles();
    
    return (
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
          {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
          {/* <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            >
                <Grid item xs={6}>
                    <Grid item container direction="row">
                        <Grid item xs={2}>
                        <IconButton aria-label="search store" className={classes.searchbar}>
                            <SearchIcon  />
                        </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                        <TextField id="Search " label="Search" />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={6}>
                <Grid item container direction="row" justify="flex-end">
                        <Grid item xs={2}>
                            <Grid item container justify="flex-end">
                                <Grid item>
                                                                      
                            <IconButton aria-label="shop cart"  className={classes.searchbar}>
                                <ShoppingCartIcon  />
                            
                                </IconButton> 
                         
                                </Grid>
                            </Grid>

                          
                        </Grid>
                        <Grid item>
                        <p>Cart(0)</p>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
            <Divider  classes={{root: classes.divider}}/>
            <div className={classes.toolbarMargin} /> */}

            {/* Home page container */}
            <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            >
                <Grid item xs={2} >
                <Divider/>
                <List disablePadding>
                   <ListItem
                      divider
                      // component={Link}
                      // to="#"
                    
                    >
                       <ListItemText
                            className={classes.sidenavlinkActive}
                            disableTypography
                          >
                           Home
                      </ListItemText>
                    </ListItem>


                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                     
                    >
                       <ListItemText
                            className={classes.listItem}
                            disableTypography
                          >
                         Accessories
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                      
                    >
                       <ListItemText
                            className={classes.listItem}
                            disableTypography
                          >
                           Denim
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                      
                    >
                       <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                          FootWear
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                     
                    >
                       <ListItemText
                            className={classes.listItem}
                            disableTypography
                          >
                           Jeans
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                     
                    >
                       <ListItemText
                            className={classes.listItem}
                            disableTypography
                          >
                           Outerwear
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                     
                    >
                       <ListItemText
                            className={classes.listItem}
                            disableTypography
                          >
                           Pants
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                     
                    >
                       <ListItemText
                            className={classes.listItem}
                            disableTypography
                          >
                           Shirts
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      divider
                      // component={Link}
                      // to="#"
                     
                    >
                       <ListItemText
                            className={classes.listItem}
                            disableTypography
                          >
                           T-Shirts
                      </ListItemText>
                    </ListItem>

                   </List>
                   <ListItem
                      divider
                      // component={Link}
                      // to="#"
                     
                    >
                       <ListItemText
                            className={classes.listItem}
                            disableTypography
                          >
                           Shorts
                      </ListItemText>
                    </ListItem>

                    <ul className={classes.socialLinks}>
                        <li>
                            <a href="#">
                            <FacebookIcon className={classes.socialIcon} />
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                
                            <TwitterIcon className={classes.socialIcon} />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                                
                            <InstagramIcon className={classes.socialIcon} />
                        </a>
                        </li>

                    </ul>

                </Grid>


                <Grid item xs={10} className={classes.mainContent}>
                <h2 className={classes.mainh2}>Featured Collection</h2>
                    <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
                    
                        <Grid item xs={12} sm={12} md={4} lg={4}className={classes.maingridItem}>
                               <Grid item container direction="column">
                                   <Grid item xs="12" style={{maxWidth: "600px", margin:  "0 auto"}}>
                                       <a href="#" className={classes.productimage}>
                                            <img style={{maxWidth: "600px", maxHeight: "600px"}} width="100%" src="https://cdn.shopify.com/s/files/1/0262/0807/5798/products/SGT-1161-Charcoal_Front_M_1296x.jpg?v=1588356227" alt="ecorfy-ecom"  />
                       
                                       </a>
                                   </Grid>
                                   <Grid item xs={12}>
                                       <div className={classes.productTitle}>
                                        <a href="#">Stealth Bomber Jacket- Navy</a>
                                        </div>
                                   </Grid>
                                   <Grid item xs={12}>
                                      <Grid item container justify="center" alignItems="center">
                                            <Grid item >
                                                    <span className={classes.productPrice}>
                                                    $1,599.95 
                                                    </span>
                                            </Grid>
                                      </Grid>
                                   </Grid>

                               </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} className={classes.maingridItem}>
                               <Grid item container direction="column">
                                   <Grid item xs="12" style={{maxWidth: "600px", margin:  "0 auto"}}>
                                       <a href="#" className={classes.productimage}>
                                            <img style={{maxWidth: "600px", maxHeight: "600px"}} width="100%" src="https://cdn.shopify.com/s/files/1/0262/0807/5798/products/SGT-1162A-Olive_Front_S_360x.jpg?v=1588356091" alt="ecorfy-ecom"  />
                       
                                       </a>
                                   </Grid>
                                   <Grid item xs={12}>
                                       <div className={classes.productTitle}>
                                        <a href="#">Storm Jacket - Olive</a>
                                        </div>
                                   </Grid>
                                   <Grid item xs={12}>
                                      <Grid item container justify="center" alignItems="center">
                                            <Grid item >
                                                    <span style={{color:"red"}} className={classes.productPrice}>
                                                    $949.95
                                                    </span>
                                            </Grid>
                                      </Grid>
                                   </Grid>

                               </Grid>
                        </Grid>
                        <Grid xs={12} sm={12} md={4} lg={4} className={classes.maingridItem}>
                               <Grid item container direction="column">
                                   <Grid item xs="12" style={{maxWidth: "600px", margin:  "0 auto"}}>
                                       <a href="#" className={classes.productimage}>
                                            <img style={{maxWidth: "600px", maxHeight: "600px"}} width="100%" src="https://cdn.shopify.com/s/files/1/0262/0807/5798/products/SGT-1154-Olive_01_360x.jpg?v=1588355917" alt="ecorfy-ecom"  />
                       
                                       </a>
                                   </Grid>
                                   <Grid item xs={12}>
                                       <div className={classes.productTitle}>
                                        <a href="#">Gulf Jacket - Olive</a>
                                        </div>
                                   </Grid>
                                   <Grid item xs={12}>
                                      <Grid item container justify="center" alignItems="center">
                                            <Grid item >
                                                    <span className={classes.productPrice}>
                                                    $1,299.95
                                                    </span>
                                            </Grid>
                                      </Grid>
                                   </Grid>

                               </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} className={classes.maingridItem}>
                               <Grid item container direction="column">
                                   <Grid item xs="12" style={{maxWidth: "600px", margin:  "0 auto"}}>
                                       <a href="#" className={classes.productimage}>
                                            <img style={{maxWidth: "600px", maxHeight: "600px"}} width="100%" src="https://cdn.shopify.com/s/files/1/0262/0807/5798/products/SGT-1156_01_360x.jpg?v=1588355792" alt="ecorfy-ecom"  />
                       
                                       </a>
                                   </Grid>
                                   <Grid item xs={12}>
                                       <div className={classes.productTitle}>
                                        <a href="#">Wolfpack Jacket - Black</a>
                                        </div>
                                   </Grid>
                                   <Grid item xs={12}>
                                      <Grid item container justify="center" alignItems="center">
                                            <Grid item >
                                                    <span className={classes.productPrice}>
                                                    $1,599.95 
                                                    </span>
                                            </Grid>
                                      </Grid>
                                   </Grid>

                               </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} className={classes.maingridItem}>
                        <Grid item container direction="column">
                                   <Grid item xs="12" style={{maxWidth: "600px", margin:  "0 auto"}}>
                                       <a href="#" className={classes.productimage}>
                                            <img style={{maxWidth: "600px", maxHeight: "600px"}} width="100%" src="https://cdn.shopify.com/s/files/1/0262/0807/5798/products/SGT-1155B_01_360x.jpg?v=1588355783" alt="ecorfy-ecom"  />
                       
                                       </a>
                                   </Grid>
                                   <Grid item xs={12}>
                                       <div className={classes.productTitle}>
                                        <a href="#">SOperator Denim Jacket - Black</a>
                                        </div>
                                   </Grid>
                                   <Grid item xs={12}>
                                      <Grid item container justify="center" alignItems="center">
                                            <Grid item >
                                                    <span className={classes.productPrice}>
                                                    $1,399.95
                                                    </span>
                                            </Grid>
                                      </Grid>
                                   </Grid>

                               </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} className={classes.maingridItem}>
                        <Grid item container direction="column">
                                   <Grid item xs="12" style={{maxWidth: "600px", margin:  "0 auto"}}>
                                       <a href="#" className={classes.productimage}>
                                            <img style={{maxWidth: "600px", maxHeight: "600px"}} width="100%" src="https://cdn.shopify.com/s/files/1/0262/0807/5798/products/SGT-1161A_01_360x.jpg?v=1588355703" alt="ecorfy-ecom"  />
                       
                                       </a>
                                   </Grid>
                                   <Grid item xs={12}>
                                       <div className={classes.productTitle}>
                                        <a href="#">Stealth Bomber Jacket - Fatigue</a>
                                        </div>
                                   </Grid>
                                   <Grid item xs={12}>
                                      <Grid item container justify="center" alignItems="center">
                                            <Grid item >
                                                    <span className={classes.productPrice}>
                                                    $1,599.95 
                                                    </span>
                                            </Grid>
                                      </Grid>
                                   </Grid>

                               </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} className={classes.maingridItem}>
                        <Grid item container direction="column">
                                   <Grid item xs="12" style={{maxWidth: "600px", margin:  "0 auto"}}>
                                       <a href="#" className={classes.productimage}>
                                            <img style={{maxWidth: "600px", maxHeight: "600px"}} width="100%" src="https://cdn.shopify.com/s/files/1/0262/0807/5798/products/SGT-1160A_01_360x.jpg?v=1588355697" alt="ecorfy-ecom"  />
                       
                                       </a>
                                   </Grid>
                                   <Grid item xs={12}>
                                       <div className={classes.productTitle}>
                                        <a href="#">Compound Denim Pullover Jacket - Acid Wash</a>
                                        </div>
                                   </Grid>
                                   <Grid item xs={12}>
                                      <Grid item container justify="center" alignItems="center">
                                            <Grid item >
                                                    <span className={classes.productPrice}>
                                                    $1,599.95 
                                                    </span>
                                            </Grid>
                                      </Grid>
                                   </Grid>

                               </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} className={classes.maingridItem}>
                        <Grid item container direction="column">
                                   <Grid item xs="12" style={{maxWidth: "600px", margin:  "0 auto"}}>
                                       <a href="#" className={classes.productimage}>
                                            <img style={{maxWidth: "600px", maxHeight: "600px"}} width="100%" src="https://cdn.shopify.com/s/files/1/0262/0807/5798/products/SGT-1159B_01_360x.jpg?v=1588355689" alt="ecorfy-ecom"  />
                       
                                       </a>
                                   </Grid>
                                   <Grid item xs={12}>
                                       <div className={classes.productTitle}>
                                        <a href="#">Navigator Parka Jacket - Olive</a>
                                        </div>
                                   </Grid>
                                   <Grid item xs={12}>
                                      <Grid item container justify="center" alignItems="center">
                                            <Grid item >
                                                    <span className={classes.productPrice}>
                                                    $1,999.95
                                                    </span>
                                            </Grid>
                                      </Grid>
                                   </Grid>

                               </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} className={classes.maingridItem}>
                        <Grid item container direction="column">
                                   <Grid item xs="12" style={{maxWidth: "600px", margin:  "0 auto"}}>
                                       <a href="#" className={classes.productimage}>
                                            <img style={{maxWidth: "600px", maxHeight: "600px"}} width="100%" src="https://cdn.shopify.com/s/files/1/0262/0807/5798/products/SGT-1159A_01_360x.jpg?v=1588355615" alt="ecorfy-ecom"  />
                       
                                       </a>
                                   </Grid>
                                   <Grid item xs={12}>
                                       <div className={classes.productTitle}>
                                        <a href="#">Navigator Parka Jacket - Black</a>
                                        </div>
                                   </Grid>
                                   <Grid item xs={12}>
                                      <Grid item container justify="center" alignItems="center">
                                            <Grid item >
                                                    <span className={classes.productPrice}>
                                                    $1,999.95 
                                                    </span>
                                            </Grid>
                                      </Grid>
                                   </Grid>

                               </Grid>
                               
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

             {/* Home page container */}

            {/* footer */}

              <Footer/>

          {/* footer */}
        </Container>
      </React.Fragment>
    )
}

export default Home
