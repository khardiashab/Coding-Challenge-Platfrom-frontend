// create a function to capitalize the string if is not capitalize 
export const capitalize = (str : string )  => {
  return str.charAt(0).toUpperCase() + str.slice(1);

}