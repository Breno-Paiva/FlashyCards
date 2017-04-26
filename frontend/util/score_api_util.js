export const createScore = (score) => {
  return $.ajax({
    method: 'POST',
    url: `/api/scores`,
    data: {score}
  });
};

export const updateScore = (score) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/scores/${1}`,
    data: {score}
  });
};
