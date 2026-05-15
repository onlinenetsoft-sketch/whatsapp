export const generateAvatar = (
  name
) => {
  return `https://ui-avatars.com/api/?name=${name}`;
};

export const truncateText = (
  text,
  length = 50
) => {
  if (text.length <= length) {
    return text;
  }

  return `${text.substring(
    0,
    length
  )}...`;
};

export const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
};