# NamesDAO TypeScript Resolver

This repository contains a TypeScript implementation of a NamesDAO resolver that fetches addresses from the NamesDAO secondary resolver using Axios.

## Features

Fetches the address associated with a given name from the NamesDAO secondary resolver.
Handles names with and without .xch suffix gracefully by trimming it before making requests to ensure compatibility with various input formats.

## Requirements

Node.js (v12 or later)
Axios (for HTTP requests)

## Installation

Clone this repository:

```
git clone https://github.com/theNamesdao/namesdao-ts-resolver.git
```

Navigate to the project directory:

```
cd namesdao-ts-resolver
```

Install dependencies:

```
npm install
```

## Usage

To use this resolver in your TypeScript or Node.js project, import the Namesdao class from the main module and call its methods.

Example:

```
import { Namesdao } from './namesdao';

const namesdao = new Namesdao();
const name = "Gratitude";

(async () => {
  try {
    const address = await namesdao.getNameAddress(name);
    console.log(`The address for ${name} is:`, address);
  } catch (error) {
    console.error('Error fetching the address:', error.message);
  }
})();
```

## Testing

To run tests, execute the following command in your terminal:

```
npm test
```

This command runs Jest to execute all test suites within the project. Ensure that you have Jest installed and configured correctly for TypeScript.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork this repository and create a pull request with a clear description of what your changes do. Please make sure to update tests as appropriate.
