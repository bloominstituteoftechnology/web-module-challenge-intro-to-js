import functions from './index';

describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});

describe('multiplyFunction', ()=>{
    it('a * b', ()=>{
        expect(functions.multiply(5, 7)).toBe(35);
    })
});

describe('dogYearsFunction', ()=>{
    it('returns humanYears * 7', ()=>{
        expect(functions.dogYears(5)).toBe(35);
    })
});

describe('hungryDogFunction', ()=>{
  it('Dog is 1 year and is 5lbs or less', ()=>{
    expect(functions.hungryDog(4, 1)).toBe(0.2);
  })
  it('Dog is 1 year and 6 - 10lbs', ()=>{
    expect(functions.hungryDog(7, 1)).toBe(0.28);
  })
  it('Dog is 1 year and 11 - 15lbs', ()=>{
    expect(functions.hungryDog(14, 1)).toBe(0.42);
  })
    it('Dog is 1 year and weighs more than 15lbs', ()=>{
      expect(functions.hungryDog(16, 1)).toBe(0.32);
  })
    it('Dog is 2-4 months', ()=>{
    expect(functions.hungryDog(20, 0.2)).toBe(2);
  })
    it('Dog is 4-7 months', ()=>{
    expect(functions.hungryDog(16, 0.33)).toBe(1.6);
  })
    it('Dog is +7 months', ()=>{
    expect(functions.hungryDog(4, 0.583)).toBe(0.16);
  })
});
describe('gameFunction', ()=>{
    it('return win, lose or tie', ()=>{
        expect(functions.game('rock', 'scissors')).toBe('you win!');
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('rock', 'paper')).toBe('you lose!');
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('rock', 'rock')).toBe(`it's a tie`);
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('paper', 'rock')).toBe(`you win!`);
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('paper', 'scissors')).toBe(`you lose!`);
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('paper', 'paper')).toBe(`it's a tie`);
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('scissors', 'paper')).toBe(`you win!`);
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('scissors', 'rock')).toBe(`you lose!`);
    })
});
describe('milesFunction', ()=>{
    it('return km * 0.621371', ()=>{
        expect(functions.miles(10)).toBe(6.21371);
    })
});

describe('feetFunction', ()=>{
    it('return cm / 30.48', ()=>{
        expect(functions.feet(160)).toBe(5.2493438320209975);
    })
});
describe('annoyingSongFunction', ()=>{
    it('a string that counts down based on the number imputted', ()=>{
        expect(functions.annoyingSong(5)).toBe(`${5} bottles of soda on the wall, ${5} bottles of soda, take one down pass it around ${5 - 1} bottles of soda on the wall`);
    })
});
describe('gradeFunction', ()=>{
    it('expect A', ()=>{
        expect(functions.grade(90)).toBe('you got an A');
    })
    it('expect A', ()=>{
      expect(functions.grade(95)).toBe('you got an A');
  })
    it('expect B', ()=>{
        expect(functions.grade(80)).toBe('you got a B');
    })
    it('expect B', ()=>{
      expect(functions.grade(85)).toBe('you got a B');
  })
    it('expect C', ()=>{
        expect(functions.grade(70)).toBe('you got a C');
    })
    it('expect C', ()=>{
      expect(functions.grade(75)).toBe('you got a C');
  })
    it('expect D', ()=>{
        expect(functions.grade(60)).toBe('you got a D');
    })
    it('expect D', ()=>{
      expect(functions.grade(65)).toBe('you got a D');
  })
    it('expect F', ()=>{
        expect(functions.grade(59)).toBe('you got an F');
    })
    it('expect F', ()=>{
      expect(functions.grade(20)).toBe('you got an F');
  })
});
