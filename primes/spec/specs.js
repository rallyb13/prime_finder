describe('primesToHere', function() {
  it("recognizes that 2 is the first prime", function() {
    expect(primesToHere(2)).to.eql([2]);
  });

  it("recognizes the prime numbers up to 6 are 2, 3, and 5", function() {
    expect(primesToHere(6)).to.eql([2, 3, 5]);
  });

  it("recognizes the prime numbers past those divisible by two different primes", function() {
    expect(primesToHere(11)).to.eql([2, 3, 5, 7, 11])
  });
});
