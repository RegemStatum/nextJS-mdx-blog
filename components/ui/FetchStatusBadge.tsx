import React, { FC } from "react";
import Badge from "./Badge";

interface FetchStatusBadgeProps {
  status: "loading" | "success" | "error";
  errorMsg?: string;
}

const FetchStatusBadge: FC<FetchStatusBadgeProps> = ({ status, errorMsg }) => {
  if (status === "loading") {
    return <Badge name="Loading" textClr="#014D40" containerClr="#27AB83" />;
  }
  if (status === "success") {
    return <Badge name="Success" textClr="#035388" containerClr="#2BB0ED" />;
  }
  if (status === "error") {
    return (
      <Badge
        name={errorMsg || "Error"}
        textClr="#610316"
        containerClr="#E12D39"
      />
    );
  }
  return <></>;
};

export default FetchStatusBadge;
