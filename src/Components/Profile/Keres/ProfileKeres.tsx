import { MouseEvent, useContext, useEffect, useState } from "react";
import { ProfileNav } from "../Nav/ProfileNav";
import { ApiContext } from "../../../api";
import './ProfileKeres.css';
import 'bootstrap/dist/css/bootstrap.css';


interface Book {
    id: number;
    bookname: String;
    genre: string;
    release: String;
    writer: String;
}



export function ProfileKereses() {
    const api = useContext(ApiContext)

    const [book, setBook] = useState([] as Book[]);

    const [sorted, setSorted] = useState([] as Book[]);
    const [errorMessage, setErrorMessage] = useState('');

    const [valasztottmufaj, setValasztottmufaj] = useState('');
    const [valasztottszerzo, setValasztottszerzo] = useState('');
    const [valasztottcim, setValasztottcim] = useState('');

    const [statusz, setStatusz] = useState('');
    const [bookid, setBookid] = useState(0);


    const [token, setToken] = useState('');

    


    useEffect(() => {
        async function load() {
            try {
                const response = await fetch('http://localhost:3000/books/SearchName');
                console.log(response);

                if (!response.ok) {
                    setErrorMessage('Hiba a letöltéskor');
                    return;
                }
                const content = await response.json() as Book[];
                console.log(content);
                setBook(content);
                setSorted(content)

            } catch {
                setErrorMessage('Hiba a letöltéskor');
            }
        }
        load();
    }, []);




    //statusz

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);


    async function Staus() {
        if (token) {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/books/Status/${bookid}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ status: parseInt(statusz) })
            });
            if (!(await response).ok) {
                const statuszerror = response.json();
                throw new Error(statuszerror.message);
            }

        }
    }


    if (!api.currentUser) return null;



    function Keres(e: MouseEvent) {
        e.preventDefault();

        const sorted = book
            .filter(book => book.writer.includes(valasztottszerzo))
            .filter(book => book.bookname.includes(valasztottcim))
        //.filter(book => book.genre.includes(searchGenre));
        setSorted(sorted);


    }





    return <>
        <html>
            <body>
                <ProfileNav user={api.currentUser} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="topnav">
                    {/* <select
                        className="mufaj"
                        id="mufaj"
                        value={valasztottmufaj}
                        onChange={e => setValasztottmufaj(e.target.value)}>
                        <option value="" disabled selected hidden>Műfaj</option>
                        <option value="krimi">Krimi</option>
                        <option value="horror">Horror</option>
                    </select> */}

                    <select
                        className="szerzo"
                        id="szerzo"
                        value={valasztottszerzo}
                        onChange={e => setValasztottszerzo(e.target.value)}>
                        <option value="" disabled selected hidden>Szerző</option>
                        <option value="Stephen King">Stephen King</option>
                        <option value="Dosztojevszkij">Dosztojevszkij</option>
                        <option value="Sigmund Freud">Sigmund Freud</option>
                        <option value="Albert Camus">Albert Camus</option>
                    </select>
                    <div className="search-container">
                        <form>
                            <input id="keresomezo" type="text" value={valasztottcim} onChange={e => setValasztottcim(e.target.value)} placeholder="Search.." name="search" />
                            <button onClick={Keres}><i className="fa fa fa-search"></i></button>
                        </form>
                    </div>
                    <p>statusz:{statusz}</p>
                    <p>bookid:{bookid}</p>
                </div>


                <div id="talalat">
                    <div className="container-fluid">
                        <div className="row kartya">
                            {
                                (sorted.map(book =>
                                    <>
                                        <div className="col-md-6 col-lg-4 book">
                                            <h5><b>{book.bookname}</b></h5>
                                            <h6><i>{book.release}</i></h6>
                                            <br />
                                            <p>{book.writer}</p>
                                            <br />
                                            <select
                                                className="statusz"
                                                id="statusz"
                                                value={statusz}
                                                onMouseOver={e => setBookid(book.id)}
                                                onClick={Staus}
                                                onChange={e => setStatusz(e.target.value)}>
                                                <option value="" disabled selected hidden>Státusz</option>
                                                <option value="1">Tervben van</option>
                                                <option value="2">Kiolvasva</option>
                                                <option value="3">Most olvasom</option>
                                                <option value="4">Szüneteltetem</option>
                                                <option value="5">Abbahagytam</option>
                                            </select>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </body>
        </html>

    </>


}











{/* 
        <ProfileNav user={api.currentUser}/>
        <div classNameName="searchbar">
        <select
        classNameName="mufaj"
            id="mufaj"
            value={valasztottmufaj}
            onChange={e => setValasztottmufaj(e.target.value)}>
            <option value="" disabled selected hidden>Műfaj</option>
            <option value="krimi">Krimi</option>
            <option value="horror">Horror</option>
        </select>
        <select
        classNameName="szerzo"
         id="szerzo"
         value={valasztottszerzo}
         onChange={e => setValasztottszerzo(e.target.value)}>
            <option value="" disabled selected hidden>Szerző</option>
            <option value="Stephen King">Stephen King</option>
            <option value="Dosztojevszkij">Dosztojevszkij</option>
        </select>
        <input classNameName="search" type="search" name="search" id="search" placeholder="Search..." />
        <button classNameName="button" onClick={Keres}>
            Src
        </button>
        </div>
        
        <div>
            <p id="eredmeny"></p>
            <p id="mufajeredmeny"></p>
            <p id="szerzoeredmeny"></p>
        </div>
*/}




