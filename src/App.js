import './styles/css/App.css';
import {Container} from "@mui/material";
import SearchForm from "./components/SearchForm";
import ContactsTable from "./components/ContactsTable";
import Statistics from "./components/Statistics";
import {useEffect, useState} from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import CustomPagination from "./components/CustomPagination";
import searchQuery from "./functions/SearchQuery";
import ContactsTile from "./components/ContactsTile";

const url = "https://randomuser.me/api/?results=50";

function App() {

    const [dataContacts, setDataContacts] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [view, setView] = useState(localStorage.getItem('view')|| "list")

    const [searchedContacts, setSearchedContacts] = useState([])

    const [searchWord, setSearchWord] = useState("")
    const [gender, setGender] = useState("all")
    const [nationality, setNationality] = useState("")

    const contactsOnPage = 10
    const contactsOnPageTile = 9

    const [pageQty, setPageQty] = useState((Math.ceil(searchedContacts.length / contactsOnPage)))
    const [page, setPage] = useState(1)

    const [pageQtyTile, setPageQtyTile] = useState((Math.ceil(searchedContacts.length / contactsOnPageTile)))
    const [pageTile, setPageTile] = useState(1)

    const [index, setIndex] = useState(0)

    const directions = [
        "none", "a-z", "z-a"
    ]

    const [direction, setDirection] = useState(directions[index])

    const getContacts = () => {
        try {
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setDataContacts(data.results);
                    setSearchedContacts(data.results)
                });
        } catch (e) {
            alert(e)
        }
        setIsLoaded(true)
    }

    useEffect(() => {
        getContacts()
    }, [])

    useEffect(() => {
        setPageQty((Math.ceil(searchedContacts.length / contactsOnPage)))
        setPageQtyTile((Math.ceil(searchedContacts.length / contactsOnPageTile)))
    }, [searchedContacts])

    useEffect(() => {
        searchQuery(searchWord, gender, setSearchedContacts, dataContacts, nationality, direction)
    }, [searchWord, gender, nationality, direction, dataContacts])

    useEffect(() => {
        setDirection(directions[index])
    }, [index])

    useEffect(() => {
        localStorage.setItem('view', view);
    }, [view])

    const clearQuery = () => {
        setGender("all")
        setSearchWord("")
        setNationality("")
    }

    const refreshData = () => {
        setIsLoaded(false)
        clearQuery()
        setTimeout(() => {
            getContacts()
        }, 1000)
    }

    if (!isLoaded) {
        return <LoadingSpinner/>
    }

    if (isLoaded) {
        return (
            <div >
                <Container maxWidth="xl">
                    <SearchForm
                        refreshData={refreshData}
                        view={view}
                        setView={setView}
                        setSearchWord={setSearchWord}
                        setGender={setGender}
                        clearQuery={clearQuery}
                        gender={gender}
                        searchWord={searchWord}
                        nationality={nationality}
                        setNationality={setNationality}
                    />
                    {view === "list"?
                        <ContactsTable
                        index={index}
                        setIndex={setIndex}
                        dataContacts={searchedContacts}
                        page={page}
                        contactsOnPage={contactsOnPage}
                        />
                        :
                        <ContactsTile
                            dataContacts={searchedContacts}
                            pageTile={pageTile}
                            contactsOnPageTile={contactsOnPageTile}
                        />
                    }
                    <Statistics
                        dataContacts={dataContacts}
                    />
                    {view === "list"?
                        <CustomPagination
                            page={page}
                            pageQty={pageQty}
                            setPage={setPage}/>
                        :
                        <CustomPagination
                            page={pageTile}
                            pageQty={pageQtyTile}
                            setPage={setPageTile}/>
                    }
                </Container>
            </div>
        );
    }
}

export default App;
