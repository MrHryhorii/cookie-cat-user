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

    return (
        <section>
            <p>Users</p>
            <ul>
                {
                    userdata.map((user, i) => (
                        <li key={i}>{user.username}</li>
                    ))
                }
            </ul>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="email" name="email" />
                </label>
                <input type="submit" value="Add" />
            </form>
        </section>
    )
}

export default User