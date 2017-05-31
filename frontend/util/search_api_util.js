export const searchSubjects = (query) => {
  return $.ajax({
    url: `/api/search/${query}`
  });
};
