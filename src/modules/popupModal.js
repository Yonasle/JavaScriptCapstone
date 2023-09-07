import getDetail from './getDetail.js';
import fetchComments from './fetchComments.js';
import submitComment from './submitComment.js';
import commentCounter from './commentCounter.js';

const newModal = document.getElementById('new-modal');
const newClosebtn = document.getElementById('new-close');
const newItemSection = document.getElementById('new-itemSection');
const newCommentSection = document.getElementById('new-commentSection');
const newCommentsHeading = document.getElementById('new-commentsHeading');
const newBtnAddComment = document.getElementById('new-btnAddComment');
const newUsernameInput = document.getElementById('new-username');
const newCommentInput = document.getElementById('new-comment');

const closeModal = () => {
  newModal.style.display = 'none';
  clearElements([newItemSection, newCommentsHeading, newCommentSection]);
};

const clearElements = (elements) => {
  elements.forEach((element) => {
    element.innerHTML = '';
  });
};

const displayItemDetail = async (id, data, comments) => {
  newModal.style.display = 'flex';

  newItemSection.innerHTML = `
    <img class='img-beautiful' src='${data.strMealThumb}'>
    <h2>${data.strMeal}</h2>
    <p class='p'>${data.strInstructions}</p>
  `;

  if (comments.length > 0) {
    const count = commentCounter(comments);
    newCommentsHeading.innerHTML = `<p class='commentCountTitle'>Comments(${count})</p>`;
    newCommentSection.innerHTML = comments
      .map(
        (comment) => `
          <div class="commentBox-beautiful">
            <p class="comment-name">${comment.username}:</p>
            <p class="commentText-beautiful">${comment.comment}</p>
            <p class="date-beautiful">${comment.creation_date}</p>
          </div>
        `,
      )
      .join('');
  }

  newBtnAddComment.addEventListener('click', async () => {
    const username = newUsernameInput.value;
    const comment = newCommentInput.value;

    if (username !== '' && comment !== '') {
      await submitComment(id, username, comment);
      newUsernameInput.value = '';
      newCommentInput.value = '';
      closeModal();
    }
  });

  newClosebtn.addEventListener('click', closeModal);
};

const popupModal = async (id) => {
  const data = await getDetail(`lookup.php?i=${id}`);
  const result = data.meals;
  const comments = await fetchComments(`RjyF2atccOw1gRFQE3W0/comments?item_id=${id}`);
  displayItemDetail(id, result[0], comments);
};

window.onclick = (event) => {
  if (event.target === newModal) {
    newModal.style.display = 'none';
    clearElements([newItemSection, newCommentsHeading, newCommentSection]);
  }
};

export default popupModal;
