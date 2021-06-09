const apiUrl = 'https://opentdb.com/api.php';

const getQuestions = (categoryId, amountOfQuestions) =>
  fetch(`${apiUrl}?category=${categoryId}&amount=${amountOfQuestions}`)
    .then((res) => res.json())
    .then((res) => res.results);

export { getQuestions };
