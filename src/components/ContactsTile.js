import React from 'react';
import {Container, Grid, Paper, ThemeProvider} from "@mui/material";
import normalizeData from "../functions/NormalizeData";
import '../styles/css/ContactTile.css'
import Copy from "./Copy";
import copyIconTile from "../styles/js/CopyIconTile";
import gridNoWrap from "../styles/js/GridNoWrap";
import customBreakpoints from "../styles/js/CustomBreakpoints";

const ContactsTile = ({dataContacts, pageTile, contactsOnPageTile}) => {

    return (
        <Container sx={{marginTop: 5, marginBottom: 3}} maxWidth="xl" component={Paper}>
            <ThemeProvider theme={customBreakpoints}>
            <Grid container sx={{paddingBottom: 3}} spacing={{ xs: 1, md: 2}} columns={{ xs: 4, md: 8, lg: 12}}>
                {dataContacts.slice(((pageTile * contactsOnPageTile) - contactsOnPageTile), (pageTile * contactsOnPageTile)).map((contact) => (
                    <Grid key={contact.login.uuid} item xs={4}  sx={{position: "relative"}}>
                        <Paper sx={{p: 0.5, maxWidth: "100%", flexGrow: 1}}>
                            <ThemeProvider theme={gridNoWrap}>
                            <Grid container spacing={1}>
                                    <Grid item >
                                        <img className="tile__avatar" alt="complex" src={contact.picture.large} />
                                    </Grid>
                                    <Grid item  xs container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <p className="tile__info">
                                                    <b>Full name: </b> {normalizeData(contact.name, "name")}
                                                </p>
                                                <p className="tile__info">
                                                    <b>Birthday: </b> {normalizeData(contact.dob.date, "date")} {contact.dob.age} years
                                                </p>
                                                <p className="tile__info">
                                                    <div className="tile__info-section">
                                                        <b>Email: </b>
                                                        <Copy theme={copyIconTile} data={contact.email}/>
                                                        <a className="tile__email" href={`mailto:${contact.email}`}>{contact.email}</a>
                                                    </div>
                                                </p>
                                                <p className="tile__info">
                                                    <div className="tile__info-section">
                                                        <b>Phone: </b>
                                                        <Copy theme={copyIconTile} data={contact.phone}/>
                                                        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                                                    </div>
                                                </p>
                                                <p className="tile__info">
                                                    <div className="tile__info-section">
                                                        <b>Location:</b>
                                                        <Copy theme={copyIconTile} data={normalizeData(contact.location, "locationToCopy")}/>
                                                        <div className="table__location">
                                                            <b>{normalizeData(contact.location, "locationTile")[0]}</b>
                                                            {normalizeData(contact.location, "locationTile").slice(1)}
                                                        </div>
                                                    </div>
                                                </p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <p  className="tile__nationality"
                                        style={{
                                        color: `${normalizeData(contact.nat, "nationalColor").color}`,
                                        border: `1px solid ${normalizeData(contact.nat, "nationalColor").borderColor}`,
                                        backgroundColor: `${normalizeData(contact.nat, "nationalColor").bgColor}`,
                                    }}>
                                        {normalizeData(contact.nat, "nationality")}
                                    </p>
                            </Grid>
                            </ThemeProvider>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            </ThemeProvider>
        </Container>
    );
};

export default ContactsTile;