import { useEffect, useState } from 'react'
import jokes from '../jokes'

function App() {
  const [joke, setJoke] = useState(null);

  const jokeGenerator = () => {
    let index = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[index]);
  };

  useEffect(() => {
    jokeGenerator();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-center">

        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Jokes Generator
        </h1>

        <div className="mb-6">
          <p className="text-gray-700">
            {joke?.setup}
          </p>
          <p className="text-gray-500 mt-2">
            {joke?.punchline}
          </p>
        </div>

        <button
          onClick={jokeGenerator}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          New Joke
        </button>

      </div>

    </div>
  );
}

export default App;