import React from 'react';
import moment from 'moment';

const getAge = (date) => {

const today = new Date();

const age = today.getFullYear() - date.getFullYear();
const difMonth = today.getMonth() - date.getMonth();
if(difMonth < 0 || difMonth === 0 && today.getDate() < date.getDate()) {
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