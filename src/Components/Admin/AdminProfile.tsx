import { useState, useEffect } from "react";
import { User } from "../Profile/User";
import { NavBar } from "../NavBar/Nav";
import './Admin.css'


interface Props {
    user: User;
}

interface Book {
    id: number;           // Unique identifier for the book
    bookname: string;     // Name of the book
    genre: string;        // Genre of the book
    release: string;      // Release date of the book
    writer: string;       // Author of the book
}

export function AdminProfile() {
    // State variables
    const [books, setBooks] = useState([] as Book[]); // Array to store books
    const [newBook, setNewBook] = useState({}); // New book object
    const [selectedBook, setSelectedBook] = useState(null); // Selected book for update
    const [errormessage, setErrorMessage] = useState('');

    // Function to fetch books from the server
    async function loadAllBooks() {
        try {
            const response = await fetch('http://localhost:3000/books/SearchName');
            if (!response.ok) {
                setErrorMessage('Error loading all books');
                return;
            }
            const content = await response.json() as Book[];
            setBooks(content);
        } catch {
            setErrorMessage('Error loading all books');
        }
    }
    loadAllBooks();


    // Function to add a new book
    const addBook = async () => {
        try {
            const response = await fetch("http://localhost:3000/books/}", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBook),
            });
            if (!response.ok) {
                throw new Error("Failed to add book");
            }
            setNewBook({}); // Clear new book object
            loadAllBooks(); // Refresh book list
        } catch (error) {
            console.error(error);
        }
    };

    // Function to remove a book
    const removeBook = async (bookId) => {
        try {
            const response = await fetch(`http://localhost:3000/books/${bookId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to remove book");
            }
            loadAllBooks(); // Refresh book list
        } catch (error) {
            console.error(error);
        }
    };

    // Function to update a book
    const updateBook = async () => {
        try {
            const response = await fetch(`http://localhost:3000/books/${selectedBook.id}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(selectedBook),
            });
            if (!response.ok) {
                throw new Error("Failed to update book");
            }
            setSelectedBook(null); // Clear selected book
            loadAllBooks(); // Refresh book list
        } catch (error) {
            console.error(error);
        }
    };

    // Effect to fetch books on component mount
    useEffect(() => {
        loadAllBooks();
    }, []);

    return (<>
        <NavBar />
        <div id="admin">
            {/* Form to add a new book */}
            <h2>Könyv hozzáadása</h2>
            <input
                type="text"
                value={newBook.title || ""}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                placeholder="Cím" />
            <input
                type="number"
                value={newBook.release || ""}
                onChange={(e) => setNewBook({ ...newBook, release: e.target.value })}
                placeholder="Kiadás éve" />
            <input
                type="text"
                value={newBook.author || ""}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                placeholder="Író" />
            <button onClick={addBook}>Könyv hozzáadása</button>

            {/* Book list */}
            <h2>Könyvek</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.bookname} : {book.writer}
                        <button onClick={() => removeBook(book.id)}>Törlés</button>
                        <button onClick={() => setSelectedBook(book)}>Módosítás</button>
                    </li>
                ))}
            </ul>

            {/* Form to update a book */}
            {selectedBook && (
                <>
                    <h2>Könyv módosítása</h2>
                    <input
                        type="text"
                        value={selectedBook.bookname}
                        onChange={(e) => setSelectedBook({ ...selectedBook, bookname: e.target.value })}
                        placeholder="Title" />
                    <input
                        type="number"
                        value={selectedBook.release}
                        onChange={(e) => setSelectedBook({ ...selectedBook, release: e.target.value })}
                        placeholder="Release" />
                    <input
                        type="text"
                        value={selectedBook.writer}
                        onChange={(e) => setSelectedBook({ ...selectedBook, writer: e.target.value })}
                        placeholder="Author" />
                    <button onClick={updateBook}>Feltöltés</button>
                </>
            )}
        </div>
    </>
    );
}

export default AdminProfile;


