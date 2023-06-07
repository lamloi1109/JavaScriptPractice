const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Print out all the cat names in to catNames variable.
async function fetchCatsAPI(api) {
  try {
    if (typeof api !== 'string' || api === '') {
      throw new Error('Url api is wrong~');
    }
    const catsAPI = api;
    const response = await fetch(catsAPI);
    const cats = await response.json();
    const catNameList = cats.reduce((names, cat) => {
      const { name } = cat;
      names.push(name);
      return names;
    }, []);
    return catNameList;
  } catch (error) {
    console.log(error);
  }
}
// Sử dụng keyword await để access giá trị trong Promise
const catNameList = await fetchCatsAPI(catsAPI);
console.log(catNameList);
