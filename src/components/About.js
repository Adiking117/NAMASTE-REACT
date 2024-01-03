import React from "react";
import UserClass from "./UserClass"

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("About Constreuctor")
    }

    componentDidMount(){
        console.log("About Component did mount")
    }

    render(){
        console.log("About Render")
        return(
            <div>
                <h1>Hi adi i am react</h1>
                <UserClass name={"Aditya Class"} location={"Juinagar Class"}/>
                <UserClass name={"Pranav Class"} location={"Nerul Class"}/>
                <UserClass name={"Tirth Class"} location={"Sanpda Class"}/>

            </div>
        )
    }
}

export default About;