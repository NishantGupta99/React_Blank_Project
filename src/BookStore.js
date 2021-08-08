import React from 'react'


function BookStore() { // the parent component 
    return (
        <section className= "List"> 
            <BookDetails />
            <BookDetails />
            <BookDetails />
            <BookDetails />
            <BookDetails />
            <BookDetails />
        </section>    
        
    ) // we can call a component as many times we want and reuse the component 
}
 const BookDetails = () => {
     return (
         <article className='book'>
             <Image></Image>
             <Title></Title>
             <Author></Author>
         </article>
     );
 } 
 const Image = () => (
     <img src= 'https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg' alt =''></img>
 );
 const Title = () => 
     <h1>Rich Dad Poor Dad</h1>
 ;
 const Author = () => 
     <h4>Robert T. Kiyosaki</h4>
 ;


export default BookStore
