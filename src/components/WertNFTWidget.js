import React, { useEffect } from 'react';
import { WidgetInitializer } from '@wert-io/widget-initializer';

const WertNFTWidget = ({ apiKey }) => {
  useEffect(() => {
    const widgetInitializer = new WidgetInitializer(apiKey);
    widgetInitializer.init();
  }, [apiKey]);

  return (
    <div>
      <div className="wert-nft-module" data-type="grid" data-width="100%"></div>
    </div>
  );
};

export default WertNFTWidget;
