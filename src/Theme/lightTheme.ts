import { StyledComponentsTheme } from "../@types/StyledComponentsTheme";

export const lightTheme: StyledComponentsTheme = {
  colors: {
    mainBkg: "#FFFFFF",
    primary: "#545DAD",
    secondary: "#B0B6EC",
    accent: "#D37A7E",
    deactive: "#BCBCBC",
    l1Container: "#F4F4F6",
    l2Container: "#FBFBFB",
    profit: "#27AE60",
    loss: "#EB5757",
    zeroNet: "#4F4F4F",
  },
  fonts: ["Nunito", "Montserrat"],
  typographs: {
    "main-title": `
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 26px;
            line-height: 32px;
        `,
    head1: `
            font-family: Nunito;
            font-style: normal;
            font-weight: bold;
            font-size: 26px;
            line-height: 35px;
        `,
    head2: `
            font-family: Nunito;
            font-style: normal;
            font-weight: bold;
            font-size: 22px;
            line-height: 30px;
        `,
    head3: `
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 23px;
            line-height: 31px;
        `,
    "primary-text": `
            font-family: Nunito;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
        `,
    "secondary-text": `
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 25px;
        `,
  },
};
