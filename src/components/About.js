import React from "react";
import UserClass from "./UserClass"

class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("About Constreuctor")
    }

    componentDidMount(){
        // console.log("About Component did mount")
    }

    render(){
        // console.log("About Render")
        return(
            <div className="aboutus">
                <h1>Welcome To My Website</h1>
                <UserClass name={"Aditya Class"} location={"Juinagar Class"}/>
            </div>
        )
    }
}

export default About;