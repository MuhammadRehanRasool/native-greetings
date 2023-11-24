// index.js

const greetingsData = require("./greetings.json");

/**
 * Finds a greeting by providing the country name.
 * @param {string} countryName - The name of the country (case-insensitive).
 * @returns {string} - The greeting for the specified country or a default message if not found.
 */
function findGreetingByCountry(countryName) {
  const country = greetingsData.find(
    (item) =>
      item.country.toLowerCase() === countryName.toLowerCase() ||
      item.country.toLowerCase().includes(countryName.toLowerCase())
  );
  return country ? country.greeting : "Greeting not found for this country";
}

/**
 * Finds a greeting by providing the country code.
 * @param {string} countryCode - The country code (case-insensitive).
 * @returns {string} - The greeting for the specified country code or a default message if not found.
 */
function findGreetingByCountryCode(countryCode) {
  const country = greetingsData.find(
    (item) =>
      item.countryCode.toLowerCase() === countryCode.toLowerCase() ||
      item.countryCode.toLowerCase().includes(countryCode.toLowerCase())
  );
  return country
    ? country.greeting
    : "Greeting not found for this country code";
}

/**
 * Finds a greeting by providing the international code.
 * Processes the input by replacing "+", "-", " " with "" if string and then converts to number.
 * @param {string|number} code - The international code (string or number).
 * @returns {string} - The greeting for the specified international code or a default message if not found.
 */
function findGreetingByInternationalCode(code) {
  let processedCode = code;
  if (typeof code === "string") {
    processedCode = parseInt(code.replace(/[+\s-]/g, ""), 10);
  }

  const country = greetingsData.find((item) =>
    item.internationalCode.includes(processedCode)
  );
  return country
    ? country.greeting
    : "Greeting not found for this international code";
}

/**
 * Returns a random greeting from the dataset.
 * @returns {string} - A randomly selected greeting.
 */
function randomGreeting() {
  const randomIndex = Math.floor(Math.random() * greetingsData.length);
  return greetingsData[randomIndex].greeting;
}

module.exports = {
  findGreetingByCountry,
  findGreetingByCountryCode,
  findGreetingByInternationalCode,
  randomGreeting,
};
