import './style.css';
import home from '../../../public/img/home.jpg'

function Home() {
  

  return (
    <div className='Home'>

      <div className='container'>

          <img src={home} alt="" />
          <div className='label'>
          <h1>Rick and Morty</h1>
          <p>Rick and Morty is an American adult animated 
            science-fiction sitcom created by Justin Roiland and
             Dan Harmon for Cartoon Network's nighttime programming 
             block Adult Swim.  It is distributed internationally by Warner Bros. Domestic Television</p>
          <p>The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and
            dimensions through portals and on Rick's flying saucer.</p>
          </div>
      </div>
    </div>
  )
}

export default Home
