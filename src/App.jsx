
import { useState } from 'react'
import Header from './components/Header'



function App() {
  const[likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return(
    <div>
      <Header author="John Doe" />
      <p>Likes: {likes}</p>
      <button onClick={handleClick}>Like</button>
    </div>
  )   
}

export default App
