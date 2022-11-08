import { Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import Layout from "components/common/Layout";
import { gapi } from "gapi-script";

const Home = React.lazy(() =>
  import(
    /* webpackChunkName: "HomePage" */
    "./pages/Home"
  )
);

const NoPageFound = React.lazy(() =>
  import(
    /* webpackChunkName: "NoPageFoundPage" */
    "./pages/404"
  )
);

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading home</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading home</div>}>
              <NoPageFound />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
