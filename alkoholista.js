function drunk(alkoholszint) {
  if (alkoholszint >= 0.2) {
    return true;
  } else {
    return false;
  }
}

console.log("teszt alkoholszint: " + drunk(0));

module.exports = { drunk };
