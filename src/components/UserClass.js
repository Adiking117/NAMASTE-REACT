import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props)

        this.state = {
            count : 0,
            count2 : 2
        }
    }
    render(){
        const {name,location} = this.props
        const {count ,count2} = this.state
        return(
            <div className="user-card">
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h3>{count}</h3>
                <h3>{count2}</h3>
                <h4>Contact - 9137893005</h4>
            </div>
        );
    }
}

export default UserClass;