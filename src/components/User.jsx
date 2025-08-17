import React from 'react'
import { useState } from 'react';

const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no'},
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
];

const User = () => {

    const [userdata, setUserdata] = useState(mockData);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    // process on input change
    const handleChange = (event, setter) => {
        setter(event.target.value);
    };
    // process on button click
    const addUser = () => {
        // check if we have data
        if (username && email) {
            // check unique email
            if (userdata.some(u => u.email === email)) {
                alert("Email already exists");
                return;
            }
            // create new data for "userdata"
            const newUser = {
                username: username,
                email: email
            };
            // new array from old array data and new data
            setUserdata(prevArray => [...prevArray, newUser]); 
            // reset input data
            setUsername("");
            setEmail("");
        }
        else
        {
            if(!username)
            {
                alert("Input Username!");
            }
            else if(!email)
            {
                alert("Input Email!");
            }
            else
            {
                alert("Input Username and Email!");
            }
        };
    };

    return (
        <section>
            <p>Users</p>
            <ul>
                {
                    userdata.map((user, i) => (
                        <li key={i}>{user.username} — {user.email}</li>
                    ))
                }
            </ul>
            <form>
                <label>
                    Username:
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => handleChange(e, setUsername)}
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => handleChange(e, setEmail)}
                    />
                </label>
                <input
                    type="button"
                    value="Add" 
                    onClick={addUser}
                />
            </form>
        </section>
    )
}

export default User