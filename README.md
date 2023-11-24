# native-greetings

**native-greetings** is an npm package that offers a diverse collection of greetings for various countries. Retrieve greetings effortlessly based on country names, country codes, or international dialing codes within your JavaScript projects.

## Installation

Install **native-greetings** via npm:

```bash
npm install native-greetings
```

## Usage

```javascript
const greetings = require('native-greetings');
// or
import {
  findGreetingByCountry,
  findGreetingByCountryCode,
  findGreetingByInternationalCode,
  randomGreeting,
} from 'native-greetings';

// Find greeting by country name
const greetingByCountry = findGreetingByCountry('Japan');
console.log(greetingByCountry); // Output: "こんにちは"

// Find greeting by country name
const greetingByCountry = findGreetingByCountry('Pakistan');
console.log(greetingByCountry); // Output: "Asalamualekum"

// Find greeting by country code
const greetingByCountryCode = findGreetingByCountryCode('FR');
console.log(greetingByCountryCode); // Output: "Bonjour"

// Find greeting by international code
const greetingByIntlCode = findGreetingByInternationalCode(91);
console.log(greetingByIntlCode); // Output: "Namaste"

// Get a random greeting
const randomGreeting = randomGreeting();
console.log(randomGreeting); // Output: Random greeting from the dataset
```

## Functions

- `findGreetingByCountry(countryName)`: Find a greeting by country name.
- `findGreetingByCountryCode(countryCode)`: Find a greeting by country code.
- `findGreetingByInternationalCode(code)`: Find a greeting by international dialing code.
- `randomGreeting()`: Get a random greeting from the collection.

## License

This project is licensed under the [MIT License](LICENSE).
