import { mount } from "marketing/MarketingIndex";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const MarketingIndex: React.FC = () => {
  const marketingRef = useRef<null | HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(marketingRef.current!, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname }: Location) => {
        history.location.pathname !== pathname && history.push(pathname);
      },
    });

    history.listen(onParentNavigate);
  }, []);
  return <div ref={marketingRef}></div>;
};

export default MarketingIndex;
