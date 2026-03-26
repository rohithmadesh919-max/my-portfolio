import { useState } from 'react';

function Projects() {
  const [count, setCount] = useState(0);

  return (
    <div>

      <h2>🎮 Counter Game</h2>

      <h3>Score: {count}</h3>

      <div className='buttons'>
        <button onClick={() => setCount(count + 1)}>
          Increase ⬆️
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease ⬇️
        </button>

        <button onClick={() => setCount(0)}>
          Reset 🔄
        </button>
      </div>

      {/* ✅ ADD THIS PART */}
      <div className="links">
        <a href="https://rohith45-portfolio.netlify.app/" target="_blank">🔗 Live Demo</a>
        <a href="https://github.com/rohithmadesh919-max/my-portfolio" target="_blank">💻 GitHub</a>
      </div>

    </div>
  );
}

export default Projects;