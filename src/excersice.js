{
  function scramble(str1, str2) {
    let countLetters = {};

    for (let i = 0; i < str2.length; i++) {
      countLetters[str2[i]] = null;
      for (let j = 0; j < str2.length; j++) {
        let counter = 0;
        if (str2[i] === str2[j]) {
          countLetters[str2[i]] += counter + 1;
        }
      }
    }

    let countLettersStr1 = {};

    for (let i = 0; i < str1.length; i++) {
      countLettersStr1[str1[i]] = null;
      for (let j = 0; j < str1.length; j++) {
        let counter = 0;
        if (str1[i] === str1[j]) {
          countLettersStr1[str1[i]] += counter + 1;
        }
      }
    }

    let answer = undefined;

    for (let [letter, value] of countLetters) {
    }

    return countLettersStr1;
  }

  console.log(scramble("a", "hooolaa"));
}
