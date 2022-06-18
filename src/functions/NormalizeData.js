import moment from "moment";

const countryList = {
    "AU": "Australian",
    "BR": "Brazilian",
    "CA": "Canadian",
    "CH": "Swiss",
    "DE": "Deutsch",
    "DK": "Danish",
    "ES": "Spanish",
    "FI": "Finnish",
    "FR": "French",
    "GB": "British",
    "IE": "Irish",
    "IR": "Iranian",
    "NO": "Norwegian",
    "NL": "Dutch",
    "NZ": "New Zealander",
    "TR": "Turkish",
    "US": "American",
};

const countryColors = {
    AU: {
        color: "#9f1b69",
        bgColor: "#f5e8f0",
        borderColor: "#9f1b69"
    },
    BR: {
        color: "#e864b2",
        bgColor: "#fdeff7",
        borderColor: "#e864b2"
    },
    CA: {
        color: "#4461ec",
        bgColor: "#eceffd",
        borderColor: "#4461ec"
    },
    CH: {
        color: "#51c453",
        bgColor: "#edf9ed",
        borderColor: "#51c453"
    },
    DE: {
        color: "#33c5c9",
        bgColor: "#eaf9f9",
        borderColor: "#33c5c9"
    },
    DK: {
        color: "#fb8f3e",
        bgColor: "#fef3eb",
        borderColor: "#fb8f3e",
    },
    ES: {
        color: "#fa7f56",
        bgColor: "#fef2ee",
        borderColor: "#fa7f56",
    },
    FI: {
        color: "#2b94ff",
        bgColor: "#e9f4ff",
        borderColor: "#2b94ff",
    },
    FR: {
        color: "#ffffff",
        bgColor: "#9f1b69",
        borderColor: "#9f1b69"
    },
    GB: {
        color: "#ffffff",
        bgColor: "#e864b2",
        borderColor: "#e864b2"
    },
    IE: {
        color: "#ffffff",
        bgColor: "#4461ec",
        borderColor: "#4461ec"
    },
    IR: {
        color: "#ffffff",
        bgColor: "#51c453",
        borderColor: "#51c453"
    },
    NO: {
        color: "#ffffff",
        bgColor: "#33c5c9",
        borderColor: "#33c5c9"
    },
    NL: {
        color: "#ffffff",
        bgColor: "#f98c39",
        borderColor: "#f98c39"
    },
    NZ: {
        color: "#ffffff",
        bgColor: "#fa7f56",
        borderColor: "#fa7f56"
    },
    TR: {
        color: "#ffffff",
        bgColor: "#2b94ff",
        borderColor: "#2b94ff"
    },
    US: {
        color: "#ffffff",
        bgColor: "#9f1b69",
        borderColor: "#9f1b69"
    },
}



const NormalizeData = (data, keyWord) => {
    switch (keyWord) {
        case "date":
            return moment(data).format('dddd')
                + ", "
                + moment(data).format('l')
                + ", "
                + moment(data).format('LTS')
        case "name":
            return data.title
                + ". "
                + data.first
                + " "
                + data.last
        case "location":
            return [`/${data.country}/`
                , '\n'
                , data.street.number
                , ' '
                , data.street.name
                , '\n'
                , data.state
                , ' '
                , data.postcode]
        case "locationTile":
            return [`/${data.country}/`
                , '\n'
                , data.street.number
                , ' '
                , data.street.name
                , ' '
                , data.state
                , ' '
                , data.postcode]
        case "locationToCopy":
            return data.country
                + ' '
                + data.street.number
                + ' '
                + data.street.name
                + ''
                + data.state
                + ' '
                + data.postcode
        case "nationality":
            return countryList[data]
        case "nationalColor":
            return countryColors[`${data}`]
        default:
            break;
    }
};

export default NormalizeData;

