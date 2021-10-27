export function ngrams(value: String, n: number) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const stringFormatNoPontuation = value.replace(regex, "");
  const nGram = stringFormatNoPontuation.split(" ");

  const result = [];
  let element = "";

  if (!Number.isInteger(n) || !Number.isFinite(n)) {
    throw new Error("the number n should be integer and not finite");
  }

  if (n < 1) {
    throw new Error("you can not have 0 words");
  }

  for (let index = 0; index < n; index++) {
    let j = index;

    while (j < n) {
      element += nGram[j] + " ";
      result.push(element.trim());
      j++;

      if (j === n) {
        element = "";
      }
    }
  }
  return result;
}

console.log(ngrams("Show me the code.", 4));
