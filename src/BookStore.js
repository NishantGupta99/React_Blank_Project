import React from 'react'


function BookStore() { // the parent component 
    return (
        <section className= "List"> 
            <BookDetails />
           
        </section>    
        
    ) // we can call a component as many times we want and reuse the component 
}
const BookName = "Rich Dad Poor Dad";
const author = "Robert T. Kiyosaki"
const img = 'https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg';
 const BookDetails = () => {
     return (
         <article className='book'>
              <img src= {img} alt =''></img>
              <h1>{BookName}</h1>
              <h4 style={{ color: '#617d98', fontSize:'0.75 rem', marginTop:'0.25rem'}}> {author}</h4>    
              {/* // this is a way of adding css directly to the the jsx file instead of creating another css file and this has more authorithy hence this can over ride whats written in plain css , we have used a second set of curly braces because we are using javascript syntax inside jsx */}
         </article>
      
     );
 } 

     
 ;


export default BookStore
