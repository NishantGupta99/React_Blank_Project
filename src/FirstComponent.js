import React from 'react' // to build a component we will import react using es6 format 
import { render} from "react-dom"; // we will use this to render the method to index.js root 


function FirstComponent() {
    return ( // you always need to return the function if we dont then there will be an error which states that nothing has been returned by the component 
        <React.Fragment> 
        <div onClick > // discuss camel case in html attributes. 
            <h1>This is out first React component using function component</h1>
            <img src="istock-147290529.jpg" alt="Penguines should have been here but they got stuck somewhere!" width="500" height="333"></img>
            <ul>
                <li>
                    <h3>I like penguines</h3>
                </li>
                <li>
                    <h3>I dont like penguines</h3>
                </li>
            </ul>
            
        </div>
         //<div></div> // show this to show that we cannot a div outside  div inside the return everything inside the return should be wrapped so we cn use react fragment 
        </React.Fragment> //  shortcut to do this is using just <> </> 
    )
}

export default FirstComponent
