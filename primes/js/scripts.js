var primesToHere = function(number) {
  var primes = [2];
  var counter = 2;
  var possible_primes = [];
  var holding_pattern = [];
  while (counter < number) {
    possible_primes.push(counter +=1);
  }

  possible_primes.forEach(function(possible) {
    if (possible % 2 != 0) {
      primes.push(possible);
    }
  });

  return primes;
};

// possible_primes.forEach(function(possible) {
//   if (possible % 2 != 0) {
//     holding_pattern.push(possible);
//   }
//   possible_primes = holding_pattern;
// });
//
// return primes;
// };
