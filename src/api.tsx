import { createContext, useEffect, useState } from "react";
import { User } from "./Components/Profile/User";
import { Book } from "./Components/Profile/Book";

export const ApiContext = createContext({
    error: '',
    login: async (email: string, password: string) => { },
    logout: () => { },

    register: async (email: string, username: string, password: string) => { },
    //listAllUsers: async () => ([] as User[]),
    listAllBook: async () => ([] as Book[]),
    deleteUser: async (id: int) => { },

    currentUser: null as (User | null),
});

interface Props {
    children: React.ReactNode;
}

export function ApiProvider({ children }: Props) {
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null as User | null)
    const [error, setError] = useState('')
    const [book, setBook] = useState(null as Book | null)


    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        async function loadUserData() {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/me`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            if (response.status === 401) {
                setToken('');
                localStorage.removeItem('token');
                setError('Please login again');
                return;
            }
            if (!response.ok) {
                setError('An error occured, try again later');
                return;
            }
            const userData = await response.json() as User;
            setUser(userData);
        }

        if (token) {
            loadUserData();
        } else {
            setUser(null);
        }
    }, [token]);




    const apiObj = {
        currentUser: user,
        error,

        login: async (email: string, password: string) => {
            const loginData = {
                email, password,
            }

            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            if (!response.ok) {
                const errorObj = await response.json();
                throw new Error(errorObj.message);
            }
            const tokenObj = await response.json();
            setToken(tokenObj.token);
            localStorage.setItem('token', tokenObj.token);
        },
        logout: () => {
            setToken('');
            localStorage.removeItem('token');
        },
        register: async (email: string, username: string, password: string) => {
            const registerData = {
                email, username, password,
            }

            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/Register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(registerData),
            });
            if (!response.ok) {
                const errorObj = await response.json();
                throw new Error(errorObj.message);
            }


        },
        
        /*
        listAllBook: async (bookname: string, release: number, writer: string, genre: string) => {
            async function loadBookData() {
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/books/searchName`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    }
                })
                if (!response.ok) {
                    setError('An error occured, try again later');
                    return;
                }
                const book = await response.json() as Book;
                setBook(book);
            }
        }
        */

    };

    return <ApiContext.Provider value={apiObj}>
        {children}
    </ApiContext.Provider>
}

