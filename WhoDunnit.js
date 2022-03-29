
1
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict); //it is 'Miss Scarlet'




2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer(); //cant be executed because murderer is declared as const
const verdict = declareMurderer();
console.log(verdict); //It is 'Mrs. Peacock'




3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock'; //because of this let, once out of this {}, its gone
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict); //'Mrs. Peacock'

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict); //'Professor Plum'




4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`; //'Miss Scarlet', 'Professor Plum','Colonel Mustard'
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`); //'Mrs. Peacock'


5
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict); //'Revolver'



  6
  let murderer = 'Colonel Mustard';

  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      murderer = 'Mrs. White';
    }
  
    plotTwist();
  }
  
  const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer(); //plotTwist() is executed here too
  const verdict = declareMurderer(); //'Mrs. White'
  console.log(verdict);


  7
  let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard'; //this wont exist soon as it it  is "let"

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer(); // Mr. Green
const verdict = declareMurderer();
console.log(verdict);




8
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario(); //Colonel Mustard
  const verdict = declareWeapon();
  console.log(verdict);


  9
  let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock'; //this will never gets outside of if statement
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);