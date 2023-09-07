import './style.css';
import './logo.png';
import {
  fetchCategoryMeals, displayMeals, transferLikes, likesCountUpdate,
} from './modules/renderList';
import { updateCategoryCounts } from './modules/mealCounter.js';

const menuLinks = document.querySelectorAll('header a');
const listMeals = document.getElementById('list');

const renderMealCategory = async (category) => {
  const categoryMeals = await fetchCategoryMeals(category);
  displayMeals(categoryMeals);
};

const setupHeaderLinkListeners = () => {
  menuLinks.forEach((newLink) => {
    const { dataset: { category } } = newLink;
    newLink.addEventListener('click', async (ev) => {
      ev.preventDefault();
      await renderMealCategory(category);
    });
  });
};

const startApp = async () => {
  await updateCategoryCounts();
  setupHeaderLinkListeners();
  renderMealCategory('Seafood');
};

listMeals.addEventListener('click', async (e) => {
  if (e.target.classList.contains('likes-icon')) {
    const mealTitleElement = e.target.closest('.meal').querySelector('h3');
    const mealTitle = mealTitleElement.textContent;
    const likesCountElement = e.target.nextElementSibling;
    const curLikes = parseInt(likesCountElement.textContent, 10);
    const updatedLikes = curLikes + 1;
    const messageSuccess = await transferLikes(mealTitle);
    if (messageSuccess) {
      likesCountUpdate(likesCountElement, updatedLikes);
    }
  }
});

startApp();
