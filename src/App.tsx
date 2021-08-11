import { useEffect, useRef } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import ScrollReveal from "@/utils/ScrollReveal";
// Views
import Home from "@/views/Home";
import Quiz from "@/views/Quiz";
import Result from "@/views/Result";
import { ChildProps } from "@/utils/ScrollReveal";

const App = () => {
  const childRef = useRef<ChildProps>(null);
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current?.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <ScrollReveal ref={childRef}>
      <Switch>
        <Route exact={true} path="/penetrate/">
          <Home />
        </Route>
        <Route exact={true} path="/penetrate/quiz">
          <Quiz />
        </Route>
        <Route exact={true} path="/penetrate/result">
          <Result />
        </Route>
      </Switch>
    </ScrollReveal>
  );
};

export default App;
