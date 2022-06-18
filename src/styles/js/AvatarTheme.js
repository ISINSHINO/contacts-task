import React from 'react';
import {createTheme} from "@mui/material/styles";


const AvatarTheme = createTheme({
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    "@media (max-width: 1030px)": {
                        width: "95%",
                        height: "95%"
                    },
                    "@media (max-width: 950px)": {
                        width: "90%",
                        height: "90%"
                    },
                },
            },
        },
    },
});

export default AvatarTheme;