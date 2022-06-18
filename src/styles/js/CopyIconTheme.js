import React from 'react';
import {createTheme} from "@mui/material/styles";


const CopyIconTheme = createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    transition: "color 0.5s",
                    color: "#2aa2ff",
                    cursor: "pointer",
                    '&:hover': {
                        color: "#1976d2",
                        transition: "color 0.5s"
                    },
                    "@media (max-width: 1030px)": {
                        fontSize: 13,
                    },
                    "@media (max-width: 950px)": {
                        fontSize: 12,
                    },
                    "@media (max-width: 830px)": {
                        fontSize: 11,
                    },
                    "@media (max-width: 724px)": {
                        fontSize: 10,
                    }
                },
            },
        },
    },
});

export default CopyIconTheme;