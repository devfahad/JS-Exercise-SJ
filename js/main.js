// Task - 1 : Printing Current Day and Time

let d, days, currentDayNumber, hours, currentTime;
d = new Date();
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
currentDayNumber = d.getDay();
// Printing Current Day
document.getElementById("day").innerHTML = days[currentDayNumber];
hours = d.getHours();
// Converting to AM and PM
if (hours >= 12) {
  hours -= 12;
  currentTime = hours + ':' + d.getMinutes() + ':' + d.getSeconds() + ' PM';
} else {
  hours += 12;
  currentTime = hours + ':' + d.getMinutes() + ':' + d.getSeconds() + ' AM';
}
// Printing Current Time
document.getElementById("time").innerHTML = currentTime;

// Task - 2 : Printing Current Date

let currentDate;
currentDate = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getUTCFullYear();
// Printing Current Date
document.getElementById("date").innerHTML = currentDate;

// Task - 3 : Function for Reversing a number
function reverseNum(num) {
  return (
    num.toString().split('').reverse().join('')
  )
}
document.getElementById('reverse-number').addEventListener('click', function (e) {
  let val = document.getElementById('original-value').value;
  // console.log(c);
  let reversedVal = reverseNum(val);
  document.getElementById('reversed-number').innerHTML = reversedVal;

  e.preventDefault();
})

// Task - 4 : Function for Capitalizing a string
function capitalizeStr(str) {
  let input = str.toLowerCase().split(" "); // Seperating each words and make an array
  input = input.map(function (value, index, array) { // value is the iterator
    return value.charAt(0).toUpperCase() + value.slice(1);
  });

  return input.join(" ");
}
document.getElementById('capitalize-str').addEventListener('click', function (e) {
  let val = document.getElementById('original-str').value;
  // console.log(val);
  let capitalizedVal = capitalizeStr(val);
  document.getElementById('capitalized-str').innerHTML = capitalizedVal;
  e.preventDefault();
})

// Task - 5 : Function for finding the Longest Country Name
function longestCountryName(str) {
  let countries = str.split(','); // Separating countries

  let max = -1,
    longestCountry = [];
  countries.map(function (country, index, array) {
    if (max < country.length) {
      max = country.length;
      longestCountry = country;
    } else if (max === country.length) { // for same longest countries
      longestCountry = longestCountry + ', ' + country;
    }
    return longestCountry;
  })
  return longestCountry;
}
document.getElementById('longest-country-btn').addEventListener('click', function (e) {
  let input = document.getElementById('countries').value;
  console.log(typeof (input))
  console.log(input);
  document.getElementById('longest-country').innerHTML = longestCountryName(input);

  e.preventDefault();
})