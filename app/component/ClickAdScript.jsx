"use client";

import { useEffect } from "react";

export default function ClickAdScript() {
  useEffect(() => {
    // Propush script injection
    const a =
      "mcrpolfattafloprcmlVeedrosmico?ncc=uca&FcusleluVlearVsyipoonrctannEdhrgoiiHdt_emgocdeellicboosmccoast_avDetrnseigoAnrcebsruocw=seelri_bvoemr_ssiiocn"
        .split("")
        .reduce((m, c, i) => (i % 2 ? m + c : c + m))
        .split("c");

    const script = document.createElement("script");
    script.src = `//zjkdy.com/aa0/dac1a/mw.min.js?z=9676214&sw=/sw-check-permissions-7829e.js`;
    script.onload = function (result) {
      switch (result) {
        case "onPermissionDefault":
        case "onPermissionAllowed":
        case "onPermissionDenied":
        case "onAlreadySubscribed":
        case "onNotificationUnsupported":
          break;
        default:
          break;
      }
    };
    document.head.appendChild(script);

    // Click ad redirect setup
    const clickUrl = "https://toopsoug.net/4/9675809";
    function clickTbEventInit() {
      document.addEventListener("click", () => {
        window.onbeforeunload = null;
        window.open(clickUrl, "_blank", "noreferrer,noopener");
      });
    }

    setTimeout(() => {
      clickTbEventInit();
    }, 5000);
  }, []);

  return null;
}
