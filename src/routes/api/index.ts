export async function get({params}) {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = data.results.map((data: {name: string, url: string}, index: number) => {
    return {
      id: index + 1,
      name: data.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
    }
  });
  return {
    status: 200,
    body: pokemon
  }
};

