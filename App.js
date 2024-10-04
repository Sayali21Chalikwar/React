import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>Welcome to My Simple Webpage</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main>
        <section id="home">
          <h2>Home Section</h2>
          <p>This is the homepage of the website. You can put an introduction here.</p>
        </section>

        <section id="about">
          <h2>About Section</h2>
          <p>Here you can add some information about yourself or your project.</p>
        </section>

        <section id="contact">
          <h2>Contact Section</h2>
          <p>Feel free to reach out via email or social media.</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="App-footer">
        <p>© 2024 My Simple Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
