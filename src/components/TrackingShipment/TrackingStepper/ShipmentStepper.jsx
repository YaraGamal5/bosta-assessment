/* eslint-disable react/prop-types */
import {
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import classNames from "classnames";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import { useTranslation } from "react-i18next";

const ShipmentStepper = ({ trackingInfo }) => {
  const { CurrentStatus, TransitEvents } = trackingInfo;
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const statusColor = theme.palette.success.main;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // iconStyle
  const useQontoStepIconStyles = makeStyles({
    active: {
      color: theme.palette.primary.main,
      transform: "scale(2,1.8)",
    },
    completed: {
      color: statusColor,
    },
  });
  // steps icon
  function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
    return (
      <div
        className={classNames(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {completed ? <CheckCircleIcon /> : <HourglassEmptyIcon />}
      </div>
    );
  }

  return (
    <Stepper
      active={true}
      orientation={isMobile ? "vertical" : "horizontal"}
      alternativeLabel={!isMobile}
      className={classes.stepperContainer}
      activeStep={
        TransitEvents?.findIndex(
          (event) => event.state === CurrentStatus?.state
        ) + 1
      }
    >
      {TransitEvents?.map((event, i) =>
        t(`tracking.${event?.state}`, "") ? (
          <Step key={i}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <Typography className={classes.labelStyle}>
                {t(`tracking.${event?.state}`, "")}
              </Typography>
              {event?.reason && (
                <Typography
                  className={classes.reasonStyle}
                  style={{ color: statusColor }}
                >
                  {event?.reason}
                </Typography>
              )}
            </StepLabel>
          </Step>
        ) : (
          <></>
        )
      )}
    </Stepper>
  );
};

export default ShipmentStepper;
const useStyles = makeStyles((theme) => ({
  stepperWrapper: {},

  stepperContainer: {
    margin: `${theme.spacing(16)} ${theme.spacing(32)} ${theme.spacing(
      0
    )} ${theme.spacing(32)}`,

    "& .MuiStepConnector-lineVertical": {},
    "& .MuiStepConnector-vertical": {
      marginLeft: "5px",
    },
    "& .MuiStepLabel-iconContainer": {
      paddingRight: "8px",
    },

    "&. MuiStepConnector-line": {},
  },
  labelStyle: {
    ...theme.typography.subtitle2,
  },
  reasonStyle: {
    ...theme.typography.subtitle2,
  },
}));
