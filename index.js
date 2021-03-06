import React from 'react';
import ReactDOM from 'react-dom';

// // SFC HelloWorld in JSX
// function HelloWorld(){
//     return(
//         <div>Hello World!</div>
//     );
// }

// // HelloWorld in Plain JS
// function HelloWorld(){
//     return React.createElement(
//         'div',
//         {},
//         'Hello World!'
//     );
// }

function Hello(){
    return (
        <span>Hello</span>
    );
}

function World() {
    return(
        <span>World!</span>
    );
}

function HelloWorld() {
    return(
        <div>
            <Hello /> <World />
        </div>
        
    )
}

ReactDOM.render(
    <HelloWorld />,
    document.querySelector("#root")
);