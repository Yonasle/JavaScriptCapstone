import popupModal from './popupModal.js';

const newApiKey = '1';
const newApiBaseUrl = 'https://www.themealdb.com/api/json/v1';
const newAppId = 'RjyF2atccOw1gRFQE3W0';
const newInvolvementApiBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const mealListContainer = document.getElementById('list');

const fetchCategoryMeals = async (category) => {
  const res = await fetch(`${newApiBaseUrl}/${newApiKey}/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals || [];
};

const fetchMealLikes = async (mealName) => {
  const res = await fetch(`${newInvolvementApiBaseUrl}/apps/${newAppId}/likes`);
  const data = await res.json();
  const mealLikes = data.find((item) => item.item_id === mealName);
  return mealLikes ? mealLikes.likes : 0;
};

const likesCountUpdate = (element, count) => {
  element.textContent = `${count} Likes`;
};

const transferLikes = async (mealName) => {
  const requestBody = {
    item_id: mealName,
  };

  const res = await fetch(`${newInvolvementApiBaseUrl}/apps/${newAppId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  return res.status === 201;
};

const displayMeals = async (meals) => {
  mealListContainer.innerHTML = '';

  meals.forEach(async (meal) => {
    const divMeal = document.createElement('div');
    divMeal.classList.add('meal');

    const imgMeal = document.createElement('img');
    imgMeal.src = `${meal.strMealThumb}/preview`;
    imgMeal.alt = meal.strMeal;

    const mealTitle = document.createElement('h3');
    mealTitle.textContent = meal.strMeal;

    const counterLikes = document.createElement('div');
    counterLikes.classList.add('likes-container-beautiful');

    const likesIcon = document.createElement('span');
    likesIcon.classList.add('likes-icon');
    likesIcon.textContent = '❤️';

    const countLike = document.createElement('span');
    countLike.classList.add('likes-count');

    const btnComment = document.createElement('button');
    btnComment.textContent = 'Comments';
    btnComment.classList.add('comments-button-beautiful');

    btnComment.addEventListener('click', () => popupModal(meal.idMeal));

    counterLikes.appendChild(likesIcon);
    counterLikes.appendChild(countLike);

    divMeal.appendChild(imgMeal);
    divMeal.appendChild(mealTitle);
    divMeal.appendChild(counterLikes);
    divMeal.appendChild(btnComment);

    mealListContainer.appendChild(divMeal);

    const likes = await fetchMealLikes(meal.strMeal);
    likesCountUpdate(countLike, likes);
  });
};

export {
  fetchCategoryMeals, displayMeals, transferLikes, likesCountUpdate,
};
