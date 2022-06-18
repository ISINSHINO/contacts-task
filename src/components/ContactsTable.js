import React from 'react';
import {
    Avatar,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    ThemeProvider,
} from "@mui/material";
import normalizeData from "../functions/NormalizeData";
import '../styles/css/ContactTable.css'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Copy from "./Copy";
import fullNameTheme from "../styles/js/FullNameTheme";
import copyIconTheme from "../styles/js/CopyIconTheme";
import TableHeadTheme from "../styles/js/TableHeadTheme";
import avatarTheme from "../styles/js/AvatarTheme";


const ContactsTable = ({dataContacts, page, contactsOnPage, index, setIndex}) => {

    const handleChangeSort = () => {
        if (index + 1 === 3) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <div>
            <TableContainer component={Paper} sx={{ marginTop: 3}}>
                <ThemeProvider theme={TableHeadTheme}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: "4%"}}>Avatar</TableCell>
                            <ThemeProvider theme={fullNameTheme}>
                                <TableCell onClick={handleChangeSort} align="center">
                                    Full name
                                    <div className="arrow-container">
                                        <ArrowDropUpIcon color={index === 1? "" : "disabled"} fontSize="small" viewBox="0 -7 24 24"/>
                                        <ArrowDropDownIcon color={index === 2? "" : "disabled"} fontSize="small" viewBox="0 7 24 24"/>
                                    </div>
                                </TableCell>
                            </ThemeProvider>
                            <TableCell sx={{ width: "17%"}} align="left">Birthday</TableCell>
                            <TableCell sx={{ width: "18%"}} align="left">Email</TableCell>
                            <TableCell sx={{ width: "14%"}} align="left">Phone</TableCell>
                            <TableCell sx={{ width: "17%"}} align="left">Location</TableCell>
                            <TableCell sx={{ width: "10%"}} align="right">Nationality</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataContacts.slice(((page * contactsOnPage) - contactsOnPage), (page * contactsOnPage)).map((row) => (
                            <TableRow key={row.login.uuid}>
                                <TableCell>
                                    <ThemeProvider theme={avatarTheme}>
                                        <Avatar alt={row.name.first} src={row.picture.thumbnail} />
                                    </ThemeProvider>
                                </TableCell>
                                <TableCell className="table__name" align="left">
                                    {normalizeData(row.name, "name")}
                                </TableCell>
                                <TableCell align="left">
                                    {normalizeData(row.dob.date, "date")}
                                    <br/>
                                    {row.dob.age} years
                                </TableCell>
                                <TableCell align="left">
                                    <div className="table__copy-cell">
                                        <Copy theme={copyIconTheme} data={row.email}/>
                                        <a href={`mailto:${row.email}`}>{row.email}</a>
                                    </div>
                                </TableCell>
                                <TableCell align="left">
                                    <div className="table__copy-cell">
                                        <Copy theme={copyIconTheme} data={row.phone}/>
                                        <a href={`tel:${row.phone}`}>{row.phone}</a>
                                    </div>
                                </TableCell>
                                <TableCell align="left">
                                    <div className="table__copy-cell">
                                        <Copy theme={copyIconTheme} data={normalizeData(row.location, "locationToCopy")}/>
                                        <div className="table__location">
                                            <b>{normalizeData(row.location, "location")[0]}</b>
                                            {normalizeData(row.location, "location").slice(1)}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <p style={{
                                        display: 'inline-block',
                                        padding: "1px 5px",
                                        color: `${normalizeData(row.nat, "nationalColor").color}`,
                                        border: `1px solid ${normalizeData(row.nat, "nationalColor").borderColor}`,
                                        backgroundColor: `${normalizeData(row.nat, "nationalColor").bgColor}`,
                                        textAlign: "center",
                                        borderRadius: 3
                                    }}>
                                        {normalizeData(row.nat, "nationality")}
                                    </p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ThemeProvider>
            </TableContainer>
        </div>
    );
};

export default ContactsTable;