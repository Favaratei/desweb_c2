
const arrayColors= [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque",
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue",
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
    "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
    "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
    "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow",
    "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender",
    "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow",
    "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
    "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
    "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen",
    "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
    "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
    "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray",
    "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle",
    "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen",
];

const arrayRandom = new Array(10);
for(var i=0; i<arrayRandom.length; i++){
    do{
        var aux = arrayColors[Math.floor(Math.random() * arrayColors.length)];
    }while(arrayRandom.includes(aux));
    arrayRandom[i] = aux;
    console.log(i+1, arrayRandom[i]); 
}
arrayRandom.sort();

alert("Bem vindo ao Jogo da Adivinhação");

var colorRight = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
console.log("\n>> Cor correta: " + colorRight + "\n\n"); 
var right = false;
var guess = "";

do {
 guess = window.prompt("escolhi uma dessas cores:\n  > " + arrayRandom.join('\n  > ') + "\n tente adivinhar qual eu escolhi");
    if guess.toLowerCase() == colorRight.toLowerCase()){
     right = true;
        alert("Parabéns " + nome + ", você acertou a cor! :D");
        document.body.style.backgroundColor = guess;
        console.log(">>", guess + " [CORRETO]\n");
    }
    else if guess == ""){
        alert("Digite alguma coisa!");
    }
    else {
        alert(
            "Esta não é a cor correta!\n\nDica: A sua cor está alfabeticamente"
            +  guess.toLowerCase() > colorRight.toLowerCase() ? " DEPOIS " : " ANTES ")
            + "da que pensei. \nTente novamente!");
            console.log(">>", guess + " [INCORRETO]\n"); 
    }
} while right == false);

