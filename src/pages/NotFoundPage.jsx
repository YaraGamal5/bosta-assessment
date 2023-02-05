import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return <Typography align="center">{t("notFoundPageMessage")}</Typography>;
};

export default NotFoundPage;
