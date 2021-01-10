import React, { useEffect, useRef } from "react";
import { mount } from "dashboard/DashboardIndex";
import { RouteComponentProps } from "react-router-dom";

const DashboardIndex: React.FC<RouteComponentProps & { signedIn: boolean }> = ({
  signedIn,
  history,
}) => {
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    dashboardRef.current && mount(dashboardRef.current);
  }, []);
  return <div ref={dashboardRef}></div>;
};

export default DashboardIndex;
