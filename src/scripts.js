const html = document.querySelector('html');
const checkbox = document.querySelector("input[name = theme]");

const getStyle = (element, style) => 
         window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html,"--bg"),
    bgPanel: getStyle(html,"--bg-panel"),
    colorHeadings: getStyle(html,"--color-headings"),
    colorText: getStyle(html,"--color-text"),
}

const darkMode = {
    bg: "#33333",
    bgPanel: "#434343",
    colorHeadings:"#3664FF",
    colorText: "#B5B5B5",
}
// (/([A-Z])/) expressão regular que vai procurar todas as letras maiusculas e alterar para minusculas sendo armazenados no $1
const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
     Object.keys(colors).map(key => {
         html.style.setProperty(transformKey(key), colors[key]);
     })
}

checkbox.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
})