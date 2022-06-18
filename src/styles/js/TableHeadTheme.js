import {createTheme} from "@mui/material/styles";

const TableHeadTheme = createTheme({
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    textOverflow: "ellipsis",
                    overflowWrap: "break-word",
                    "@media (max-width: 1030px)": {
                        padding: 15,
                        fontSize: 12,
                    },
                    "@media (max-width: 950px)": {
                        fontSize: 11,
                        padding: 10,
                    },
                    "@media (max-width: 830px)": {
                        fontSize: 10,
                        padding: 9,
                        "&:last-child": {
                            display: "none"
                        }
                    },
                    "@media (max-width: 724px)": {
                        padding: 5,
                        fontSize: 8,
                        overflowWrap: "anywhere"
                    }

                },
                head: {
                    padding: "0 16px",
                    height: 20,
                    "@media (max-width: 1030px)": {
                        padding: "0 14px",
                    },
                    "@media (max-width: 950px)": {
                        padding: "0 12px",
                    },
                    "@media (max-width: 830px)": {
                        padding: "0 10px",
                    },
                    "@media (max-width: 724px)": {
                        padding: "0 8px",
                        overflowWrap: "break-word"
                    }
                }
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: "#d9d9d9",
                },
            }

        },
    },
});

export default TableHeadTheme;