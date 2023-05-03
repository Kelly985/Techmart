import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      {/* other app content */}
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
