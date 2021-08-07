import React from 'react' // to build a component we will import react using es6 format 
import { render} from "react-dom"; // we will use this to render the method to index.js root 

function FirstComponent() {
    return ( // you always need to return the function if we dont then there will be an error which states that nothing has been returned by the component 
        <div>
            <h1>This is out first React component using function component</h1>
            
        </div>
    )
}

export default FirstComponent
