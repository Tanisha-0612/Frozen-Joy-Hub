import { Fragment } from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) =>{
 
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Tanisha's Frozen Joy Hub</h1>
               <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                
                <div className={classes['main-inner-div']}><img src='../../assets/ice-cream'/></div>
            </div>
        </Fragment>
    )
}

export default Header;