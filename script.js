var button = document.getElementById("isaacFact");
var out = document.getElementById("output");
var img = document.getElementById("image");
var description = document.getElementById("description");

img.style.visibility = "hidden";

let currentFact = 0;

const facts = [
  "He's Bald.",
  "He is far too priviliged.",
  "His head is as bright as the sun.",
  "He's poor.",
  "He has a gmabling addiction.",
  "He became broke because he bought to much Fiji water.",
  "He is homeless.",
  "He looks stupid.",
  "He's dark and sad on the inside.",
];

const image_facts = {
  2: "https://api.imghippo.com/files/iqCj2039sBQ.jpeg",
  7: "https://api.imghippo.com/files/cCm8048HMA.jpg",
  8: "https://api.imghippo.com/files/IG2090yy.png",
};

const descriptions = {
  2: "Image of Isaac without the wig",
  7: "Image of Isaac with the wig",
  8: "Image of Isaac on the inside",
}

function updateFact() {
  out.innerText = facts[currentFact];
  
  if (image_facts[currentFact]) {
    img.style.visibility = "visible";
    img.setAttribute("src", image_facts[currentFact]);
  }
  else {
    img.style.visibility = "hidden";
  }
  
  if (descriptions[currentFact]) {
    description.innerText = descriptions[currentFact];
  }
  else {
    description.innerText = "";
  }
  
  currentFact++;
  if (currentFact >= facts.length) {
    currentFact = 0;
  }
}

button.addEventListener("click", updateFact);