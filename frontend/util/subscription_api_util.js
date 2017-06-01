export const fetchSubscribers = (subjectId) => {
  return $.ajax({
    url: `/api/subscriptions/${subjectId}`
  });
};

export const createSubscriber = (subjectId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/subscriptions`,
    data: {subscription: {subject_id: subjectId}}
  });
};

export const removeSubscription = (subjectId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/subscriptions/${subjectId}`
  });
};
