document.addEventListener('DOMContentLoaded', () => {

    // --- 1. BURGER MENÜ ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // --- Menü bezárása linkre kattintáskor ---
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Ellenőrzés hogy a mobil menü nyitva van-e
            if (nav.classList.contains('active')) {
                nav.classList.remove('active'); // Bezárás
            }
        });
    });

    // --- 2. KVÍZ PROGRAM ---
    const quizContainer = document.getElementById('quiz-result');
    const quizBtn = document.getElementById('quiz-btn');

    if (quizBtn) {
        quizBtn.addEventListener('click', () => {
            let score = 0;
            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');
            const q3 = document.getElementById('q3').value;

            // Helyes válaszok: Q1: b, Q2: a, Q3: 18
            if (q1 && q1.value === 'b') score++;
            if (q2 && q2.value === 'a') score++;
            if (q3 == 18) score++;

            let msg = `Eredményed: ${score} / 3 pont.`;
            if (score === 3) msg += " 👑 Tökéletes, felség!";

            quizContainer.innerHTML = `<strong>${msg}</strong>`;
            quizContainer.style.color = score === 3 ? "green" : "var(--primary)";
        });
    }

    // --- 3. ŰRLAP VALIDÁLÁS (Kötelező elem) ---
    const form = document.getElementById('royalForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Név ellenőrzés
            const name = document.getElementById('name');
            if (name.value.length < 3) {
                showError(name, "A név túl rövid!");
                isValid = false;
            } else clearError(name);

            // Email ellenőrzés
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                showError(email, "Érvénytelen email cím!");
                isValid = false;
            } else clearError(email);

            // Telefonszám ellenőrzés
            const phone = document.getElementById('phone');
            const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
            if (phone.value.trim() != "") {
                if (!phoneRegex.test(phone.value.trim())) {
                    showError(phone, "Érvénytelen formátum! (Helyes példa.: +36 30 123 4567)");
                    isValid = false;
                } else {
                    clearError(phone);
                }
            }

            // Kor ellenőrzés
            const kor = document.getElementById('age');
            const korErtek = kor.value; 

            if (korErtek === "") {
                showError(kor, "Adj meg egy életkort!");
                isValid = false;
            } else {
                // Csak akkor ellenőrizzük számként, ha nem üres
                const korSzam = parseInt(korErtek, 10); //Szám típusra alakítás

                if (isNaN(korSzam)) {
                    showError(kor, "Számot adj meg!");
                    isValid = false;
                } else if (korSzam < 10) {
                    showError(kor, "Túl fiatal vagy!");
                    isValid = false;
                } else if (korSzam > 122) {
                    showError(kor, "Túl idős vagy!");
                    isValid = false;
                } else {
                    // Ha minden feltételnek megfelel
                    clearError(kor);
                }
            }

            // Select ellenőrzés
            const country = document.getElementById('country');
            if (country.value === "") {
                showError(country, "Válassz országot!");
                isValid = false;
            } else clearError(country);

            // Dátum ellenőrzés
            const today = new Date().setHours(0, 0, 0, 0);
            const datum = document.getElementById('date');
            const selectedDate = new Date(datum.value);
            if (datum.value === "") {
                showError(datum, "Kérlek, add meg a látogatás dátumát!");
            } else if (!datum.value || selectedDate < today) {
                showError(datum, 'A dátum nem lehet múltbeli.');
                isValid = false;
            } else {
                clearError(datum);
            }

            // Kedvenc ellenőrzés
            const favourite = document.getElementById('favourite');
            if (favourite.value === "") {
                showError(favourite, "Válassz kedvencet!");
                isValid = false;
            } else clearError(favourite);

            // Checkbox ellenőrzés (showError-ral)
            const terms = document.getElementById('terms');
            if (!terms.checked) {
                showError(terms, "El kell fogadnod az adatkezelést!");
                isValid = false;
            } else clearError(terms);

            // Ha minden valid
            if (isValid) {
                alert("Foglalás sikeresen elküldve a Királyi Udvarba!");
                form.reset();
            }
        });
    }

    function getErrorSpan(input) {
        // Szülő div megkersesése (.form-group)
        const formGroup = input.closest('.form-group');
        // Span.error megkeresése ezen a div-en belül
        return formGroup ? formGroup.querySelector('.error') : null;
    }

    function showError(input, msg) {
        const errorSpan = getErrorSpan(input);
        if (errorSpan) {
            errorSpan.innerText = msg;
            errorSpan.style.display = 'block';
        }
        input.style.borderColor = 'red';
    }

    function clearError(input) {
        const errorSpan = getErrorSpan(input);
        if (errorSpan) {
            errorSpan.style.display = 'none';
        }
        input.style.borderColor = '#ccc';
    }
});