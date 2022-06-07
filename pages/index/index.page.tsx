import React from "react";
import Logo from "../../renderer/components/ui/Logo";
import { Counter } from "./Counter";

export { Page };

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
          <Logo />
        </li>
      </ul>
    </>
  );
}
