export const regexp = {
  img: /([^\s]+(\.?(jpg|png|gif|bmp))$)/i,
  email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
  price: /\d*\.\d{2}$/,
  password: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i
};
