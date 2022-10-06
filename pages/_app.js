import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import React from "react";
import Router from "next/router";

const progressBar = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-100",
  delay: 200,
});
Router.events.on("routeChangeStart", progressBar.start);
Router.events.on("routeChangeComplete", progressBar.finish);
Router.events.on("routeChangeError", progressBar.finish);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
