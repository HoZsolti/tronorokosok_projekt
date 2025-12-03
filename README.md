Készítette: Horváth Zsolt (IMW2Z2)


Ez a weboldal bemutatja azokat a fiatalokat, akik a még ma is érvényben lévő európai országok alkotmányos monarchiáinak (potenciális) jövőbeli uralkodói. Az oldal tartalmaz egy interaktív térképet, ami használatával különböző örökösi profilokat bemutató oldalakra lehet eljutni. A főoldalon még található egy minikvíz és egy kapcsolattartási/foglalási panel. A mellékoldalakat a személyi profilok bemutatása teszi ki.

A projekt egyetlen JavaScript fájlt használ, amely a /js/ mappában található meg.
A szkript három fő funkcionális blokkra osztható, mindegyik ugyanazon az eseménykezelőn belül fut.
A burger menü kezeli a mobil menü reszponzív megjelenítését (az 'active' class kapcsolgatásával).
A minikvíz figyeli az opciók kattintását, összegyűjti a felhasználó által adott válaszokat, majd összeadja a pontszámot. A kvíz eredményét egy konténerbe írja, és ha a pontszám 3, külön gratuláló üzenetet küld.
A harmadik, egyben legösszetetteb rész egy foglalási űrlap,  amely biztosítja, hogy a felhasználó érvényes adatokat adjon meg. Megakadályozza az űrlap alapértelmezett elküldését a 'submit'-tal, és `isValid` változó segítségével megy végig a validáción. `True`-val indul, és `false` lesz, ha bármelyik ellenőrzés sikertelen. 8 különböző mezőt ellenőriz és ha hiba van, meghívja a `showError()` függvényt és beállítja az `isValid = false` értéket. Sikeres validálás után felugrik egy `alert("Foglalás sikeresen elküldve...")` üzenet, és az űrlap alaphelyzetbe áll (`form.reset()`).

A weboldal a Google Fonts által biztosított 'Roboto' betűtípust használja. A betűtípus a css/style.css fájl legelején van importálva az @import szabály segítségével. ('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap')

A weboldalon zászló emojikat is felhasználtam, amit a főoldal html fájljában hívtam meg. (https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/css/flag-icons.min.css)

Minden felhasznált külső forrás megjelölése:
- Google Fonts (https://fonts.google.com/): A 'Roboto' betűtípus biztosításához.
- A kódsablonok másolhatóságához, valamit a hibakereséshez a Google Gemini AI-t felhasználtam.
