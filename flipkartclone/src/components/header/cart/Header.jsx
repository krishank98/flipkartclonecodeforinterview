import { AppBar, Toolbar,makestyles} from '@material-ui/core';
const userstyle=makestyles({
    header: {
        background:'#2874f0',
        height:55
    }
})

const Header = () =>{
    const classes = userstyle()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <AppBar>
            <Toolbar>
            <img src={logoURL}/>
            </Toolbar>
        </AppBar>
    )
} 

export default Header;