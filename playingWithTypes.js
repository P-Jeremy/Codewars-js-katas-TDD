/**
 * JavaScript is a dynamically typed programming language. 
 * This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.
 * You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.
 * For example:
 * typing(2);    //returns number=2
 * typing(true); //returns boolean=true
 * 
 * https://www.codewars.com/kata/543e308b23ccbda148001526
 */

function typing(param){
  if (param === undefined) return 'undefined'
  const value = typeof param === 'string' ? `"${param}"` : 
    typeof param === 'function' ? `${param}` : `${JSON.stringify(param)}`
  const result = `${typeof param}=${value}`

  return result
}

module.exports = typing