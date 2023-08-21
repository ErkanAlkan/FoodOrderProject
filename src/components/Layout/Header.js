import { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Ravenna Meals</h1>
            <HeaderCartButton onCartButtonClick = {props.onCartButtonClick}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImg} alt="A table of food" ></img>
        </div>
    </Fragment>
}

export default Header;