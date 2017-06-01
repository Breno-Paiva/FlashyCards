export const fetchSubscribers = (subjectId) => {
  return $.ajax({
    url: `/api/subscriptions/${subjectId}`
  });
};
