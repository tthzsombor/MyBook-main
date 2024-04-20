import { NavBar } from '../NavBar/Nav' 
import '../Login/Login.css' 
import '../MainPage/MainPage.css'

export function MainPage() {
 return <>
   <body>
   <NavBar />
 <div className='plx'>
 <div className="container">
  <h1>My Book</h1>
  <h5>Saját online könyvtárad</h5>
</div>

<div className="blank">
    <h1>Az oldalról</h1>
    <br />
    <h4>Hogy miért ez a téma? A válasz egyszerű: mindketten szeretünk olvasni. A könyvek iránti érdeklődésünkből kifolyólag úgy gondoltuk létrehozunk egy online könyvtárat a könykedvelőknek, ahol tudját listázni, értékelni és tárolni könyveiket. Az oldal alapötlete ötvözi a kalsszikus művelődési tevékenységet, valamint a 21. századi online felületet, ahol megoszthatunk dolgokat magunkról. 
    Ezen az oldalon nem másról oszthatjuk meg tapasztalatainkat, tetszésünket, mint az egyik legfontosabb tevékenységről: az olvasásról.</h4>
    <h4>Azért készült, mert szeretünk olvasni, mindkettőnk egyik kedves szabadiső tevékenysége az olvasás, és mivel a 21. században az emberek szeretnek mindent megosztani és a telefonjukon csinálni, létrehoztunk eg online könyvtárat, ahol könyveiket tudják tárolni, értékelni, rangsorolni blabla, valamint ezzel is szerettük volna egy kicsit felhívni  a figyemlmet erre, hogy olvasni jó.</h4>
    <br />
    <br />
    <h2>Na de miért is fontos az olvasás?</h2>
    <br />
    <br />
</div>

<div className="container second">
  <div className="item">
    <div className="img img-first"></div>
    <h3>Megtanít koncentrálni</h3>
    <p>Mai világunkban, amikor mindenki legalább három dolgot csinál azonos időben, jól jön a fókuszálás képessége. Olvasás közben nem igazán tudsz fogalmazást írni vagy a haverokkal csetelni vagy filmet nézni. Na jó, egy kis kekszmajszolás belefér, de ha igazán izgalmas a könyv, a keksz is hiába várja, hogy megedd, mert csak a kezedben fogod tartogatni. Ha a reggeleket még friss aggyal egy kis olvasással kezded, megtanulsz összpontosítani és nagyon pozitív eredményeket érhetsz el a munkában vagy az iskolában.</p>
  </div>
  <div className="item">
    <div className="img img-second"></div>
    <h3>Fejleszti a fantáziádat</h3>
   <p>Ha nem készen kapott képeket kapsz, hanem a leírások alapján kell elképzelned a szereplőket, hogy hogyan néznek ki, fejleszted a fantáziádat. Biztos vagyok benne, hogy ugyanazt a szereplőt mindenki egy kicsit másképp képzeli el a fejében, és ez így a legjobb. Amint már kép is társul a szereplőhöz, kicsit megszűnik a varázs.</p>
  </div>
  <div className="item">
    <div className="img img-third"></div>
    <h3>Gazdagítja a szókincset</h3>
   <p>A legtöbben szeretnének szépen és választékosan fogalmazni mind szóban, mind pedig írásban. A rendszeres olvasás hozzásegít ahhoz, hogy szinte akaratlanul sajátíts el új szavakat, kifejezéseket, amik beépülnek majd a személyes szótáradba. Minél több könyvet olvasol, annál valószínűbb, hogy a szókincsed is gazdagodik. A szépirodalmi és ismeretterjesztő könyvek kifejezetten alkalmasak erre a célra.</p>
  </div>
</div>

<div className="blank"></div>

<footer>
    Készítette: Tóth Zsombor
</footer>


 </div>
 
   </body>
</>

}
    
