// Converts the classaate 2's information to Upper Case and Lower Case
let cmate2_uppercase = classmate2Name.toUpperCase();
let cmate2_lowercase = classmate2Name.toLowerCase();
let cmate2birthplace_uppercase = classmate2Birthplace.toUpperCase();
let cmate2address_uppercase =  classmate2Address.toUpperCase();
let cmate2course_lowercase = classmate2Course.toLowerCase();

let message1 = `${myname_uppercase} was born ${birthdate} at ${birthplace_uppercase} and currently living at ${address_uppercase}. ${myname_lowercase} is taking up ${course_lowercase} and dreams to be ${dreamJob} after graduation.`;
let message2 = `${cmate1_uppercase} was born ${classmate1Birthdate} at ${cmate1birthplace_uppercase} and currently living at ${cmate1address_uppercase}. ${cmate1_lowercase} is taking up ${cmate1course_lowercase} and dreams to be ${dreamJob} after graduation.`;
let message3 = `${cmate2_uppercase} was born ${classmate2Birthdate} at ${cmate2birthplace_uppercase} and currently living at ${cmate2address_uppercase}. ${cmate2_lowercase} is taking up ${cmate2course_lowercase} and dreams to be ${dreamJob} after graduation.`;

// logs the message to the console and print the statement given
console.log(message1);
console.log(message2);
console.log(message3);
