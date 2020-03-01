ES 6 Features

1. Block-Scope declaration using 'let' keyword
2. Type Systems (Supported by TypeScript only)
3. Template String
4. Array Types
5. Collections (Only Array is supported)
   1. Set and Map
6. rest parameters (C# 'params' keyword)
7. Arrow Operator (C# Lambda Expression)
8. Object Oriented Programming
9. Modules

# ================================================

TypeScript Programming
Prerequisites

- Node.js, https://www.nodejs.org
- Microsoft Visual Studio Code aka vscode
  - https://code.visualstudio.com

1.  Configure the typescript
    1. npm install -g typescript
       1. the 'npm' is Node.js CLI for installing application packages from
          1. https://www.npmjs.com
       2. npm install -g <PACKAGE-NAME>
          1. The package will be installed in global scope
       3. npm install --save <PACKAGE-NAME>
          1. The package will be installed for the current application as 'Runtime' aka 'Production' dependency
       4. npm install --save-dev <PACKAGE-NAME>
          1. The package will be installed as development dependency for current app, this is not runtime needed
       5. The 'package.json' file that contains list of packages used during runtime and dev time
          1. npm init -y
             1. Command to create package.json with defaults
          2. npm init
             1. The Command Line Wizard to create package.json
       6. Use 'Node.js Command Prompt' to run npm commands
2.  npm install -g typescript
    1. This provides TypeScript CLI known as 'tsc'
       1. TypeScript Compiler aka Transpiler
          1. Transpiler --> Compile TypeScript into JavaScript
             1. tsc <FILE-NAME>.ts <enter-key> will generate <FILE-NAME>.js

# ============================================================================

TypeScript Language Features from ES 6

1. Block Scope using 'let' keyword
   1. In JavaScript 'var' is function scope which results into dirty read/write values. To prevent it ES 6 has give 'let' keyword for declaration
      1. Use scope.ts file for demo
2. DataTypes
   1. number
   2. string
      1. Object with methods and properties
         1. Property
            1. length
         2. methods
            1. toUpperCase() / toLowerCase()
            2. subste() / spilt()
         3. Template String
            1. Immutable String object with HTML parsing aka String Expressions
               1. e.g.
                  1. `${<EXPR1>} ${<EXPR1>} ${<EXPR1>}`
   3. object
      1. Array<T>
         1. Collection in TypeScript
         2. Properties
            1. length
         3. Methods
            1. push() /pop()
            2. forEach() / map() --> ES 5+
            3. indexOf()
            4. filter() --> ES 5+
            5. sort() / reverse() --> ES 5+
            6. concat()
      2. Date
      3. {}
      4. function
   4. any
      1. Runtime Type definition
   5. void
   6. union types
      1. declaring a variable with more than one datatype
      2. fixed types during declarations
3. An 'Arrow' oeprator
   1. Syntax simplication as a replacement for the callback function to a method
      1. Syntac is =>

# ============================================================================
1. Object Oriented Programming
   1. class as a keyword
      1. constructor() a fucntion
         1. parameters  
            1. constructor Scope parameters
               1. constructor(p1, p2...)
            2. class scope private/public ctor parameters just like private/public members
               1. constructor(private p1:, private p2:)
               2. constructor(public p1:,.)
      2. all membrs of class are 'public' by default
         1. The class members are accessed within class using 'this' reference
      3. No Overloaded Functions
      4. Inheritance is implemented using 'extends' keyword
         1. No Overiiding
      5. Static members are possible
      6. get/set properties in class
   2. Interface is declared using 'interface' keyword
      1. interface is implemented by 'implements' keyword
2. Modules
   1. Provides 'Code-Splitting' by writing code in separate files
   2. To use type (class/function/constant) from file1 inside file2, the file must 'export' the type and file2 must 'import' it.
