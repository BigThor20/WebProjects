creare tabel sudoku ca in exemplul http://www.sudoku.com/

- request pentru datele complete a tabelului
- datele(exercitiul) sunt afisate random
- tabelul trebuie sa aiba setare de dificultate (easy, medium, hard) initial vine setat pe easy
- in funtie de nivelul de dificultate difera numarul de itemi care sunt afisati - random
- daca se schimba dificultate in timpul unui joc, tabelul se reseteaza si se pun numerele corespunzatoare dificultati
- timer pentru a putea vedea cat timp a trecut de la inceputul jocului - se reseteaza la schimbarea dificultati, inceperi jocului nou. Se opeste la terminarea completa a jocului
- button de "hints" - cand se apasa se arata un numar extra, care nu e afisat. In functie de dificultate are mai putine hinturi (easy:5, medium:4, hard:3). resetat la new game sau scimbarea dificultati
- new game button, seteaza un alt joc random cu aceasi dificultate selectata
- validare: 
	1) pe linie: daca mai este acelasi numar pe linia respectiva toata linia se coloreaza rosu
	2) pe coloana: daca mai este acelasi numar pe coloana respectiva toata coloana se coloreaza rosu
	3) pe patrat: daca mai este acelasi numar in patrat respectiva tot patratul se coloreaza rosu
	- validarea se reface cand se schimba numerele (nu raman rosi daca jucatorul se corecteaza), jucatorul poate continua chiar daca are numere gresit introduse
 	
La terminarea unui joc se primeste o alerta de felicitare cu timpul in care a terminat jocul.