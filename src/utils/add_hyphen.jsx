/**
 *
 * @param {string} title -  The title of the page route.
 * @returns {string} The title of the page replacing space by hyphen in lowercase
 *
 */

export function addHyphen(title) {
  if (!title) return "";
  return title?.toLowerCase()?.split(" ")?.join("-");
}
