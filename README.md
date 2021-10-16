<h1 align="center">
  <img src="https://i.imgur.com/SNi3RFG.png" width="75px">
  <br>
  TypeSanitizer
</h1>

<center>
<p align="center">
TypeSanitizer.ts is a TypeScript library created to sanitize data based on a template object called <b>ConstraintGroup</b>.
Note: TypeSanitizer is currently in tests version (1.0.0), this means it has only basic functionality and may have possible issues.
</p>
</center>

## Features
| Feature | State |
| --- | ----------- |
| 🔵 **Data Sanitization** |
| Template-based object analysis | Working ✔ |
| Support to all primitive types | In Progress ⛔ |
| Editable Exception Dictionary | Not Started ❌ |
| Recursive list/array analysis | Not Started ❌ |
| Day-by-day validation constraints | Not Started ❌ |
| 🔵 **Primitive Types** |
| string | Working ✔ |
| number | Working ✔ |
| boolean | In Progress ⛔ |
| object array | In Progress ⛔ |
| object dictionary | In Progress ⛔ |
| function | In Progress ⛔ |
| Symbol | In Progress ⛔ |

## Usage

To start using TypeSanitizer you will need to make the following imports:

```typescript
import { TypeSanitize, ConstraintGroup } from "./toolsets/sanitization/TypeSanitizer";
```

To start a sanitization process you will need a ConstraintGroup, it is an information object that will pre-determine how the variables should be:

```typescript
var NumberTemplate: ConstraintGroup = {
    primitiveType: "number",
    maxSize: 10,
    minSize: 5
};
```

This example informs that only variables of numeric type with size between 5 and 10 will be accepted. Now, to initialize the sanitization, just call the appropriate method:

````typescript
var result = TypeSanitize(6, NumberTemplate);
````

This code will return a number "6", as there was no error in the comparison with the template.

## Use cases

Currently TypeSanitizer can be used with numbers and strings and has the following customizable constraints:

**General Constraints**
```typescript
primitiveType //Limits the primitive type (provided by JavaScript) of the object.
```

**String Constraints**
```typescript
maxLength //Defines a maximum length for the expected string.
minLength //Defines a minimum length for the expected string.
canHaveSideWhiteSpaces; //Determines whether or not the string can have empty spaces at the ends.
canHaveWhiteSpaces; //Determines whether or not the string can have empty spaces.
```

**Number Constraints**
```typescript
maxSize; //Defines a maximum size for the expected number.
minSize; //Defines a minimum size for the expected number.
isFloating; //Determines whether the expected number should be floating.
isNegative; //Determines whether the expected number should be negative.
isInteger; //Determines whether the expected number should be integer.
```

## Errors
There are two types of error that can be returned from a sanitization process, the first (TypeError) is returned if a value is in disagreement with its respective template, the second (Error) is returned if there is an unknown problem or the type of the variable is not yet supported by the function.

Exception table:

| Name | Base |
| --- | ----------- |
| 🔵 Generics | |
| GenericSanitizationFailure | The object is not valid to the given template or the type is unknown |
| TypeNotMatch | The object x dont match with the required x type |
| 🔵 String | |
| MaxLengthError | The string x exceeds the length of x characters |
| MinLengthError | The minimum length required for the string x is x characters |
| HaveSpacesError | White spaces are not allowed in the string x |
| HaveSideSpacesError | Side white spaces are not allowed in the string x |
| 🔵 Number | |
| MaxSizeError | The number x exceeds the size of x |
| MinSizeError | The minimum length required for the string x is x characters |
| IsFloatingError | The number x cannot be floating |
| IsNotFloatingError | The number x must be floating |
| IsIntegerError | The number x cannot be an integer |
| IsNotIntegerError | The number x must be an integer |
| IsNegativeError | The number x cannot be negative |
| IsNotNegativeError | The number x must be negative |