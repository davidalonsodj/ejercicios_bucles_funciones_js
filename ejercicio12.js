const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    const matchingMutants = [];
  
    for (const mutant of mutants) {
      if (mutant.power.toLowerCase() === power.toLowerCase()) {
        matchingMutants.push(mutant.name);
      }
    }
  
    if (matchingMutants.length > 0) {
      return `Mutantes con el poder "${power}": ${matchingMutants.join(', ')}.`;
    } else {
      return `Ningún mutante tiene el poder "${power}".`;
    }
  }
  

  console.log(findMutantByPower(mutants, 'steel skin')); 

  