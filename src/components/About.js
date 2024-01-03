import User from "./User";
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>Hi adi i am react</h1>
            <User name={"Aditya Function"} location={"Juinagar Function"}/>
            <hr></hr>
            <UserClass name={"Aditya Class"} location={"Juinagar Class"}/>
        </div>
    )
}

export default About;