export const people = [
  {
    id: "1",
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "2",
    name: "Kevin",
    age: 25,
    gender: "male",
  },
  {
    id: "3",
    name: "Martin",
    age: 27,
    gender: "male",
  },
  {
    id: "4",
    name: "Charlie",
    age: 27,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredMovies = people.filter((person) => person.id === String(id));
  return filteredMovies[0];
};
