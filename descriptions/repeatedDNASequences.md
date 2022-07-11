# repeatedDNASequences

All DNA is composed of a series of nucleotides abbreviated as `A`, `C`, `G`, and `T`. In research, it can be useful to identify repeated sequences within DNA.

Write a function to find all the 10-letter sequences (substrings) that occur more than once in a DNA molecule `s`, and return them in `lexicographical order`. These sequences can overlap.

Example
For 
```javascript
const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
```
, the output should be`repeatedDNASequences(s) = ["AAAAACCCCC", "CCCCCAAAAA"]`.

Input/Output

- **[execution time limit] 4 seconds (js)**
- **[input] string s**
    
    *Guaranteed constraints:*`0 ≤ s.length ≤ 5000`.
    
- **[output] array.string**
    - An array containing all of the potential 10-letter sequences that occur more than once in `s`.

[SOLUTION >](../tasks/repeatedDNASequences.js) &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[MAIN PAGE >](../README.md)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[NEXT >](./firstDuplicate.md)