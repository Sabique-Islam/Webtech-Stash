document.getElementById("dom").innerHTML = "Document Object Model (DOM)";
document.getElementById("dom-description").innerHTML = "The DOM is a programming interface for web documents.";
document.getElementById("dom-structure").innerHTML = "It represents the structure of a document as a tree of objects.";

document.getElementsByName("dom").forEach(function(element) {
    element.innerHTML = "Document Object Model (DOM)";
});

document.write("LMAO") // deprecated





document.createElement("p");
document.createTextNode("This is a new paragraph.");