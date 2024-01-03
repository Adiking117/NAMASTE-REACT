import { useState } from "react";

const User = (props) => {
    const [count] = useState(0)
    const [count2] = useState(1)
    // Behind the scenes React store both the counts in one big object
    const {name,location} = props
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>{count}</h3>
            <h3>{count2}</h3>

            <h4>Contact - 9137893005</h4>
        </div>
    )
}

export default User;