const apiUrl = 'https://opentdb.com/api.php';

const getQuestions = (categoryId, amountOfQuestions, difficulty, type) =>
  fetch(`${apiUrl}?category=${categoryId}&amount=${amountOfQuestions}&difficulty=${difficulty}&type=${type}`)
    .then((res) => res.json())
    .then((res) => res);

export { getQuestions };
