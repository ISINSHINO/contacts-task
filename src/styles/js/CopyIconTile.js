import React from 'react';
import {createTheme} from "@mui/material/styles";


const CopyIconTile = createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    padding: "0 4px",
                    width: "0.7em",
                    height: "0,7em",
                    transition: "color 0.5s",
                    color: "#2aa2ff",
                    cursor: "pointer",
                    '&:hover': {
                        color: "#1976d2",
                        transition: "color 0.5s"
                    }},
            },
        },
    },
});

export default CopyIconTile;