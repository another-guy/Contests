function normalize(word: string): string {
  return word ? word.toLowerCase() : '';
}

function charCount(word: string): { [_: string]: number} {
  return word
    .split('')
    .reduce((result, char) => {
      if (!result[char])
        result[char] = 1;
      else
        result[char] += 1;
      
      return result;
    }, {});
}

function charCountDoesNotExceed(hostCharCount: { [_: string]: number}, guestCharCount: { [_: string]: number}): boolean {
  return Object
    .keys(guestCharCount)
    .every(char => hostCharCount[char] >= guestCharCount[char]);
}

function checkPermutation(hostWord: string, guestWord: string): boolean {
  return charCountDoesNotExceed(
    charCount(normalize(hostWord)),
    charCount(normalize(guestWord))
  );
}

[
  ['abracadabra', 'bra'],
  ['abracadabra', 'braza'],
  ['abracadabra', 'Bra'],
  ['abracadabra', 'Braza']
].forEach(testCase => {
  const [host, guest] = testCase;
  console.warn(host, guest, checkPermutation(host, guest));
});