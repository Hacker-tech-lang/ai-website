const sendBtn = document.getElementById('send-btn');
const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');

sendBtn.addEventListener('click', () => {
  const userMessage = userInput.value;
  if (userMessage) {
    displayMessage('User', userMessage);
    userInput.value = '';

    // Simulating a simple AI response
    setTimeout(() => {
      displayMessage('AI', generateAIResponse(userMessage));
    }, 1000);
  }
});

function displayMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatOutput.appendChild(messageElement);
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

function generateAIResponse(input) {
  // Simple AI logic
  if (input.toLowerCase().includes('hello')) {
    return 'Hello! How can I assist you today?';
  } else if (input.toLowerCase().includes('weather')) {
    return 'I am unable to check the weather at the moment, but it seems nice!';
  } else {
    return 'I am still learning. Can you ask something else?';
  }
}
