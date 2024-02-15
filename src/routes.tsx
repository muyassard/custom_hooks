import * as React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import {
  ClickAway,
  Counter,
  Favicon,
  Hover,
  KeyPress,
  List,
  LocalStorage,
  Previous,
  State,
  TimeOut,
  Memo,
  Callback1,
  Request,
} from "./hooks";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="hooks">
        <Route path="counter" element={<Counter />}></Route>
        <Route path="clickAway" element={<ClickAway />}></Route>
        <Route path="favicon" element={<Favicon />}></Route>
        <Route path="hover" element={<Hover />}></Route>
        <Route path="previous" element={<Previous />}></Route>
        <Route path="timeOut" element={<TimeOut />}></Route>
        <Route path="list" element={<List />}></Route>
        <Route path="keyPress" element={<KeyPress />}></Route>
        <Route path="localStorage" element={<LocalStorage />}></Route>
        <Route path="state" element={<State />}></Route>
        <Route path="memo" element={<Memo />}></Route>
        <Route path="request" element={<Request />}></Route>
        <Route
          path="callback"
          element={<Callback1 onTimerTick={() => {}} />}
        ></Route>

        <Route path="*" element={<Navigate to="/hooks/clickAway" />}></Route>
      </Route>
      <Route index path="*" element={<Navigate to="/hooks/counter" />}></Route>
    </Switch>
  );
};

export default Routes;
