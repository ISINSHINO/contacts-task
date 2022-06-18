import React from 'react';
import {Container, Paper} from "@mui/material";
import '../styles/css/Statistics.css'
import countStatistics from "../functions/CountStatistics";
import normalizeData from "../functions/NormalizeData";

const Statistics = ({dataContacts}) => {

    const {collectionSize, malesCount, femalesCount, indeterminate, winner, uniqueNats, getOccurrence} = countStatistics(dataContacts)



    return (
        <Container className="statistics-section" maxWidth="xl" component={Paper}>
            <h2 className="statistics-section__title">Statistic</h2>
            <table className="statistic-table">
                <tr>
                    <td className="statistic-table__title">Collection size</td>
                    <td className="statistic-table__title">Males</td>
                    <td className="statistic-table__title">Females</td>
                    <td className="statistic-table__title">Indeterminate</td>
                </tr>
                <tr>
                    <td className="statistic-table__info">{collectionSize}</td>
                    <td className="statistic-table__info">{malesCount}</td>
                    <td className="statistic-table__info">{femalesCount}</td>
                    <td className="statistic-table__info">{indeterminate}</td>
                </tr>
                <tr>
                    <td/>
                    <td
                        className="statistic-table__winner"
                        colSpan="2">
                        {winner === "Equal"? "Male equals female" : `${winner} predominate`}
                    </td>
                    <td/>
                </tr>
            </table>
            <p className="nationalities-section__title">Nationalities</p>
            <div className="nationalities-section">
                {uniqueNats.map(uniqueNat => (
                    <p key={uniqueNat} className="nationalities-section__nationality">
                        <b>{normalizeData(uniqueNat, "nationality")}:</b> {getOccurrence(uniqueNat)} contact
                    </p>
                ))}
            </div>
        </Container>
    );
};

export default Statistics;