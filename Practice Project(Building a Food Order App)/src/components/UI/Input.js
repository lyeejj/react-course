import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* input props에는 객체형태로 들어가있다 */}
      <input {...props.input} />
    </div>
  );
};
export default Input;
