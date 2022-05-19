import React from "react";
import "./index.scss";
import { Cover } from "./components/Cover";
import { Menu } from "./components/Menu";
import { Description } from "./components/Description";
import { Lecturers } from "./components/Lecturers";
import { Wrap } from "./components/Wrap";
import { Campus } from "./components/Campus";
export function App() {
  return (
    <div>
      <Menu />
      <Cover />
      <Description />
      <Lecturers />
      <Wrap />
      <Campus />
    </div>
  );
}
