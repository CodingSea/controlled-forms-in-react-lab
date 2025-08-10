import { useState } from 'react';

function Bookshelf()
{
    const [books, setBooks] = useState(
    [
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    
    const [newBook, setNewBook] = useState(
        {
            title: "",
            author: ""
        }
    )

    function handleInputChange(event)
    {
        setNewBook({...newBook, [event.target.name]: event.target.value})
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        const copyBooks = [...books, newBook];
        setNewBook({ title: "", author: "" });
        
        setBooks(copyBooks);
        console.log(books);
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title: </label>
                    <input name='title' onChange={handleInputChange} value={newBook.title}></input>
                    <label htmlFor='author'>Author: </label>
                    <input name='author' onChange={handleInputChange} value={newBook.author}></input>

                    <button type='submit'>Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {
                    books.map((book, index) =>
                    {
                        return (
                            <div key={ index } className='bookCard'>
                                <h3>{ book.title }</h3>
                                <p>by { book.author }</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Bookshelf;