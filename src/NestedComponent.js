import React from 'react'

//we will learn nested components and react tools

function NestedComponent() {
    return (
        <div>            
             <h1>This is the component 1</h1>
             <Component2 /> 
        </div>
    )
}

const Component2   = () => { // and start the name of your component or function with a capital letter & here we have created a nested component but if we run this without calling this component inside the return of our first component this wont run / return
    return (
        <div>
            <h2> this is my second-nested component and I have used an arrow function </h2>
        </div>
    )
}

export default NestedComponent
