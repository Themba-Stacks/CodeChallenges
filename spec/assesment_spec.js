const fizzBuzz = require("../Q1/fizzbuzz");
const formateAsCustomeString = require("../Q2/formatCustomString");
const translateToBraille = require("../Q3/translateBraille");
const findParent = require("../Q4/findParentNode")
const Calc = require("../Q5/calculator")

describe("Fizzbuzz", () => {
  it("should return true", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
    expect(fizzBuzz(50)).toBe("Buzz");
    expect(fizzBuzz(100)).toBe("Buzz");
  });

  it("should return Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(12)).toBe("Fizz");
  });

  it("should return FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(75)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it("should return true", () => {
    expect(fizzBuzz(11)).toBe(11);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(361)).toBe(361);
  });
});

describe("formateAsCustomeString", () => {
  it("should return correctly formated customer string when number is less than or equal to 5", () => {
    expect(formateAsCustomeString(2020 - 02 - 26, 3)).toBe(
      00000 - 20 - 02 - 26
    );
    expect(formateAsCustomeString(2020 - 02 - 26, 5)).toBe(
      00000 - 20 - 02 - 26
    );
    expect(formateAsCustomeString(2020 - 02 - 26, 0)).toBe(
      00000 - 20 - 02 - 26
    );
  });

  it("should return correctly formated customer string when number is greater than 5", () => {
    expect(formateAsCustomeString(2020 - 02 - 26, 110)).toBe(
      00000 - 20 - 02 - 26
    );
    expect(formateAsCustomeString(2020 - 02 - 26, 38)).toBe(
      00000 - 20 - 02 - 26
    );
    expect(formateAsCustomeString(2020 - 02 - 26, 6)).toBe(
      00000 - 20 - 02 - 26
    );
    expect(formateAsCustomeString(2020 - 02 - 26, 9)).toBe(
      00000 - 20 - 02 - 26
    );
  });
});

describe("translateToBraille", () => {
  it("should return the lowercase alphabets in binary braille", () => {
    expect(translateToBraille(a)).toBe("100000");
    expect(translateToBraille(b)).toBe("110000");
    expect(translateToBraille(c)).toBe("100100");
    expect(translateToBraille(d)).toBe("100110");
    expect(translateToBraille(e)).toBe("100010");
    expect(translateToBraille(f)).toBe("110100");
    expect(translateToBraille(g)).toBe("110110");
    expect(translateToBraille(h)).toBe("110010");
    expect(translateToBraille(i)).toBe("010100");
    expect(translateToBraille(j)).toBe("010110");
    expect(translateToBraille(k)).toBe("101000");
    expect(translateToBraille(l)).toBe("111000");
    expect(translateToBraille(m)).toBe("101100");
    expect(translateToBraille(n)).toBe("101110");
    expect(translateToBraille(o)).toBe("101010");
    expect(translateToBraille(p)).toBe("111100");
    expect(translateToBraille(q)).toBe("111110");
    expect(translateToBraille(r)).toBe("111010");
    expect(translateToBraille(s)).toBe("011100");
    expect(translateToBraille(t)).toBe("011110");
    expect(translateToBraille(u)).toBe("101001");
    expect(translateToBraille(v)).toBe("111001");
    expect(translateToBraille(w)).toBe("010111");
    expect(translateToBraille(x)).toBe("101101");
    expect(translateToBraille(y)).toBe("101111");
    expect(translateToBraille(z)).toBe("101011");
  });

  it("should return the uppercase alphabets in binary braille", () => {
    expect(translateToBraille(A)).toBe("000001100000");
    expect(translateToBraille(B)).toBe("000001110000");
    expect(translateToBraille(C)).toBe("000001100100");
    expect(translateToBraille(D)).toBe("000001100110");
    expect(translateToBraille(E)).toBe("000001100010");
    expect(translateToBraille(F)).toBe("000001110100");
    expect(translateToBraille(G)).toBe("000001110110");
    expect(translateToBraille(H)).toBe("000001110010");
    expect(translateToBraille(I)).toBe("000001010100");
    expect(translateToBraille(J)).toBe("000001010110");
    expect(translateToBraille(K)).toBe("000001101000");
    expect(translateToBraille(L)).toBe("000001111000");
    expect(translateToBraille(M)).toBe("000001101100");
    expect(translateToBraille(N)).toBe("000001101110");
    expect(translateToBraille(O)).toBe("000001101010");
    expect(translateToBraille(P)).toBe("000001111100");
    expect(translateToBraille(Q)).toBe("000001111110");
    expect(translateToBraille(R)).toBe("000001111010");
    expect(translateToBraille(S)).toBe("000001011100");
    expect(translateToBraille(T)).toBe("000001011110");
    expect(translateToBraille(U)).toBe("000001101001");
    expect(translateToBraille(V)).toBe("000001111001");
    expect(translateToBraille(W)).toBe("000001010111");
    expect(translateToBraille(X)).toBe("000001101101");
    expect(translateToBraille(Y)).toBe("000001101111");
    expect(translateToBraille(Z)).toBe("000001101011");
  });

  it("should return the space braille binary", () => {
    expect(translateToBraille(" ")).toBe("000000");
  });
});

describe("findParent", () => {
  it("should return the parent node", () => {
    expect(findParent([1,2,3],2)).toBe(true)
    expect(findParent([1,2,3,4],3)).toBe(true)
  });
});

describe("Calc", () => {
  it("should return the correct answer two numbers", () => {
    expect(Calc(1,2,"add")).toBe(3);
    expect(Calc(1,2,"subtract")).toBe(-1);
    expect(Calc(3,2,"subtract")).toBe(1);
    expect(Calc(1,'2',"multiply")).toBe(2);
    expect(Calc(4,2,"divide")).toBe(2);
  });
  it("should throw error for non numeric values", () => {
    expect(Calc('a',2,"add")).toThrow("VALUES MUST BE NUMERIC")
    expect(Calc('a','b',"add")).toThrow("VALUES MUST BE NUMERIC")
    expect(Calc(3,'c',"add")).toThrow("VALUES MUST BE NUMERIC")
  });
  it("should throw error when the incorrect operator is used", () => {
    expect(Calc(3,3,"added")).toThrow("INCORRECT OPERATOR");
  });it("should throw error when incorrect arithmetic operations are performd", () => {
    expect(Calc(4,0,"Divide")).toBe("ARITHMETIC ERROR");
  });
});

describe("", () => {
  it("", () => {
    expect().toBe();
  });
});

describe("", () => {
  it("", () => {
    expect().toBe();
  });
});

describe("", () => {
  it("", () => {
    expect().toBe();
  });
});

describe("", () => {
  it("", () => {
    expect().toBe();
  });
});
