import * as React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import {
  ClickAway,
  Counter,
  Favicon,
  Hover,
  KeyPress,
  List,
  Previous,
  TimeOut,
} from "./hooks";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="hooks">
        <Route path="clickAway" element={<ClickAway />}></Route>
        <Route path="counter" element={<Counter />}></Route>
        <Route path="favicon" element={<Favicon />}></Route>
        <Route path="hover" element={<Hover />}></Route>
        <Route path="previous" element={<Previous />}></Route>
        <Route path="timeOut" element={<TimeOut />}></Route>
        <Route path="list" element={<List />}></Route>
        <Route path="keyPress" element={<KeyPress />}></Route>

        <Route path="*" element={<Navigate to="/hooks/clickAway" />}></Route>
      </Route>
      <Route index path="*" element={<Navigate to="/hooks/counter" />}></Route>
    </Switch>
  );
};

export default Routes;
