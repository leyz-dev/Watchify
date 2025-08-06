"use client";

import { useEffect } from "react";

export default function ClickAdScript() {
  useEffect(() => {
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
