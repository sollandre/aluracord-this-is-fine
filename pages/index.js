import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import NextImage from 'next/image';
import appConfig from "../config.json";

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      html {
          font-size: 62.5%;
      }
      @media (max-width: 1200px){
        html {
          font-size: 62.5%;
        }
      }
      @media (max-width: 768px){
        html {
          font-size: 50%;
        }
      }
      @media (max-width: 480px){
        html {
          font-size: 37.5%;
        }
      }
      body {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6rem;
        background-color: ${appConfig.theme.neutrals["100"]}
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      /* ./App fit Height */ 
    `}</style>
  );
}

function HomePage() {
  const username = 'sollandre'
  return (
    <>
      <Image src='/background.png'
        styleSheet={{
          position: 'fixed',
          top:'-3px',
          height: '103vh',
          width: '100vw',
          overflow: 'hidden',
          zIndex: '-1'
        }}
      />
      <GlobalStyle />
      
      <Box
        tag="main"
        styleSheet= {{
          maxHeight: '350px',
          maxWidth: '700px',
          width: "70rem",
          height: "35rem",
          margin: "calc((100vh - min(35rem, 350px))/2) auto",
          padding: '3.2rem',
          backgroundColor: appConfig.theme.neutrals['900'],
          borderRadius: ".5rem",
          display: 'flex',
          flex: "1",
          gap: "10rem"
        }}
      >
        <Image src='/cachorro.svg'
          styleSheet={{
            position: 'absolute',
            maxHeight: '175px',
            height: '17.5rem',
            bottom: 'calc((100vh + min(30rem, 300px))/2)',

          }}
        />
        <Box 
        as='form'
        styleSheet= {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexBasis: '60%',
            marginTop: "2.8rem",
          }}
        >
          <Text tag='h1'
            styleSheet= {{
              fontWeight: '700',
              fontSize: '3rem',
              lineHeight: '5rem',
              color: appConfig.theme.principal['500'] 
            }}
          >Precisa de ajuda?</Text>
          <Text tag='h2'
            styleSheet= {{
                fontWeight: '700',
                fontSize: '1.4rem',
                color: appConfig.theme.principal['600'],
                marginBottom: '3.5rem'
              }}
          >
            Aluracord - Antro dos endúvidados
          </Text>
          <TextField name='user' placeholder='Insira seu usuário do Github' type="text" fullWidth={true} rounded="sm"
            textFieldColors={{
              neutral: {
                backgroundColor: appConfig.theme.neutrals['500'],
                mainColor: "transparent",
                mainColorHighlight: appConfig.theme.principal['500'],
                textColor: appConfig.theme.neutrals['50'],
              }
            }}
          />
          <Button
            label='Entrar'
            type='submit'
            fullWidth={true}
            styleSheet={{
              backgroundColor: appConfig.theme.principal['500'],
              color: appConfig.theme.neutrals['900'],
              marginTop: '1rem',
              hover: {
                filter: 'brightness(1.1)',
                backgroundColor: appConfig.theme.principal['500'],
                transition: 'filter 0.5s'
              } 
            }}
          />
        </Box>
        <Box
          styleSheet= {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexBasis: '40%',
            padding: '1.6rem',
            backgroundColor: appConfig.theme.neutrals['600'],
            border: '1px solid black',
            borderRadius: '1rem'
          }}
        >
        <Box
          styleSheet={{
                width: '190px',
                height: '190px',
                borderRadius: '60%',
                marginBottom: '1.6rem',
                border: '4px',
                padding:'2px',
                // borderColor: `conic-gradient(#E9A320,#D95525, #E9A320, #524A3D)`
                background:'linear-gradient(#E9A320,#D95525, #E9A320)'
              }}
        >
          <Image 
            src={`https://github.com/${username}.png`} 
            styleSheet={{
              borderRadius: '50%',
              // marginBottom: '1.6rem',
              // border: '4px',
              // borderColor: `conic-gradient(#E9A320,#D95525, #E9A320, #524A3D)`
              // borderColor:'linear-gradient(yellow, red)'
            }}
          />
        </Box>
          <Text>
            {username}
          </Text>
        </Box>

      </Box>
    </>
  );
}

export default HomePage