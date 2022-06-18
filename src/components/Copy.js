import React, {useState} from 'react';
import {Tooltip} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles'
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const copy = require('clipboard-copy')

const Copy = ({data, theme}) => {

    const [tooltipIsOpen, setTooltipIsOpen] = useState(false)

    const copyText = () => {
        copy(data)
        // navigator.clipboard.writeText(data)
        setTooltipIsOpen(!tooltipIsOpen)
        setTimeout(() => {
            setTooltipIsOpen(!!tooltipIsOpen)
        }, 2000)
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Tooltip
                    open={tooltipIsOpen}
                    title="Copied!"
                >
                    <ContentCopyIcon
                        onClick={copyText}
                        fontSize="small" color="primary"
                    />
                </Tooltip>
            </ThemeProvider>
        </div>
    );
};

export default Copy;