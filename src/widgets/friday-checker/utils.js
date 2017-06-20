/*
 Copyright http://isitfridayyet.net/
 */
export const iify = () => {
  const now = new Date();
  const today = now.getDay();
  const daywanted = 5;
  const offset = today - daywanted;
  switch (offset) {
    case -1:
    case 6:
      return ("Almost.");
    case 0:
      return ("Yep.");
    case 1:
    case -6:
      return ("You just missed it.");
    default:
      return ("Nope.");
  }
};