const submitComment = async (id, userName, com) => {
  const apiurl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RjyF2atccOw1gRFQE3W0/comments?item_id=${id}`;
  const response = await fetch(apiurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id.toString(),
      username: userName,
      comment: com,
    }),
  });
  return response.json();
};

export default submitComment;
