const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

// ELENCO DEI NOMI DEGLI STUDENTI
studenti.forEach((studente) => console.log(studente.nome));

// PRIMO STUDENTE CON VOTO MAGGIORE DI 90
const studenteVoto90 = studenti.find((studente) => studente.voto > 90);
console.log(studenteVoto90);

// MEDIA VOTI DEGLI STUDENTI
function mediaVoti(studenti) {
  const sommaVoti = studenti.reduce(
    (accumulator, person) => (accumulator += person.voto),
    0
  );
  return console.log(Math.round(sommaVoti / studenti.length));
}

mediaVoti(studenti);

// NOMI DEGLI STUDENTI IN ELENCO IN MAIUSCOLO
const nomiStudentiMaiuscolo = studenti.map((studente) =>
  studente.nome.toUpperCase()
);
console.log(nomiStudentiMaiuscolo);

// STUDENTI CON VOTI SUPERIORI A 85
const studentiVoto85 = studenti.filter((studente) => studente.voto > 85);
console.log(studentiVoto85);
