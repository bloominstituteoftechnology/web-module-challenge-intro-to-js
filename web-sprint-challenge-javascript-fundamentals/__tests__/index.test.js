import functions from '../index';
const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];

  const add = function(num1, num2){
      return num1 + num2;
  }

//closures
describe('summation', ()=>{
    it('summation returns a number', ()=>{
        expect(functions.summation(4)).toBe(10);
    })
});

//callbacks and array methods
describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});

describe('animalNames', ()=>{
    it('animalNames returns an array', ()=>{
        expect(functions.animalNames(zooAnimals)).toEqual(expect.arrayContaining(
            ["name: Jackal, asiatic, scientific: Canis aureus", "name: Screamer, southern, scientific: Chauna torquata", "name: White spoonbill, scientific: Platalea leucordia", "name: White-cheeked pintail, scientific: Anas bahamensis", "name: Black-backed jackal, scientific: Canis mesomelas", "name: Brolga crane, scientific: Grus rubicundus", "name: Common melba finch, scientific: Pytilia melba", "name: Pampa gray fox, scientific: Pseudalopex gymnocercus", "name: Hawk-eagle, crowned, scientific: Spizaetus coronatus", "name: Australian pelican, scientific: Pelecanus conspicillatus"]
        ));
    })
});

describe('lowerCaseNames', ()=>{
    it('lowerCaseNames returns an array', ()=>{
        expect(functions.lowerCaseNames(zooAnimals)).toEqual(expect.arrayContaining(
            [
                'jackal, asiatic',
                'screamer, southern',
                'white spoonbill',
                'white-cheeked pintail',
                'black-backed jackal',
                'brolga crane',
                'common melba finch',
                'pampa gray fox',
                'hawk-eagle, crowned',
                'australian pelican'
              ]
        ));
    })
});

describe('lowPopulationAnimals', ()=>{
    it('animalNames returns an array', ()=>{
        expect(functions.lowPopulationAnimals(zooAnimals)).toEqual(expect.arrayContaining(
            [
                {
                  animal_name: 'Screamer, southern',
                  population: 1,
                  scientific_name: 'Chauna torquata',
                  state: 'Alabama'
                },
                {
                  animal_name: 'White-cheeked pintail',
                  population: 1,
                  scientific_name: 'Anas bahamensis',
                  state: 'Oregon'
                },
                {
                  animal_name: 'Black-backed jackal',
                  population: 2,
                  scientific_name: 'Canis mesomelas',
                  state: 'Washington'
                }
              ]
        ));
    })
});

describe('USApop', ()=>{
    it('USApop returns an array', ()=>{
        expect(functions.USApop(zooAnimals)).toEqual(56);
    })
});
describe('consume', ()=>{
    it('consume returns a number or string', ()=>{
        expect(functions.consume(2, 5, add)).toBe(add(2, 5));
    })
});

describe('add', ()=>{
    it('add returns a number', ()=>{
        expect(functions.add(2,5)).toBe(7);
    })
});

describe('multiply', ()=>{
    it('multiply returns a number', ()=>{
        expect(functions.multiply(2,5)).toBe(10);
    })
});

describe('greeting', ()=>{
    it('greeting returns a string', ()=>{
        expect(functions.greeting('Jane', 'Doe')).toBe(`Hello Jane Doe, nice to meet you!`);
    })
});



// prototypes
describe('Instance of CuboidMaker', () => {
    let cuboid
    beforeEach(() => {
      cuboid = new functions.CuboidMaker({
        length: 4,
        width: 5, 
        height:5,
      })
    })
    it('[1] initializes with length', () => {
        console.log(cuboid);
      expect(cuboid.length).toBe(4)
    })
    it('[2] initializes with the width', () => {
      expect(cuboid.width).toBe(5)
    })
    it('[3] initializes with an empty height', () => {
      expect(cuboid.height).toBe(5)
    })
    it('[4] has volume and surfaceArea methods', () => {
      expect(cuboid.__proto__.volume).toBeDefined()
      expect(cuboid.__proto__.surfaceArea).toBeDefined()
    })
    it('[5] has a volume', () => {
      const vol = cuboid.volume()
      expect(vol).toBe(100)
    })
    it('[5] has a surface', () => {
        const sur = cuboid.surfaceArea()
        expect(sur).toBe(130)
      })
  })


//classes

describe('Instance of CuboidMakerTwo', () => {
    let cuboidTwo
    beforeEach(() => {
      cuboidTwo = new functions.CuboidMakerTwo({
        length: 4,
        width: 5, 
        height:5,
      })
    })
    it('[1] initializes with length', () => {
        console.log(cuboidTwo);
      expect(cuboidTwo.length).toBe(4)
    })
    it('[2] initializes with the width', () => {
      expect(cuboidTwo.width).toBe(5)
    })
    it('[3] initializes with an empty height', () => {
      expect(cuboidTwo.height).toBe(5)
    })
    it('[4] has volume and surfaceArea methods', () => {
      expect(cuboidTwo.__proto__.volume).toBeDefined()
      expect(cuboidTwo.__proto__.surfaceArea).toBeDefined()
    })
    it('[5] has a volume', () => {
      const vol = cuboidTwo.volume()
      expect(vol).toBe(100)
    })
    it('[5] has a surface', () => {
        const sur = cuboidTwo.surfaceArea()
        expect(sur).toBe(130)
      })
  })