function toPascalCase(text) {
  return text
    .replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .replace(/\s+/g, "");
}

function toKebabCase(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

document.getElementById("pascalCaseBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText").value;
  document.getElementById("outputText").value = toPascalCase(input);
});

document.getElementById("kebabCaseBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText").value;
  document.getElementById("outputText").value = toKebabCase(input);
});
