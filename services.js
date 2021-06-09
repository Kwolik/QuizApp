const apiUrl = 'https://opentdb.com/api.php';

const getQuestions = (categoryId) =>
  fetch(`${apiUrl}?category=${categoryId}&amount=10`)
    .then((res) => res.json())
    .then((res) => res.results);

export { getQuestions };
