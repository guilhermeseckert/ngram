import { ngrams } from "./server";

test("should be able to call the function", () => {
  expect(ngrams("Guilherme FoxBox Challange", 2));
});

test("should`t be able to call function with float value", () => {
  function floatValue() {
    ngrams("Guilherme FoxBox Challange", 2.2);
  }

  expect(floatValue).toThrowError(
    new Error("the number n should be integer and not finite")
  );
});

test("should`t be able to call the function with n < 0", () => {
  function callWithZeroOrLess() {
    ngrams("Guilherme FoxBox Challange", -1);
  }

  expect(callWithZeroOrLess).toThrowError(
    new Error("you can not have 0 words")
  );
});
