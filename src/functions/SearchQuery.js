import React from 'react';
import normalizeData from "../functions/NormalizeData";

const SearchQuery = (searchWord, gender, setSearchedContacts, dataContacts, nationality, direction) => {

    console.log(direction)

    switch (direction) {
        case "a-z":
            switch (gender) {
                case "male":
                    setSearchedContacts(dataContacts.filter(contact =>
                        (
                            (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "male"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                            ||
                            (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "male"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                        )).sort(function(a,b){return a.name.first.localeCompare(b.name.first)}))
                    break;
                case "female":
                    setSearchedContacts(dataContacts.filter(contact =>
                        (
                            (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "female"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                            ||
                            (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "female"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                        )).sort(function(a,b){return a.name.first.localeCompare(b.name.first)}))
                    break;
                default:
                    setSearchedContacts(dataContacts.filter(contact =>
                        (
                            (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase()))
                            ||
                            (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase()))
                        )).sort(function(a,b){return a.name.first.localeCompare(b.name.first)}))
                    break;
            }
            break;
        case "z-a":
            switch (gender) {
                case "male":
                    setSearchedContacts(dataContacts.filter(contact =>
                        (
                            (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "male"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                            ||
                            (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "male"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                        )).sort(function(a,b){return a.name.first.localeCompare(b.name.first)}).reverse())
                    break;
                case "female":
                    setSearchedContacts(dataContacts.filter(contact =>
                        (
                            (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "female"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                            ||
                            (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "female"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                        )).sort(function(a,b){return a.name.first.localeCompare(b.name.first)}).reverse())
                    break;
                default:
                    setSearchedContacts(dataContacts.filter(contact =>
                        (
                            (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase()))
                            ||
                            (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase()))
                        )).sort(function(a,b){return a.name.first.localeCompare(b.name.first)}).reverse())
                    break;
            }
            break;
        default:
            switch (gender) {
                case "male":
                    setSearchedContacts(dataContacts.filter(contact =>
                        (
                            (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "male"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                            ||
                            (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "male"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                        )))
                    break;
                case "female":
                    setSearchedContacts(dataContacts.filter(contact =>
                        (
                            (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "female"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                            ||
                            (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                contact.gender === "female"
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
                            )
                        )))
                    break;
                default:
                    setSearchedContacts(dataContacts.filter(contact =>
                        (
                            (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase()))
                            ||
                            (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
                                &&
                                normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase()))
                        )))
                    break;
            }
            break;
    }
};

export default SearchQuery;

// import React from 'react';
// import normalizeData from "../functions/NormalizeData";
//
// const SearchQuery = (searchWord, gender, setSearchedContacts, dataContacts, nationality, direction) => {
//
//
//     switch (gender) {
//         case "male":
//             setSearchedContacts(dataContacts.filter(contact =>
//                 (
//                     (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
//                         &&
//                         contact.gender === "male"
//                         &&
//                         normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
//                     )
//                     ||
//                     (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
//                         &&
//                         contact.gender === "male"
//                         &&
//                         normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
//                     )
//                 )))
//         case "female":
//             setSearchedContacts(dataContacts.filter(contact =>
//                 (
//                     (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
//                         &&
//                         contact.gender === "female"
//                         &&
//                         normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
//                     )
//                     ||
//                     (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
//                         &&
//                         contact.gender === "female"
//                         &&
//                         normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase())
//                     )
//                 )))
//             break;
//         default:
//             setSearchedContacts(dataContacts.filter(contact =>
//                 (
//                     (contact.name.first.toLowerCase().includes(searchWord.toLowerCase())
//                     &&
//                     normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase()))
//                     ||
//                     (contact.name.last.toLowerCase().includes(searchWord.toLowerCase())
//                     &&
//                     normalizeData(contact.nat, "nationality").toLowerCase().includes(nationality.toLowerCase()))
//                 )))
//             break;
//     }
//
//     // dataContacts.sort(function(a,b){return a.name.first.localeCompare(b.name.first)}).reverse()
//
// };
//
// export default SearchQuery;
