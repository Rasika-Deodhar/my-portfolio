import { FC, useState } from 'react'
import './contact.css'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material'
import ReactCardFlip from 'react-card-flip'
import BraggedImage from '../../images/B1.png'
import GitpitImage from '../../images/G1.png'
import XImage from '../../images/X1.png'
import LinkedIn from '../../images/LinkedIn.png'
import Github from '../../images/github-mark.png'
import X from '../../images/X-logo-black.png'

interface contactProps {}

const Contact: FC<contactProps> = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const cardStyle = {
    border: "1px solid black",
    padding: isSmallScreen ? "10px" : "20px", // Adjust padding for small screens
    margin: "20px",
    width: isSmallScreen ? "100%" : "350px", // Full width on small screens
    height: isSmallScreen ? "auto" : "250px", // Auto height on small screens
    fontFamily: 'Chillax',
  };

  const [isLinkedinFlipped, setIsisLinkedinFlipped] = useState(false);
  const [isGithubFlipped, setIsisGithubFlipped] = useState(false);
  const [isXFlipped, setIsXFlipped] = useState(false);

  const handleLinkedinClick = () => {
    setIsisLinkedinFlipped(!isLinkedinFlipped);
    // if (isLinkedinFlipped){window.open('https://www.linkedin.com/in/rasika-deodhar/', '_blank');}
  };
  const handleGithubClick = () => {
    setIsisGithubFlipped(!isGithubFlipped);
    // if (isGithubFlipped){window.open('https://github.com/Rasika-Deodhar', '_blank');}
  };
  const handleXClick = () => {
    setIsXFlipped(!isXFlipped);
    // if (isXFlipped){window.open('https://x.com/MoodLearner', '_blank');}
  };

  return (
    // Outer Box to center the content on larger screens
    <Box
      display="flex"
      justifyContent="center" // Centers content horizontally
      alignItems="center" // Centers content vertically
      marginTop="100px"
    >
      <Box
        className="contact"
        display="flex"
        flexWrap="wrap"
        justifyContent={isSmallScreen ? "center" : "space-between"} // Center for small screens, space-between for larger screens
        gap={2}
        maxWidth={1200} // Optional: To limit the max width of the container
        width="100%" // Ensures the Box container takes the full width
        padding={2} // Add some padding for responsiveness
        margin="0 auto" // Centers the container horizontally
      >
        <Box flex="1 1 300px" maxWidth={350}>
          <ReactCardFlip isFlipped={isLinkedinFlipped} flipDirection="horizontal">
            <Card style={cardStyle}>
              <CardActionArea onClick={handleLinkedinClick}>
                <CardMedia component="img" image={BraggedImage} alt="braggedin" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" fontFamily="Chillax">
                    For all the subtle flex and self-promotion. 😎
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={cardStyle}>
              <CardActionArea onClick={handleLinkedinClick}
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                textAlign: 'center', // Ensure text is centered
              }}>
                <CardMedia
                  component="img"
                  image={LinkedIn}
                  alt="linkedin"
                  style={{ marginLeft: '1px', width: '235px', height: '200px' }}
                />
                <Typography
                  gutterBottom
                  variant="h4"
                  component="a"
                  href="https://www.linkedin.com/in/rasika-deodhar/"
                  target="_blank"
                  fontFamily="Chillax"
                  sx ={{
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      color: '#A86D42 !important', // Force color change
                      transform: 'scale(1.05)'
                    },
                  }}
                >
                  Let's connect!
                </Typography>
              </CardActionArea>
            </Card>
          </ReactCardFlip>
        </Box>

        <Box flex="1 1 300px" maxWidth={350}>
          <ReactCardFlip isFlipped={isGithubFlipped} flipDirection="horizontal">
            <Card style={cardStyle}>
              <CardActionArea onClick={handleGithubClick}>
                <CardMedia component="img" image={GitpitImage} alt="Github" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" fontFamily="Chillax">
                    Place where all abandoned projects fall into. 🥲
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={cardStyle}>
              <CardActionArea onClick={handleGithubClick}
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                textAlign: 'center', // Ensure text is centered
              }}>
                <CardMedia
                  component="img"
                  image={Github}
                  alt="github"
                  style={{ marginLeft: '1px', width: '200px', height: '200px' }}
                />
                <Typography
                  gutterBottom
                  variant="h4"
                  component="a"
                  href="https://github.com/Rasika-Deodhar"
                  target="_blank"
                  fontFamily="Chillax"
                  sx ={{
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      color: '#A86D42 !important', // Force color change
                      transform: 'scale(1.05)'
                    },
                  }}
                >
                  Let's connect!
                </Typography>
              </CardActionArea>
            </Card>
          </ReactCardFlip>
        </Box>

        <Box flex="1 1 300px" maxWidth={350}>
          <ReactCardFlip isFlipped={isXFlipped} flipDirection="horizontal">
            <Card style={cardStyle}>
              <CardActionArea onClick={handleXClick}>
                <CardMedia component="img" image={XImage} alt="X" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" fontFamily="Chillax">
                    Caffeinated coders sharing thoughts. 🙃
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={cardStyle}>
              <CardActionArea onClick={handleXClick}
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                textAlign: 'center', // Ensure text is centered
              }}>
                <CardMedia
                  component="img"
                  image={X}
                  alt="x"
                  style={{ marginLeft: '1px', width: '200px', height: '200px' }}
                />
                <Typography
                  gutterBottom
                  variant="h4"
                  component="a"
                  href="https://x.com/MoodLearner"
                  target="_blank"
                  fontFamily="Chillax"
                  sx ={{
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      color: '#A86D42 !important', // Force color change
                      transform: 'scale(1.05)'
                    },
                  }}
                >
                  Let's connect!
                </Typography>
              </CardActionArea>
            </Card>
          </ReactCardFlip>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
