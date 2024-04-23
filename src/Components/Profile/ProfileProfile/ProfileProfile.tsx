import { useContext, useEffect, useState } from "react";
import { ProfileNav } from "../Nav/ProfileNav";
import { ApiContext } from "../../../api";



interface UserBooks {
    id: number;
    statusid: number;
    bookid: number;
    userid: number;
}

interface Book {
    id: number;
    bookname: String;
    genre: string;
    release: String;
    writer: String;
}

export function ProfileProfile() {
    const api = useContext(ApiContext)

    const [token, setToken] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');

    const [allbook, setallbook] = useState([] as Book[]);
    const [userbook, setuserbook] = useState([] as UserBooks[])




    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        async function loaduserbooks() {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/books/SearchUserBook/`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (!response.ok) {
                const loaderror = await response.json();
                throw new Error(loaderror.message);
            }
            const content = await response.json() as UserBooks[];
            setuserbook(content);
            console.log(content);


        }

        if (token) {
            loaduserbooks();
        }
    }, [token]);


    useEffect(() => {
        async function allbooks() {
            try {
                const response = await fetch('http://localhost:3000/books/SearchName');
                if (!response.ok) {
                    setErrorMessage('Hiba a letöltéskor');
                    return;
                }
                const content = await response.json() as Book[];
                console.log(content);
                setallbook(content);
            } catch {
                setErrorMessage('Hiba a letöltéskor');
            }
        }
        allbooks();
    }, []);




    const tervbenvan = userbook
        .filter(userbook => userbook.statusid.toString().match('1'));

    const kiolvasva = userbook
        .filter(userbook => userbook.statusid.toString().match('2'));

    const mostolvasom = userbook
        .filter(userbook => userbook.statusid.toString().match('3'));

    const szuneteltetem = userbook
        .filter(userbook => userbook.statusid.toString().match('4'));

    const abbahagytam = userbook
        .filter(userbook => userbook.statusid.toString().match('5'));


    if (!api.currentUser) return null;


    return <>
        <ProfileNav user={api.currentUser!} />
        <p>User Profile</p>
        {
            mostolvasom.map(
                userbook =>
                    <>
                        <h1>{userbook.bookid}</h1>
                        <p>{userbook.statusid}</p>
                    </>
            )
        }


    </>
}