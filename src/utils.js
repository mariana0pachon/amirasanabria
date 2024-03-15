export function convertToTitle(str) {
  var words = str.split("_");

  var result = words
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return result;
}
