import classes from "./Load.module.css";

const Load = () => {
  return (
    <div
      aria-label="Orange and tan hamster running in a metal wheel"
      role="img"
      className={classes["wheel-and-hamster"]}
    >
      <div className={classes["wheel"]}></div>
      <div className={classes["hamster"]}>
        <div className={classes["hamster__body"]}>
          <div className={classes["hamster__head"]}>
            <div className={classes["hamster__ear"]}></div>
            <div className={classes["hamster__eye"]}></div>
            <div className={classes["hamster__nose"]}></div>
          </div>
          <div className={classes["hamster__limb--fr"]}></div>
          <div className={classes["hamster__limb--fl"]}></div>
          <div className={classes["hamster__limb--br"]}></div>
          <div className={classes["hamster__limb--bl"]}></div>
          <div className={classes["hamster__tail"]}></div>
        </div>
      </div>
      <div className={classes["spoke"]}></div>
    </div>
  );
};

export default Load;
