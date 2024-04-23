import React from "react";
import { useState , useReducer} from "react";
import BookingForm from "./BookingForm";

const Reserve = () =>{

    const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

    function initializeTimes() {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return updateTimes(action.date);
            default:
                return state;
        }
    }

    function updateTimes(selectedDate) {
        return initializeTimes();
    }


    return(
        <BookingForm availableTimes={availableTimes}
                     dispatch={dispatch} />
    );
}

export default Reserve;