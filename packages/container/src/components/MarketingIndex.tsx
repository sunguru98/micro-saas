import { mount } from "marketing/MarketingIndex";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const MarketingIndex: React.FC = () => {
  const marketingRef = useRef<null | HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    mount(marketingRef.current!, {
      onNavigate: ({ pathname }: Location) => {
        history.location.pathname !== pathname && history.push(pathname);
      },
    });
  }, []);
  return <div ref={marketingRef}></div>;
};

export default MarketingIndex;
