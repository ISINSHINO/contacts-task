import React from 'react';
import {Grid, Pagination} from "@mui/material";

const CustomPagination = ({page, pageQty, setPage}) => {
    return (
        <div>
            <Grid container
                  justify={"center"}
                  alignItems={"flex-end"}
                  direction={"column"}
            >
                <Pagination
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    count={pageQty}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                />
            </Grid>
        </div>
    );
};

export default CustomPagination;