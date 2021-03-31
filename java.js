// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

let walk_park= "I can walk in the park all day!"
let park_part= walk_park.slice(18,23)
console.log(park_part)


// Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

let upper = new String("Hello World")
upper = upper.toUpperCase()
console.log(upper)

// Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

let lower = new String("Hello World")
lower = lower.toLowerCase()
console.log(lower)

// Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

let java_script = "JavaScript"
console.log(java_script.slice(3,6))


// Check if the sentence "nice shoes" contains the letter l or n.
console.log(new String("nice shoes").indexOf("l"),new String("nice shoes").indexOf("n"))


// Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB

let given_string = "Bananas"
let new_string= given_string.charAt(0) +given_string+given_string.slice(-1)
console.log(new_string)

// Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

let given_string_2 = "Potato"
let new_string_2 = given_string_2.slice(0,3)+given_string_2+given_string_2.slice(0,3)
console.log(new_string_2)

// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

let frist_string = "mozart"
let save_string= frist_string.substring(1,frist_string.length-1)
let new_new_string= frist_string.slice(frist_string.length-1,frist_string.length)+save_string+frist_string.slice(0,1)
console.log(new_new_string)

// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let name= "Lars"
let city="Düsseldorf"
let street="teststreet"

console.log(`My Name is ${name} and i live in ${city} at the ${street}` )


// Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let brown_fox = "the quick brown fox"
let new_fox= brown_fox.charAt(0).toUpperCase()+brown_fox.slice(1)
console.log(new_fox)
