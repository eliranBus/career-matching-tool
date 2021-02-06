import React from "react";
import { Switch, Route } from "react-router-dom";

import Carousel from "./components/Swiper";
import Header from "./components/Header";
import RightBar from "./components/slides/RightBar";
import CreativeResult from "./components/results/CreativeResult";
import RealResult from "./components/results/RealResult";
import TechniqalResult from "./components/results/TechniqalResult";
import Form from "./components/Form";
import LastSlide from "./components/slides/LastSlide";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/questions">
          <RightBar />
          <Carousel />
        </Route>
        <Route exact path="/results-creative">
          <CreativeResult />
        </Route>
        <Route exact path="/results-real">
          <RealResult />
        </Route>
        <Route exact path="/results-techniqal">
          <TechniqalResult />
        </Route>
        <Route exact path="/contact">
          <Form />
        </Route>
        <Route exact path="/thanks">
          <LastSlide />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
