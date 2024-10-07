import { FC } from 'react'
import aboutImage from '../../images/about-image.png'
import cupGif from '../../images/cup_gif.gif'
import './about.css'

interface aboutProps {}

const About: FC<aboutProps> = () => {

  const aboutImageStyle = {
    width: '300px',
    height: 'auto',
    marginTop: '100px',
    marginLeft: '50px',
    maxWidth: '100%',
  }

  const name = 'Rasika Deodhar';
  console.log(name.split(''))
  // Create an array from the name string, each letter wrapped in a span
  const letters = name.split('').map((letter, index) => (
    <span
      key={index}
      className='name-letter'
      style={{ animationDelay: `${index * 0.1}s`, // Stagger the animation delay
               whiteSpace: letter === ' ' ? 'pre' : 'normal', // Ensure space is preserved 
        }} 
    >
      {letter}
    </span>
  ));


  return (
   <div>
<div
      className='profile-container'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <img
        src={aboutImage}
        alt='About'
        className='about-image'
        style={aboutImageStyle}
      ></img>

      <div
        className='nameAndTitle'
        style={{
          flex: '1',
          marginRight: '130px',
          width: '75%',
          textAlign: 'right',
        }}
      >
        <p id='name' style={{ margin: '0' }}>
          {letters}
        </p>
        <p id='title' style={{ margin: '0' }}>
          Software Engineer by day and a LOT of it by night!
          <img
            src={cupGif}
            alt='Cup GIF'
            style={{ width: '20px', height: '20px', marginLeft: '5px' }}
          ></img>
        </p>
      </div>
    </div>

    <div
    style={{
      display: 'flex',
      justifyContent: 'center', // Center the content
      marginTop: '20px', // Optional: add space above the text
      flex: '1'
    }}
    id='description'
  >
    <div style={{ width: '500px', height: 'auto', textAlign: 'center' }}>
      I am a software developer with 6 years of experience working
      across various technologies and frameworks. Having worn many hats in
      different teams, I’m known as a dependable and versatile team member. I
      enjoy connecting with fellow tech professionals and actively
      participate in tech meetups and networking events.
    </div>
  </div>
   </div>
    
  )
}

export default About
