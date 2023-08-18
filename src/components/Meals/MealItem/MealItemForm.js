import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input lable="Amount" input= {{
        id: "Amount" + props.id,
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1"
      }}/>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
