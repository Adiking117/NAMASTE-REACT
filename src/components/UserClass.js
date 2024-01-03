import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props)
        console.log(this.props.name+" User constructor")
        this.state = {
            userInfo : {
                name : "Pata NAhi",
                location : "Mahit nay",
            }
        }
    }

    async componentDidMount(){
        console.log(this.props.name+" User Component did mount")
        const data = await fetch("https://api.github.com/users/Adiking117")
        const json = await data.json();

        this.setState({
            userInfo: json
        })
        console.log(json)
    }

    componentDidUpdate(){
        console.log("Component did update bro")
    }

    componentWillUnmount(){
        console.log("Component unmounted bro")
    }

    render(){
        console.log(this.props.name+" User render")
        const {name,location,avatar_url}= this.state.userInfo
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h4>Contact - 9137893005</h4>
            </div>
        );
    }
}

export default UserClass;