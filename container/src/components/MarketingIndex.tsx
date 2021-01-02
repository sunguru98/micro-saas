import { mount } from "marketing/MarketingIndex";
import React, { useRef, useEffect } from "react";

const MarketingIndex: React.FC = () => {
  const marketingRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    mount(marketingRef.current!);
  }, []);
  return <div ref={marketingRef}></div>;
};

export default MarketingIndex;
