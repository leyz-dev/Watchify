"use client";
import { useEffect } from "react";

export default function PromoRedirect() {
  useEffect(() => {
    const sourceId = "watchify"; // customize this for tracking
    const redirectUrl = `https://n91hg.com/4/9676208?var=${sourceId}`;
    window.location.href = redirectUrl;
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-white text-xl">
      Redirecting you to our special offer...
    </div>
  );
}
