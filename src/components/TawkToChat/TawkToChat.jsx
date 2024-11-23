import React, { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    // Ensure Tawk_API is globally scoped
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6729d5f92480f5b4f598d104/1ibtmnm8s";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    script.onload = () => {
      // Initialize Tawk_API after script loads
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToChat;