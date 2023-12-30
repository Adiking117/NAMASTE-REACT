import React from 'react';
import ReactDOM  from 'react-dom/client';

// React element

// const heading = React.createElement("h1",{ id:"heading"},"Adiking came")

// root.render(heading)

// console.log(heading)


// JSX => Not HTML inside JS

// const heading = ( <h1 className="root">
//     Adiking is hero</h1> 
// );
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// console.log(heading)



// const fn = () => true;
// const fn = () => { return true; };



 // Functional Component which returns some JSX
const Title = () =>{
    return <h1>Adiking in function</h1>;
};


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Title />)
const title = (
    <h1>Adiking in JSX</h1>
)
const spanya = <span> Hi theere </span>



// component composition
// const HeadingComponent = () => (
//     <div id="container">
//         <Title/> 
//         <h1 className='heading'>Adiking in one line function</h1>;
//     </div>
// );

// const data = api.getData() // suppose this is a malicious api
// jsx will sanitise this data



// {} inside this any piece of js code will work
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        {title}
        {spanya}
        {100 + 200} 
        {Title()}
        {console.log("hey i am inside {} majja ali")}    
        <h1 className='heading'>Adiking in one line function</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)
// root.render(HeadingComponent())
