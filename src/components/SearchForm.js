import React from 'react';
import {Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";
import '../styles/css/SearchForm.css'

const SearchForm = ({setSearchWord, setGender, clearQuery, gender, searchWord, nationality, setNationality, view, setView, refreshData}) => {

    const handleSearch = (e) => setSearchWord(e.target.value)
    const handleGender = (e) => setGender(e.target.value)
    const handleNationality = (e) => setNationality(e.target.value)

    return (
        <div>
            <div className="header_section">
                <h2 className="header_section__title">Contacts</h2>
                <div className="header_section__buttons">
                    <button tabIndex="-1">
                        <img

                             className="header_section__refresh"
                             onClick={refreshData}
                             src={require("../assets/refresh.png")}
                             alt="refresh"/>
                    </button>
                    <button tabIndex="-1">
                        <img className={`header_section__squares ${view === "tile"? "header_section__active" : ""}`}
                             onClick={() => setView("tile")}
                             src={view === "tile"? require("../assets/squares-white.png") : require("../assets/squares.png")}
                             alt="squares"/>
                    </button>
                    <button tabIndex="-1">
                        <img className={`header_section__list ${view === "list"? "header_section__active" : ""}`}
                             onClick={() => setView("list")}
                             src={view === "list"? require("../assets/list-white.png") : require("../assets/list.png")}
                             alt="list"/>
                    </button>
                </div>
            </div>
            <Container maxWidth="xl" component={Paper} className="search_section">
                <div className="search_section__left">
                    <TextField
                        size="small"
                        value={searchWord}
                        onChange={handleSearch}
                        className="search_section__name" id="outlined-basic" label="Search by full name" variant="outlined" />
                    <FormControl className="search_section__gender" size="small">
                        <InputLabel id="gender-select">Gender</InputLabel>
                        <Select
                            value={gender === "all"? "" : gender}
                            onChange={handleGender}
                            labelId="gender-select"
                            id="gender-simple-select"
                            label="Gender"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        value={nationality}
                        onChange={handleNationality}
                        size="small"
                        className="search_section__nationality" id="outlined-basic" label="Nationality" variant="outlined" />
                </div>
                <div className="search_section__right" onClick={clearQuery}>
                    <img className="search_section__button" src={require("../assets/x.png")} alt="x"/>
                    <p className="search_section__clear">Clear</p>
                </div>
            </Container>
        </div>
    );
};

export default SearchForm;