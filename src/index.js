import './style.css';
import './logo.png';
import {
  fetchCategoryMeals, displayMeals, sendLike, updateLikesCount,
} from './modules/renderList';
import { updateCategoryCounts } from './modules/mealCounter.js';

const headerLinks = document.querySelectorAll('header a');
const mealListContainer = document.getElementById('list');

const renderMealCategory = async (category) => {
  const categoryMeals = await fetchCategoryMeals(category);
  displayMeals(categoryMeals);
};

const setupHeaderLinkListeners = () => {
  headerLinks.forEach((link) => {
    const { dataset: { category } } = link;
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      await renderMealCategory(category);
    });
  });
};

const initializeApp = async () => {
  await updateCategoryCounts();
  setupHeaderLinkListeners();
  renderMealCategory('Seafood');
};

mealListContainer.addEventListener('click', async (e) => {
  if (e.target.classList.contains('likes-icon')) {
    const mealTitleElement = e.target.closest('.meal').querySelector('h3');
    const mealTitle = mealTitleElement.textContent;
    const likesCountElement = e.target.nextElementSibling;
    const currentLikes = parseInt(likesCountElement.textContent, 10);
    const updatedLikes = currentLikes + 1;
    const success = await sendLike(mealTitle);
    if (success) {
      updateLikesCount(likesCountElement, updatedLikes);
    }
  }
});

initializeApp();