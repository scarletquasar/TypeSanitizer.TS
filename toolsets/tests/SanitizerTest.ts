import { TypeSanitize, ConstraintGroup } from "../sanitization/TypeSanitizer";

var NumberTemplate: ConstraintGroup = {
    maxSize: 10,
    minSize: 5,
    isFloating: false,
    isInteger: true,
    isNegative: false,
    primitiveType: "number"
};

/* Excepted "TypeError" */
//console.log(TypeSanitize(-113, NumberTemplate));

var StringTemplate: ConstraintGroup = {
    maxLength: 10,
    minLength: 5,
    canHaveSideWhiteSpaces: false,
    canHaveWhiteSpaces: false,
    primitiveType: "string"
}

/* Excepted "aaaaaa" */
console.log(TypeSanitize("aaaaaa", StringTemplate));