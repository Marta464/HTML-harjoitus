'use strict';

const candidateCount = Number(prompt('Anna ehdokkaiden määrä:'));
const candidates = [];

for (let i = 0; i < candidateCount; i++) {
  const name = prompt(`Anna ehdokkaan ${i + 1} nimi:`);
  candidates.push({
    name: name,
    votes: 0,
  });
}

const voterCount = Number(prompt('Anna äänestäjien määrä:'));

for (let i = 0; i < voterCount; i++) {
  const vote = prompt(`Äänestäjä ${i + 1}, ketä äänestät? (Jätä tyhjäksi tyhjää ääntä varten):`);

  if (vote) {
    for (const candidate of candidates) {
      if (candidate.name.toLowerCase() === vote.toLowerCase()) {
        candidate.votes++;
      }
    }
  }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`Voittaja on ${candidates[0].name} (${candidates[0].votes} ääntä).`);
console.log('Tulokset:');

for (const candidate of candidates) {
  console.log(`${candidate.name}: ${candidate.votes} ääntä`);
}
