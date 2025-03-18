const apiKey = "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"; // Replace with your OpenAI API key
const chatbox = document.getElementById("chatbox");

async function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (!userInput) return;

    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById("userInput").value = "";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }]
        })
    });

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;

    chatbox.innerHTML += `<p><strong>AI:</strong> ${aiMessage}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;
}
