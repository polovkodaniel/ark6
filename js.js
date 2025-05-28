function oblicz() {
      const input = document.getElementById("hexInput");
      const paragraf = document.getElementById("wynik");
      const liczbaDziesietna = parseFloat(input.value);

      if (isNaN(liczbaDziesietna)) {
        paragraf.innerText = "Wprowadź poprawną liczbę.";
        return;
      }

      const liczbaBinarna = liczbaDziesietna.toString(2);

      // Dodawanie spacji co 4 cyfry od PRAWEJ strony
      let wynikRozdzielony = "";
      let licznik = 0;
      for (let i = liczbaBinarna.length - 1; i >= 0; i--) {
        wynikRozdzielony = liczbaBinarna[i] + wynikRozdzielony;
        licznik++;
        if (licznik % 4 === 0 && i !== 0) {
          wynikRozdzielony = " " + wynikRozdzielony;
        }
      }

      paragraf.innerHTML = wynikRozdzielony + "<sub>(2)</sub>";
    }