import {createTheme} from "@mui/material/styles";

const GridNoWrap = createTheme({
    components: {
        MuiGrid: {
            styleOverrides: {
                root: {
                    "@media (max-width: 460px)": {
                        flexWrap: "nowrap",
                    },
                },
            },
        },
    },
});

export default GridNoWrap;