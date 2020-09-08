import { StyleProvider } from "../src/Theme";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <StyleProvider>
      <Story />
    </StyleProvider>
  ),
];
