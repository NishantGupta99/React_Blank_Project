import React from 'react'
const FirstBook = {
    BookName : "Rich Dad Poor Dad",
    author : "Robert T. Kiyosaki",
    img : 'https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg'
}
const SecondBook = {
    BookName : "The Psychology of Money",
    author : "Morgan Housel",
    img : 'https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg'
} // we have created objects that consists of all the information of each book and then we pass them through the component using props well we can use any other key word instead of props but it is the convention 


function BookStore() { // the parent component bhbh
    return (
        <section className="List">
            <BookDetails img={FirstBook.img}
                BookName={FirstBook.BookName} author={FirstBook.author} />
            <BookDetails img={SecondBook.img}
                BookName={SecondBook.BookName} author={SecondBook.author} />    
                {/* we are passing the object value into the calling of component  */}

        </section>

    ) // we can call a component as many times we want and reuse the component 
}

const BookDetails = (props) => {
    return (
        <article className='book'>
            <img src={props.img} alt=''></img>
            <h1>{props.BookName}</h1>
            <h4 style={{ color: '#617d98', fontSize: '0.75 rem', marginTop: '0.25rem' }}> {props.author}</h4>
            {/* // this is a way of adding css directly to the the jsx file instead of creating another css file and this has more authorithy hence this can over ride whats written in plain css , we have used a second set of curly braces because we are using javascript syntax inside jsx */}
        </article>

    );
}


    ;


export default BookStore
