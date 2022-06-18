import React from 'react';

const CountStatistics = (dataContacts) => {

    const collectionSize = dataContacts.length;
    const malesCount = dataContacts.filter(contact => contact.gender === "male").length
    const femalesCount = dataContacts.filter(contact => contact.gender === "female").length
    const indeterminate = collectionSize - malesCount - femalesCount

    const getWinner = () => {
        if (malesCount > femalesCount) {
            return "Male"
        }
        if (malesCount < femalesCount) {
            return "Female"
        }
        if (malesCount === femalesCount) {
            return "Equal"
        }
    }

    const winner = getWinner()

    const nats = dataContacts.map(contact => {
        return contact.nat
    })

    const uniqueNats = [... new Set(nats.map(nat => nat))]

    const getOccurrence = (value) => {
        let count = 0;
        nats.forEach((v) => (v === value && count++));
        return count;
    }

    return {collectionSize, malesCount, femalesCount, indeterminate, winner, uniqueNats, getOccurrence}

};

export default CountStatistics;