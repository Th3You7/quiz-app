import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";

const Home = lazy(() => import("./pages/Home"));
const Test = lazy(() => import("./pages/Test"));
const Result = lazy(() => import("./pages/Result"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>loadin..</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
          <Route path="/result" component={Result} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
