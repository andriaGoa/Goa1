const animals = new Map();
animals.set('Dog', 'Woof');
animals.set('Cat', 'Meow');
animals.set('Cow', 'Moo');
for (const [animal, sound] of animals) {
  console.log(`${animal} says: ${sound}`);
}
