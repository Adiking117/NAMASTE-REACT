import React from 'react';
import ReactDOM  from 'react-dom/client';

const parent = React.createElement(
    "div",{id:"parent"},
    React.createElement(
        "div",{id:"child"},
        [
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am a sibling tag"),
        ]
    )
);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

console.log(parent)


// JSX exists because the code looks complicated
 