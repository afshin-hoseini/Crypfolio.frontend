import { StyleProvider } from "../src/Theme";
import React from "react";
import { I18nextProvider } from 'react-i18next';
import '../src/I18n'

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};


export const decorators = [
    (Story) => (
        <I18nextProvider>
            <StyleProvider>
                <Story />
            </StyleProvider>
        </I18nextProvider>
    ),
];
