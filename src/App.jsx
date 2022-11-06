import { Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import Layout from "components/common/Layout";
import { gapi } from "gapi-script";
import { CLIENT_ID } from "components/Login&Logout/Login";

const Home = React.lazy(() =>
  import(
    /* webpackChunkName: "HomePage" */
    "./pages/Home"
  )
);

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
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
      </Routes>
    </Layout>
  );
}

export default App;
