import React from 'react';
import {createTheme} from "@mui/material/styles";

const fullNameTheme = createTheme({
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: "0 16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    transition: "color 0.5s",
                    cursor: "pointer",
                    textOverflow: "ellipsis",
                    overflowWrap: "break-word",
                    '&:hover': {
                        color: "#1976d2",
                        transition: "color 0.5s"
                    },
                    "@media (max-width: 1030px)": {
                        fontSize: 12,
                    },
                    "@media (max-width: 950px)": {
                        padding: 10,
                        fontSize: 11,
                    },
                    "@media (max-width: 830px)": {
                        padding: 9,
                        fontSize: 10,
                    },
                    "@media (max-width: 724px)": {
                        padding: 5,
                        fontSize: 8,
                    }}
            },
        },
    },
});

export default fullNameTheme;