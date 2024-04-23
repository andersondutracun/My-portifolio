import { Container, Grid, styled, Typography } from "@mui/material"
import perfil from "../../../../assets/images/image.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImage = styled("img")(() => ({
        width: "30%",
        borderRadius: "50%"
    }))

  return (
    <>
        <StyledHero>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                <StyledImage src={perfil} alt="" />
            </Grid>
            <Grid item xs={8} md={8}>
                <Typography color="primary" variant="h1" textAlign="center" >Anderson Dutra</Typography>
                <Typography color="primary" variant="h2" textAlign="center" >I'm a Web Full Stack Developer</Typography>
                <Grid container>
                    <Grid item>
                        <button><DownloadIcon />Download CV</button>
                    </Grid>     
                    <Grid item>
                        <button><EmailIcon/>Contact me</button>
                    </Grid>             
                </Grid>
                
                
            </Grid>
        </Grid>
        </Container>

            
        </StyledHero>
    </>
  )
}

export default Hero