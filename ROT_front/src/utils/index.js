import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

/**
 * Function with an arithmetic operations
 *
 * @param {number} likes number of likes
 * @param {number} dislikes number of dislikes
 * @return {array} array of two positions with calculated percentages of likes/dislikes.
 */
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

/**
 * Function to extract the number of a calculated time response
 *
 * @param {string} str calculated tome response eg: "1 minute ago"
 * @return {number} extracted number.
 */
const extractNumber = (str = '') => Number(str.split('')[0]);

/**
 * Function to transform dates
 *
 * @param {timestamp} dateValue date provided in string format
 * @return {string} calculated time since the entry was created.
 */
export const timeCalc = (dateValue) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo('en-US');
  const formattedDate = new Date(dateValue).valueOf();

  const minutes = timeAgo.format(formattedDate - 60 * 1000);
  const hours = timeAgo.format(formattedDate - 2 * 60 * 60 * 1000);
  const days = timeAgo.format(formattedDate - 24 * 60 * 60 * 1000);
  const now = timeAgo.format(new Date());

  if (extractNumber(minutes) < 60) return minutes;

  if (extractNumber(minutes) > 59) return hours;

  if (extractNumber(hours) > 24) return days;

  return now;
};
