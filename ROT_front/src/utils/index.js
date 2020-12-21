export const calculatePercentages = (likes, dislikes) => {
  let totalVotes = 0;
  let likesPercentage = 0;
  let dislikesPercentage = 0;
  let lks = Number(likes);
  let disLsk = Number(dislikes);

  if (likes !== null && dislikes !== null) {
    totalVotes = lks + disLsk;
    likesPercentage = (lks / totalVotes) * 100;
    dislikesPercentage = (disLsk / totalVotes) * 100;
  }

  return [likesPercentage, dislikesPercentage];
};
