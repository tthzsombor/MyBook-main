import { useContext } from "react";
import { ProfileNav } from "../Nav/ProfileNav";
import { ApiContext } from "../../../api";
import './ProfileMainPage.css';




export function ProfilMainPage() {
   const api = useContext(ApiContext)
   if (!api.currentUser) return null;



   function Teljes() {
      var el = document.querySelector('body');
      el?.requestFullscreen();
   }



   return <>
      <div id="profilfooldal">
         <div id="content">
            <ProfileNav user={api.currentUser!} />
            <button id="fullscreenbutton" onClick={Teljes}><img style={{ height: 50, width: 50 }} src="https://static.thenounproject.com/png/56935-200.png" alt="teljes képernyő" /></button>
            <div className="centered">
               <h1>MyBook</h1>
               <h3>Alakítsd ki saját online könyvtárad</h3>
            </div>
            <div className="wrapper-images">
               {/* 5 images by row */}
               <div className="images-line">
                  <>
                     <div
                        className="line"
                        style={{
                           backgroundImage:
                              "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                        }}
                     >
                        <div
                           className="img"
                           style={{
                              backgroundImage:
                                 "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                           }}
                        >
                        </div>
                     </div>
                     <div
                        className="line"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                        }}
                     >
                        <div
                           className="img"
                           style={{
                              backgroundImage:
                                 "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                           }}
                        />
                     </div>
                  </>

                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                        }}
                     >

                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                        }}
                     >

                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                        }}
                     />
                  </div>
               </div>


               {/*masodik sor */}
               <div className="images-line">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                        }}
                     >

                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://marvin.bline.hu/product_images/408/B919538.JPG)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://marvin.bline.hu/product_images/408/B919538.JPG)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                        }}
                     >
                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://marvin.bline.hu/product_images/408/B919538.JPG)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://marvin.bline.hu/product_images/408/B919538.JPG)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                        }}
                     >
                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://marvin.bline.hu/product_images/408/B919538.JPG)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://marvin.bline.hu/product_images/408/B919538.JPG)"
                        }}
                     />
                  </div>
               </div>

               {/*harmadik sor */}
               <div className="images-line">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                        }}
                     >

                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2019/06/HelikonZsebkonyv_SzerbA_UtasEsHoldvilag_B1_72dpi-1.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2019/06/HelikonZsebkonyv_SzerbA_UtasEsHoldvilag_B1_72dpi-1.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                        }}
                     >
                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2019/06/HelikonZsebkonyv_SzerbA_UtasEsHoldvilag_B1_72dpi-1.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2019/06/HelikonZsebkonyv_SzerbA_UtasEsHoldvilag_B1_72dpi-1.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                        }}
                     >
                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2019/06/HelikonZsebkonyv_SzerbA_UtasEsHoldvilag_B1_72dpi-1.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2019/06/HelikonZsebkonyv_SzerbA_UtasEsHoldvilag_B1_72dpi-1.jpg)"
                        }}
                     />
                  </div>
               </div>


               {/*negyedik sor */}


               <div className="images-line">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                        }}
                     >
                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                        }}
                     >
                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                        }}
                     >
                     </div>
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                        }}
                     />
                  </div>
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                        }}
                     />
                  </div>
               </div>


            </div>
         </div>
      </div>




   </>
}