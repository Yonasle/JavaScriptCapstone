const getDetail = async (endpoint) => {
  const apiurl = `https://www.themealdb.com/api/json/v1/1/${endpoint}`;
  const res = await fetch(apiurl);
  return res.json();
};

export default getDetail;
