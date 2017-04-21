export const createSubject = (subject) => {
  return $.ajax({
    method: 'POST',
    url: '/api/subjects',
    data: subject
  });
};

export const updateSubject = (subject) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/subjects/${subject.id}`,
    data: subject
  });
};

export const deleteSubject = (subject) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/subjects${subject.id}`
  });
};
