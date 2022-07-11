//==========================STRING===============
const DNA = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';

//==========================MAIN FUNCTION=======
function repeatedDNASequences(s) {
  const arr = [];
  let big = s.substring(10);
  for (let i = 0; i < s.length; i++) {
    const small = s.substring(i, 10 + i);

    if (big.length < small.length) break;
    if (arr.includes(small)) {
      big = big.substring(1);
      continue;
    }
    if (big.includes(small) && !arr.includes(small)) {
      arr.push(small);
    }

    big = big.substring(1);
  }

  return arr.sort();
}

console.dir(repeatedDNASequences(DNA));
