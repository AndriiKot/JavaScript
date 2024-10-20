function welcome({ name } = {}, fn = capitalize) {
  if (!name) {
    throw new Error("Name is required");
  }
  return `Ave ${fn(name)}!`;
}

// Пример реализации функции capitalize
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
