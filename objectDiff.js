function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {},
  };

  for (let key in newObj) {
    if (!oldObj.hasOwnProperty(key)) {
      result.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key],
      };
    }
  }
  for (let key in oldObj) {
    if (!(key in newObj)) {
      result.removed[key] = oldObj[key];
    }
  }
  return result;
}
console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" },
  ),
);
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }
