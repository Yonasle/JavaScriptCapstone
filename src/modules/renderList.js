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

const updateLikesCount = (element, count) => {
  element.textContent = `${count} Likes`;
};

const sendLike = async (mealName) => {
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
    const mealElement = document.createElement('div');
    mealElement.classList.add('meal');

    const mealImage = document.createElement('img');
    mealImage.src = `${meal.strMealThumb}/preview`;
    mealImage.alt = meal.strMeal;

    const mealTitle = document.createElement('h3');
    mealTitle.textContent = meal.strMeal;

    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes-container-beautiful');

    const likesIcon = document.createElement('span');
    likesIcon.classList.add('likes-icon');
    likesIcon.textContent = '❤️';

    const likesCount = document.createElement('span');
    likesCount.classList.add('likes-count');

    const commentsButton = document.createElement('button');
    commentsButton.textContent = 'Comments';
    commentsButton.classList.add('comments-button-beautiful');

    commentsButton.addEventListener('click', () => popupModal(meal.idMeal));

    likesContainer.appendChild(likesIcon);
    likesContainer.appendChild(likesCount);

    mealElement.appendChild(mealImage);
    mealElement.appendChild(mealTitle);
    mealElement.appendChild(likesContainer);
    mealElement.appendChild(commentsButton);

    mealListContainer.appendChild(mealElement);

    const likes = await fetchMealLikes(meal.strMeal);
    updateLikesCount(likesCount, likes);
  });
};

export {
  fetchCategoryMeals, displayMeals, sendLike, updateLikesCount,
};
