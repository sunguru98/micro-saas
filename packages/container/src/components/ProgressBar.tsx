import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    bar: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

const ProgressBar: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.bar}>
      <LinearProgress />
    </div>
  );
};

export default ProgressBar;
