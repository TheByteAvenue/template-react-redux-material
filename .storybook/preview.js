import React from "react";
import { addDecorator } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import { lightTheme } from "../src/style/theme";

addDecorator((story) => (
    <ThemeProvider theme={lightTheme}>
        <BrowserRouter>{story()}</BrowserRouter>
    </ThemeProvider>
));

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};
