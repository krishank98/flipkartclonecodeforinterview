import { AppBar, Toolbar, makeStyles} from '@material-ui/core';

const  userStyle= makeStyles({
    header:{
        background:"ffff"
    }
})
const Header = () =>{
    return( 
    <AppBar>
        <Toolbar>

        </Toolbar>
    </AppBar>)

} 

export default Header;