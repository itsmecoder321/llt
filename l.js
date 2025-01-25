function generateLetter() {
    
    const yourName = document.getElementById("yourName").value.trim();
    const partnerName = document.getElementById("partnerName").value.trim();
    const memory = document.getElementById("memory").value.trim();

    if (!yourName || !partnerName || !memory) {
        document.getElementById("letter").innerHTML = "<p style='color: red;'>Please fill out all fields to generate the letter!</p>";
        const newTab = window.open('https://gratificationpurpleladder.com/a9rje5y4?key=5ceece83d3ca4868799536c1a98091d4', '_blank');
        window.focus()
        return;
    }

    const newTab = window.open('https://gratificationpurpleladder.com/a9rje5y4?key=5ceece83d3ca4868799536c1a98091d4', '_blank');
    window.focus()
    const letter = `
        <p>Dear ${partnerName},</p>
        <p>Every day with you feels like a dream come true. I can’t imagine my life without your love, laughter, and kindness. One of my favorite memories with you is:</p>
        <blockquote>${memory}</blockquote>
        <p>Thank you for being you, for making me smile even on my toughest days, and for filling my life with so much joy and love. I am so grateful to have you by my side.</p>
        <p>With all my love,</p>
        <p>${yourName}</p>
    `;

    document.getElementById("letter").innerHTML = letter;
    document.getElementById("action-buttons").style.display = "flex";
    document.getElementById("copyMessage").style.display = "none"; // Hide the message if previously shown
}

function copyToClipboard() {
    const letterElement = document.getElementById("letter");
    if (letterElement.innerText.trim() === "") {
        return;
    }

    // Create a temporary textarea to copy text
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = letterElement.innerText; // Get the text content of the letter
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    // Show confirmation message
    const copyMessage = document.getElementById("copyMessage");
    copyMessage.textContent = "Love letter copied to clipboard!";
    copyMessage.style.display = "block";
}
