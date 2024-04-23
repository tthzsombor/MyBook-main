import { useState, useEffect } from "react";
import { NavBar } from "../NavBar/Nav";
import './Admin.css'

// Define the Book interface
interface Book {
    id: number;           // Unique identifier for the book
    bookname: string;     // Name of the book
    genre: string;        // Genre of the book (if needed)
    release: string;      // Release date of the book
    writer: string;       // Author of the book
}

// AdminProfile component definition
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

    return (
        <div className="admin-container">
            <NavBar />
            <div className="admin-content">
                <div className="admin-section">
                    <h2 className="admin-heading">Könyv hozzáadása</h2>
                    <div className="admin-inputs">
                        <input
                            type="text"
                            value={newBook.title || ""}
                            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                            placeholder="Cím" />
                        <input
                            type="number"
                            value={newBook.release || ""}
                            onChange={(e) => setNewBook({ ...newBook, release: e.target.value })}
                            placeholder="Kiadás" />
                        <input
                            type="text"
                            value={newBook.author || ""}
                            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                            placeholder="Író" />
                        <button onClick={addBook} className="admin-button">Könyv hozzáadása</button>
                    </div>
                </div>
                <div className="admin-section">
                    <h2 className="admin-heading">Könyvek</h2>
                    <ul className="admin-book-list">
                        {books.map((book) => (
                            <li key={book.id} className="admin-book-item">
                                <span>{book.bookname} - {book.writer}</span>
                                <button onClick={() => removeBook(book.id)} className="admin-remove-button">Törlés</button>
                                <button onClick={() => setSelectedBook(book)} className="admin-update-button">Módosítás</button>
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedBook && (
                    <div className="admin-section">
                        <h2 className="admin-heading">Módosítás</h2>
                        <div className="admin-inputs">
                            <input
                                type="text"
                                value={selectedBook.bookname}
                                onChange={(e) => setSelectedBook({ ...selectedBook, bookname: e.target.value })}
                                placeholder="Cím" />
                            <input
                                type="number"
                                value={selectedBook.release}
                                onChange={(e) => setSelectedBook({ ...selectedBook, release: e.target.value })}
                                placeholder="Kiadás" />
                            <input
                                type="text"
                                value={selectedBook.writer}
                                onChange={(e) => setSelectedBook({ ...selectedBook, writer: e.target.value })}
                                placeholder="Író" />
                            <button onClick={updateBook} className="admin-button">Módosítás</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminProfile;
