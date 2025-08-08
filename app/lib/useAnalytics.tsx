import { useEffect } from "react";
import ReactGA from "react-ga4";

export function useAnalytics() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactGA.initialize("G-ZGYSKLH6LJ"); // Replace with your Measurement ID
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
      });
    }
  }, []); // Runs once on mount
}
