import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500">

        {/* Dark Mode Toggle */}
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Home Section */}
        <section
  id="home"
  className="h-screen flex flex-col justify-center items-center text-center px-4 animate-fade-in"
>
  <h1 className="text-5xl font-bold mb-4 animate-slide-up leading-tight">
    Hi, I'm Sana Sheikh
  </h1>
  <p className="text-xl mb-2 animate-fade-in-slow">
    Computer Science Engineer | Web Developer
  </p>
  <p className="text-base max-w-xl text-gray-600 dark:text-gray-300 animate-fade-in-slow">
    I build responsive and interactive web apps using React.js and Tailwind CSS. Passionate about learning and creating user-focused designs. I'm a Computer Science graduate with a strong interest in web development, UI/UX design, and creative coding. Over the past few months, I’ve immersed myself in building real-world projects that helped me master several technologies and tools.
  </p>

  {/* Optional Button */}
  <a
    href="#contact"
    className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow transition duration-300"
  >
    📩 Hire Me
  </a>
</section>


        {/* About Section */}
        <section id="about" className="py-20 px-6 text-center animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="max-w-xl mx-auto">
            I'm a self-taught developer passionate about creating attractive, fast, and responsive web apps using React and Tailwind CSS.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-center animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-white dark:bg-gray-700 rounded shadow">
              <h3 className="font-bold">AI Copilot Powered Chatbot</h3>
              <p>AI Chatbot Interface: Built a functional chatbot using vanilla JavaScript, HTML, and CSS, simulating real-time conversations.
              OpenAI Integration: Integrated GPT-3.5-turbo via Fetch API to handle async POST requests and deliver context-aware responses.
              Responsive UI: Designed a clean, responsive chat interface using CSS Flexbox and DOM manipulation for dynamic message rendering.
              Error Handling & Tools: Implemented robust error handling e.g. 429, invalid input, developed in VS Code, and tested with Live Server.</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded shadow">
              <h3 className="font-bold">Listify Homes</h3>
              <p>Secure Authentication: Implements JWT-based user registration and login using Node.js, Express.js, and MongoDB for protected access.
              Property Management: Authenticated users can view, add, and manage property listings via a protected dashboard.
              Booking Functionality: Users can explore available properties and make seamless reservations through a RESTful API.
              Tech Stack & Testing: Built with HTML, CSS, JavaScript frontend, Node.js, Express.js, MongoDB backend, and tested using Postman and Thunder Client.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 text-center animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p>Email: <a href="mailto:sanasheikh98600@gmail.com" className="text-blue-500 underline">sanasheikh98600@gmail.com</a></p>
          <p>Github: <a href="https://github.com/sanasheikh88" className="text-blue-500 underline">github.com/sanasheikh88</a></p>
        </section>

      </div>
    </div>
  );
}

export default App;
