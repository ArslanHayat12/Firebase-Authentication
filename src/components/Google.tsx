import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}
export const Google = (props: any) => {
  useEffect(() => {
    if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className={`${props.className} adsbygoogle`}
      style={props.style}
      data-ad-client={props.client}
      data-ad-slot={props.slot}
      data-ad-layout={props.layout}
      data-ad-layout-key={props.layoutKey}
      data-ad-format={props.format}
      data-full-width-responsive={props.responsive}
    ></ins>
  );
};
