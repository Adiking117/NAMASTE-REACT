
const heading = React.createElement("h1",{id: "heading" },"Hello world fom React")
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)

console.log(heading)       // returns a object


// {/* 
// <div id="parent">
//     <div id="child">
//         <h1>I am a H1 tag</h1>
//     </div>
// </div> 
// */}

// const parent = React.createElement(
//     "div",{id:"parent"},
//     React.createElement(
//         "div",{id:"child"},
//         React.createElement("h1",{},"I am h1 tag")
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)

// console.log(parent)






// {/* 
// <div id="parent">
//     <div id="child">
//         <h1>I am a H1 tag</h1>
//         <h2>I am a sibling</h2>
//     </div>
// </div> 
// */}

// const parent = React.createElement(
//     "div",{id:"parent"},
//     React.createElement(
//         "div",{id:"child"},
//         [
//             React.createElement("h1",{},"I am h1 tag"),
//             React.createElement("h2",{},"I am a sibling tag"),
//         ]
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)

// console.log(parent)


// JSX exists because the code looks complicated
 