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
      2. Date
      3. {}
      4. function
   4. any
      1. Runtime Type definition
   5. void
   6. union types
      1. declaring a variable with more than one datatype
      2. fixed types during declarations
