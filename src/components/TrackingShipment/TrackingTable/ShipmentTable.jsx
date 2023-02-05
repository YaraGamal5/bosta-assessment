/* eslint-disable react/prop-types */
import {
  makeStyles,
  Typography,
  useTheme,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";

import React from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const ShipmentTable = ({ trackingInfo }) => {
  // eslint-disable-next-line react/prop-types
  const { TransitEvents } = trackingInfo;
  const theme = useTheme();
  const statusColor = theme.palette.success.main;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={4}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell className={classes.tableColumnCell}>
              {" "}
              {t("trackingTable.branch")}
            </TableCell>
            <TableCell className={classes.tableColumnCell}>
              {t("trackingTable.date")}
            </TableCell>
            <TableCell className={classes.tableColumnCell}>
              {t("trackingTable.time")}
            </TableCell>
            <TableCell className={classes.tableColumnCell}>
              {t("trackingTable.details")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TransitEvents?.map((event, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                <Typography className={classes.tableRowCell}>
                  {t(`dummyLocationShort`) || ""}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.tableRowCell}>
                  {t("dateShort", {
                    val: event?.timestamp ? new Date(event?.timestamp) : null,
                  })}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.tableRowCell}>
                  {t("dateTime", {
                    val: event?.timestamp ? new Date(event?.timestamp) : null,
                  })}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.tableRowCell}>
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ShipmentTable;
const useStyles = makeStyles((theme) => ({
  stepperHeaderWrapper: {},

  statusHeaderText: {
    ...theme.typography.buttonLight,
    color: theme.palette.grey[500],
  },
  dividerInSmallScreen: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    margin: `${theme.spacing(32)} ${theme.spacing(0)}`,
  },
  tableHeader: {
    backgroundColor: theme.palette.grey[100],
  },
  tableColumnCell: {
    ...theme.typography.subtitle1,
    color: theme.palette.grey[600],
  },
  tableRowCell: {
    ...theme.typography.subtitle2,
  },
  reasonStyle: {
    ...theme.typography.body2,
  },
}));
