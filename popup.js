document
  .getElementById("upperCaseTab")
  .addEventListener("click", () => setActiveTab("upper"));
document
  .getElementById("lowerCaseTab")
  .addEventListener("click", () => setActiveTab("lower"));
document
  .getElementById("sentenceCaseTab")
  .addEventListener("click", () => setActiveTab("sentence"));
document
  .getElementById("camelCaseTab")
  .addEventListener("click", () => setActiveTab("camel"));
document
  .getElementById("snakeCaseTab")
  .addEventListener("click", () => setActiveTab("snake"));
document
  .getElementById("kebabCaseTab")
  .addEventListener("click", () => setActiveTab("kebab"));
document
  .getElementById("pascalCaseTab")
  .addEventListener("click", () => setActiveTab("pascal"));
document
  .getElementById("titleCaseTab")
  .addEventListener("click", () => setActiveTab("title"));
document.getElementById("copy").addEventListener("click", () => copy());

document.getElementById("text").addEventListener("input", convertText);

let activeTab = "upper";

function setActiveTab(tab) {
  activeTab = tab;
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  document.getElementById(tab + "CaseTab").classList.add("active");
  convertText();
}

function convertText() {
  changeCopyButtonText();
  let input = document.getElementById("text");
  let text = input.value;
  let convertedText;

  switch (activeTab) {
    case "upper":
      convertedText = text.toUpperCase();
      break;
    case "lower":
      convertedText = text.toLowerCase();
      break;
    case "sentence":
      convertedText =
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      break;
    case "camel":
      convertedText = toCamelCase(text);
      break;
    case "snake":
      convertedText = toSnakeCase(text);
      break;
    case "kebab":
      convertedText = toKebabCase(text);
      break;
    case "pascal":
      convertedText = toPascalCase(text);
      break;
    case "title":
      convertedText = toTitleCase(text);
      break;
  }

  document.getElementById("convertedText").innerText = convertedText;
}

function toCamelCase(text) {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(/ |_|-/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

function toSnakeCase(text) {
  return text
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .toLowerCase()
    .split(/ |_|-/)
    .join("_");
}

function toKebabCase(text) {
  return text
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .split(/ |_|-/)
    .join("-");
}

function toPascalCase(text) {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/ |_|-/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function toTitleCase(text) {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/ |_|-/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function copy() {
  // Get the text field
  var copyText = document.getElementById("convertedText").innerText;

  navigator.clipboard.writeText(copyText);
  var button = document.getElementById("copy");
  button.innerText = "Copied!";
}

function changeCopyButtonText() {
  var button = document.getElementById("copy");
  button.innerText = "Copy";
}

// Initialize the first tab as active
document.getElementById("upperCaseTab").classList.add("active");
