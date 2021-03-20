import { Divider } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme)=> ({
        hr: {
            clear: "both",
            borderTop: "1px solid #e8e8e8",
            marginBottom: "30px",
            marginTop: "30px",
            height: 0,
        },
        footerSecTitle:{
            fontSize: "1.26667em",
            fontFamily: [
                'Times New Roman',
                'sans-serif',
              ].join(','),
            fontWeight: 600,
            fontStyle: "normal",
            textRendering: "optimizeLegibility",
            marginBottom: "1em",
            lineHeight: 1.6, 
            color: "#333", 
        },
        footermenu: {
            color: '#333',
            listStyleType: "none",
            fontSize: "14px",
            fontFamily: [
                'Helvetica',
                'sans-serif',
              ].join(','),
            lineHeight: 1.6,
            marginTop: 0,
            paddingLeft: 0,
            marginLeft: 0,
           
      
        }, 
        a:{
            textDecoration: "none",
            color: "#333"
        }, 
        newsletterLabel: {
            marginTop: "15px",
            marginBottom: "15px",    
        },
        rte: {
            marginBottom: "15px",
            color: '#333',
            fontSize: "14px",
            fontFamily: [
                'Helvetica',
                'sans-serif',
              ].join(','),
              lineHeight: 1.6,
        },
        inputGroup: {
            position: "relative",
            display: "table",
            width: "100%",
            borderCollapse: "separate",
            color: "#333",
            fontSize: "15px",
            fontFamily: [
                'Helvetica',
                'sans-serif',
              ].join(','),
              lineHeight: 1.6,
        },
        inputgroupField:{
            width: "100%",
            height: "48px",
            fontSize: "16px",
            fontWeight: 400,
            paddingTop: 0,
            paddingBottom: 0,
            display: "table-cell",
            verticalAlign: "middle",
            margin: 0,
            borderRadius: 0,
            maxWidth: "100%",
            backgroundColor: "#f4f4f4",
            border: 0,
            paddingLeft: "8px",
            WebkitFontSmoothing: "antialiased",
            WebkitTextSizeAdjust: "100%",
            font: "inhert",

        },
        inputGroupBtn:{
            whiteSpace: "nowrap",
            width: "1%",
            display: "table-cell",
            verticalAlign: "middle",
            margin: 0,

        },
        btn: {
            height: "48px",
            paddingTop: 0,
            paddingBottom: 0,
            userSelect: "none",
            appearance: "none",
            display: "inline-block",
            width: "auto",
            textAlign: "center",
            verticalAlign: "center",
            whiteSpace: "nowrap",
            cursor: 'pointer',
            textTransform: "uppercase",
            minHeight: "44px",
            lineHeight: 1.9,
            backgroundColor: "#333",
            color: "#fff",
            position: "relative",
            paddingRight: "15px",
            paddingLeft: "15px",
            borderRadius: 0,
            fontSize: "14px",
            letterSpacing: "1px",
            border: 0,
            fontFamily: [
                'Helvetica',
                'sans-serif',
              ].join(','),
            fontWeight: 400,
            WebkitFontSmoothing: "antialiased",
            WebkitTextSizeAdjust: "100%",
            overflow: "visible",
            margin: 0,
            wordSpacing: "normal"


        }
        
})
);
const Footer = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Divider classes={{root: classes.hr}}/>
            <footer>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <h3 className={classes.footerSecTitle}>Links</h3>
                        <ul className={classes.footermenu}>
                            <li>
                                <a className={classes.a} href="#">Home</a>
                            </li>
                            <li>
                                <a className={classes.a} href="#">About Us</a>
                            </li>
                            <li>
                                <a className={classes.a} href="#">Shop</a>
                            </li>
                            <li>
                                <a className={classes.a} href="#">Contact Us</a>
                            </li>
                            
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{float:"left", paddingLeft: "30px", }}>
                            <h3 className={classes.footerSecTitle}>Be in the know</h3>
                            <form  accept-charset="UTF-8" className="contactForm">

                            <label htmlFor="NewsletterEmail" className="newsletterLabel">
                            
                                <div className={classes.rte}><p>Promotions, new products and sales. Directly to your inbox.</p></div>
                            
                            </label>

                            <div className="inputGroup">
                            <div class="inputGroupBtn">
                            <Grid item container direction="row">
                                <Grid item xs={8}>
                                <input type="email" value="" placeholder="Your email" name="contact[email]" id="NewsletterEmail" className={classes.inputgroupField} autocorrect="off" autocapitalize="off" />

                                </Grid>
                                <Grid item xs={4}>
                                <button type="submit" className={classes.btn} name="commit" id="Subscribe">
                                <span>Subscribe</span>
                                
                                </button>
                                </Grid>
                            </Grid>
                            </div>

                   
                            </div>
                        
                        </form>
                    </Grid>

                </Grid>
                <Divider classes={{root: classes.hr}}/>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item xs={6}>
                        <small style={{color: "#333",}}>Copyright © 2021, <a className={classes.a} href="http://www.ecorfy.com" target="_blank">e-commerce </a>
                            <a className={classes.a} href="#">Powered by ECorfy</a>
                        </small>
                    </Grid>
                    <Grid item xs={6}>
                            <Grid item container
                                justify="flex-end"
                                alignItems="flex-end"
                                style={{maxWidth: "150px", marginLeft: "auto", marginBottom: "30px"}}
                                xs={12}
                            >
                                <Grid item  >
                                
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFh49A89q3Sd43cis6EdzgXLT3mVdNxpMT6ByP2KSdvTg-FcQ70pNOaeqXEi7_mAt4w&usqp=CAU" alt="Ecorfy" width="100%"  />

                                </Grid>

                            </Grid>
                    </Grid>

                </Grid>
            </footer>
        </React.Fragment>
    )
}

export default Footer
