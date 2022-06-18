import {createTheme} from "@mui/material/styles";

const CustomBreakpoints = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1300,
            xl: 1536,
        },
    },
});

export default CustomBreakpoints;