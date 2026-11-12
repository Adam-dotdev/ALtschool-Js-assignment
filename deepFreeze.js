function deepFreeze(obj) {
  if (typeof obj !== "object" || obj === null) return obj;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      deepFreeze(obj[key]);
    }
  }
  Object.freeze(obj);
  return obj;
}
const config = deepFreeze({
  api: { baseUrl: "https://x.com", retries: 3 },
  debug: false,
});
config.api.baseUrl = "https://changed.com"; // should be ignored
config.debug = true; // should be ignored
console.log(config.api.baseUrl, config.debug); // "https://x.com" false
console.log(Object.isFrozen(config.api)); // true
