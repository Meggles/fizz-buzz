// Fizz buzz is a math game designed to teach the concept of division.
// Loop through the numbers 1-100 and log Fizz if divisible by 3,
// Buzz if divisible by 5, and FizzBuzz if divisible by 15

for(var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  }
  if (i % 5 === 0) {
    console.log('Buzz');
  }
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  }
}

// NOTE: this would probably be more performant as a switch statement
// TODO: if NOTE == true, rewrite as switch statement :)
