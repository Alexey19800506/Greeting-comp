import React from 'react';
import moment from 'moment';

const getAge = (date) => {
const day = parseInt(date.substring(0,2));
const month = parseInt(date.substring(3,5));
const year = parseInt(date.substring(6,10));

const today = new Date();

const age = today.getFullYear() - year;
const difMonth = today.getMonth() - month;
if(difMonth < 0 || difMonth === 0 && today.getDate() < day) {
    age--;
}

return age;
}

const Greeting = (props)=> {
    return (
        <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I am ${getAge(props.birthDate)} years old`}</div>
    )
}

export default Greeting;