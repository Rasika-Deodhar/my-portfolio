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
import BraggedImage from '../../images/Bragged_pic.png'
import GitpitImage from '../../images/Gitpit_pic.png'
import XImage from '../../images/X_pic.png'
// @ts-ignore

interface contactProps {}

const Contact: FC<contactProps> = () => {
  const theme = useTheme()

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
    <div className='contact' style={{display:'flex'}}>
      <ReactCardFlip isFlipped={isLinkedinFlipped} flipDirection='horizontal' flipSpeedBackToFront={0.9} cardZIndex='auto'>
        <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
          <CardActionArea onClick={handleLinkedinClick}>
            <CardMedia component='img' image={BraggedImage} alt='braggedin' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                For all the subtle flex and self-promotion.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
          <CardActionArea onClick={handleLinkedinClick}>
            <CardMedia
              component='img'
              image='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg'
              alt='linkedin'
              style={{ marginLeft: '1px' }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h4'
                component='a'
                fontStyle='large'
                href='https://www.linkedin.com/in/rasika-deodhar/'
                target='blank'
              >
                Let's connet!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ReactCardFlip>
      
      <ReactCardFlip isFlipped={isGithubFlipped} flipDirection='horizontal' flipSpeedBackToFront={0.9} cardZIndex='auto'>
        <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
          <CardActionArea onClick={handleGithubClick}>
            <CardMedia component='img' image={GitpitImage} alt='braggedin' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                The place where all your abandoned projects fall into.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
          <CardActionArea onClick={handleGithubClick}>
            <CardMedia
              component='img'
              image='https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png'
              alt='github'
              style={{ marginLeft: '1px' }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h4'
                component='a'
                fontStyle='large'
                href='https://github.com/Rasika-Deodhar'
                target='blank'
              >
                Let's connet!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isXFlipped} flipDirection='horizontal' flipSpeedBackToFront={0.9} cardZIndex='auto'>
        <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
          <CardActionArea onClick={handleXClick}>
            <CardMedia component='img' image={XImage} alt='braggedin' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Because we’re all just caffeinated coders sharing thoughts.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
          <CardActionArea onClick={handleXClick}>
            <CardMedia
              component='img'
              image='https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png'
              alt='x'
              style={{ marginLeft: '1px', height: '150px' }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h4'
                component='a'
                fontStyle='large'
                href='https://x.com/MoodLearner'
                target='blank'
              >
                Let's connet!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ReactCardFlip>


    </div>
  )
}
export default Contact
