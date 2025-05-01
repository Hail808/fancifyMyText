// Called when "Bigger!" is clicked
function makeTextBigger() {
	alert("Hello, world!"); // Initial test alert
	document.getElementById("userTextArea").style.fontSize = "24pt";
}

// Apply styles based on radio buttons
function applyStyle() {
	const textArea = document.getElementById("userText");
	if (document.getElementById("fancyShmancy").checked) {
		alert("FancyShmancy selected!");
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else if (document.getElementById("boringBetty").checked) {
		alert("BoringBetty selected!");
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

// To uppercase text and add Moo to the end of each word
function mooText() {
	const textArea = document.getElementById("userTextArea");
	let text = textArea.value.toUpperCase();

	let sentences = text.split(".");
	for (let numsentences = 0; numsentences < sentences.length - 1; numsentences++) {
		let words = sentences[numsentences].trim().split(" ");
		if (words.length > 0) {
			words[words.length - 1] += "-Moo";
		}
		sentences[numsentences] = words.join(" ");
	}
	textArea.value = sentences.join(". ");
}
