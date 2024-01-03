import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props)

        this.state = {
            count : 0,
            count2 : 0
        }
        console.log(this.props.name+" User constructor")
    }

    componentDidMount(){
        console.log(this.props.name+" User Component did mount")
    }

    render(){
        const {name,location} = this.props
        const {count , count2} = this.state
        console.log(this.props.name+" User render")

        return(
            <div className="user-card">
                <h2>{name}</h2>
                <h3>{location}</h3>

                <button onClick={()=>{
                    // this.state.count++
                    // newer update state variables directly
                    this.setState({
                        count : this.state.count + 1,
                        count2 : (this.state.count+1) * 10
                    })
                }}>Count Increase</button>

                <h3>{count}</h3>
                <h3>{count2}</h3>
                <h4>Contact - 9137893005</h4>
            </div>
        );
    }
}

export default UserClass;