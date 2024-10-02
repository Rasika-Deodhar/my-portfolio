import { FC, useState } from 'react'
import './contact.css'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material'
import ReactCardFlip from 'react-card-flip'
import BraggedImage from '../../images/B1.png'
import GitpitImage from '../../images/G1.png'
import XImage from '../../images/X1.png'
// @ts-ignore

interface contactProps {}

const Contact: FC<contactProps> = () => {

  const CardStyle = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px",
    width: "350px",
    height: "250px",
    fontFamily : 'Chillax'
  };

  const [isLinkedinFlipped, setIsisLinkedinFlipped] = useState(false)
  const [isGithubFlipped, setIsisGithubFlipped] = useState(false)
  const [isXFlipped, setIsXFlipped] = useState(false)
  const handleLinkedinClick = () => {
    setIsisLinkedinFlipped(!isLinkedinFlipped)
  }
  const handleGithubClick = () => {
    setIsisGithubFlipped(!isGithubFlipped)
  }
  const handleXClick = () => {
    setIsXFlipped(!isXFlipped)
  }

  return (
    <div className='contact' style={{display:'flex', justifyContent:'center'}}>
      <ReactCardFlip isFlipped={isLinkedinFlipped} flipDirection='horizontal' flipSpeedBackToFront={0.9} cardZIndex='auto'>
        <Card style={CardStyle}>
          <CardActionArea onClick={handleLinkedinClick}>
            <CardMedia component='img' image={BraggedImage} alt='braggedin'  />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div' fontFamily={'Chillax'}>
                For all the subtle flex and self-promotion. 😎
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card style={CardStyle}>
          <CardActionArea onClick={handleLinkedinClick}>
            <CardMedia
              component='img'
              image='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg'
              alt='linkedin'
              style={{ marginLeft: '1px', height: 'auto' }}
            />            
            <div style={{height:'100px'}}></div>
            <Typography
                gutterBottom
                variant='h4'
                component='a'
                fontStyle='large'
                href='https://www.linkedin.com/in/rasika-deodhar/'
                target='blank'
                fontFamily={'Chillax'}
                sx={{
                  textDecoration: 'none',
                  margin: '16px 0',
                  color: 'black',
                  transition: 'color 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    color: '#1976d2 !important', // Change to any hover color you like
                    transform: 'scale(1.05)', // Slightly increase the size on hover
                    textDecoration: 'underline',
                  },
                }}
              >
                Let's connect!
              </Typography>
          </CardActionArea>
        </Card>
      </ReactCardFlip>
      
      <ReactCardFlip isFlipped={isGithubFlipped} flipDirection='horizontal' flipSpeedBackToFront={0.9} cardZIndex='auto'>
        <Card style={CardStyle}>
          <CardActionArea onClick={handleGithubClick}>
            <CardMedia component='img' image={GitpitImage} alt='Github' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div' fontFamily={'Chillax'}>
                Place where all abandoned projects fall into. 🥲
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card style={CardStyle}>
          <CardActionArea onClick={handleGithubClick}>
            <CardMedia
              component='img'
              image='https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png'
              alt='github'
              style={{ marginLeft: '1px', height: 'auto' }}
            />
            <CardContent>
              <div style={{height:'80px'}}></div>
              <Typography
                gutterBottom
                variant='h4'
                component='a'
                fontStyle='large'
                href='https://github.com/Rasika-Deodhar'
                target='blank'
                fontFamily={'Chillax'}
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  transition: 'color 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    color: '#1976d2 !important', // Change to any hover color you like
                    transform: 'scale(1.05)', // Slightly increase the size on hover
                    textDecoration: 'underline',
                  },
                }}
              >
                Let's connect!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isXFlipped} flipDirection='horizontal' flipSpeedBackToFront={0.9} cardZIndex='auto'>
        <Card style={CardStyle}>
          <CardActionArea onClick={handleXClick}>
            <CardMedia component='img' image={XImage} alt='X' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div' fontFamily={'Chillax'}>
                Caffeinated coders sharing thoughts. 🙃
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card style={CardStyle}>
          <CardActionArea onClick={handleXClick}>
            <CardMedia
              component='img'
              image='https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png'
              alt='x'
              style={{ marginLeft: '1px', height: '150px' }}
            />
            <CardContent>
              <div style={{height:'25px'}}></div>
              <Typography
                gutterBottom
                variant='h4'
                component='a'
                fontStyle='large'
                href='https://x.com/MoodLearner'
                target='blank'
                fontFamily={'Chillax'}
              >
                Let's connect!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ReactCardFlip>
    </div>
  )
}
export default Contact
