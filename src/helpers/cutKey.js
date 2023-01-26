export const cutKey = (str) => {
  return str.substr(0, 10) + '...' + str.substr(str.length-4, str.length);
}