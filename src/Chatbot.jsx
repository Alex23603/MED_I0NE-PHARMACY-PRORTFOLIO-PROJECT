import  { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to toggle chat interface

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (!input) return;
  
    setMessages([...messages, { sender: 'user', text: input }]);
  
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4o-mini', // gpt-4o-mini for improved performance
        messages: [{ role: 'user', content: input }],
      }, {
        headers: {
          'Authorization': `Bearer , // Securely handle API key
        },
      });
  
      const botMessage = response.data.choices[0].message.content.trim();
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: botMessage }]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  
    setInput('');
  
  };
  return (
    <div id="watch-trailer">
      {/* Floating Button */}
      <button
        className="fixed bottom-4 right-4 bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 glow transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        Chat
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-900 text-white p-2 text-center font-bold">Chat With Us</div>
          <div className="chatbot-messages p-2 max-h-60 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input flex p-2">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Talk to Us on live chat..."
              className="flex-1 border border-gray-300 p-2 rounded"
            />
            <button onClick={handleSubmit} className="ml-2 bg-blue-900 text-white p-2 rounded hover:bg-blue-700 transition">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;