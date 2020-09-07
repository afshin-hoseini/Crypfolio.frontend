import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import React from 'react';
import { GlobalStyleInstaller } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./lightTheme";
import { GetStyle } from "../utils";

let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container!);
  container!.remove();
  container = null;
});

it("Checks for GlobalStyleImplementaion", ()=>{

    // Mounts GlobalStyleInstaller inside a ThemeProvider
    act(()=>{
        render((
            <ThemeProvider theme={lightTheme}>
              <GlobalStyleInstaller/>
            </ThemeProvider>
          ), container)
    });

    expect(GetStyle(".typograph-main-title,.text-main-title")).not.toBeUndefined();
    expect(GetStyle(".typograph-head1,.text-head1")).not.toBeUndefined();
    expect(GetStyle(".typograph-head2,.text-head2")).not.toBeUndefined();
    expect(GetStyle(".typograph-head3,.text-head3")).not.toBeUndefined();
    expect(GetStyle(".typograph-primary-text,.text-primary-text")).not.toBeUndefined();
    expect(GetStyle(".typograph-secondary-text,.text-secondary-text")).not.toBeUndefined();
})