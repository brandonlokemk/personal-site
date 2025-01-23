"use client"
import { useEffect } from "react";

export default function ScrollToTopListener() {
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled all the way to the top
      if (window.scrollY === 0) {
        // Add "#hero" to the URL if it’s not already there
        if (!window.location.hash.includes("#hero")) {
          window.history.replaceState(null, "", "#hero");
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}
