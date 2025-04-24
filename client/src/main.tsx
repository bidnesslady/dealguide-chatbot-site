import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const Root = () => {
  useEffect(() => {
    window.chatbaseConfig = {
      chatbotId: "5j0h-WwAv-Xyrejbc-yR-QPag",
    };

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.id = "chatbase-script";

    document.body.appendChild(script);
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);


