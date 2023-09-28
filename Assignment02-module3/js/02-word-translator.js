document.write(`<h2>The World Translator App</h2>`)
languageCode = prompt("Please enter the language code (e.g., es, de, en, fr, etc.): ");
if(languageCode === 'es') {
    console.log("Hello World translated in Spanish is: Hola Mundo")
} else if(languageCode === 'de') {
    console.log("Hello World translated in German is: Hallo Welt")
} else if(languageCode === 'fr') {
    console.log("Hello World translated in French is: Bonjour le monde")
} else {
    console.log("Hello World translated in English is: Hello World")
}
