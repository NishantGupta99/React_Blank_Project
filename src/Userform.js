import React from 'react'
import {InputGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {axios} from "axios";
import { useState } from 'react';

//const users = () => {
  //  const[user, setUser] = useState({username: "Nishant"});

//}
function Userform() {
    return (
        <div>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm" placeholder="name">Your name here</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <Button variant="success">Input</Button>{' '}


        </div>
    )
}

export default Userform;

