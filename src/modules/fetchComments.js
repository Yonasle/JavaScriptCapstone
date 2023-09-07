const fetchComments = async (endpoint) => {
  const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${endpoint}`;
  const res = await fetch(apiUrl);
  const commentsData = await res.json();
  return commentsData;
};

export default fetchComments;
