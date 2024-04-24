import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Typography, styled, Container, Grid } from "@mui/material"

const About = () => {

  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: "#f0f0f0",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    [theme.breakpoints.up('xs')]: { // <= mobile
        paddingTop: "100px",

    },
    [theme.breakpoints.up('md')]: { // >=mobile
        paddingTop: "0",
    }
}))

    const StyleBox = styled("div")(() => ({
        border: `1px solid black`,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "250px",
        borderRadius: "5px",
        justifyItems: "center",
        padding: "5px 5px"
    }))

    const StyleSkills= styled("div")(() => ({
      border: `1px solid black`,
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      width: "150px",
      borderRadius: "5px",
      justifyItems: "center",
      padding: "5px 5px"
  }))

    const StyleLine = styled("div")(() => ({
      content: '""',
      border: "1px solid black",
      marginTop: "25px"
    }))


    const StyledSkills = styled("div")(() => ({
      width: "100%",
      display: "flex",
      flexDirection: 'column',
      
    }))
  
  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <Typography color="primary" variant="h1" textAlign="center">About me</Typography>
            <Grid container display="flex" justifyContent="" spacing={3} pt={5}>
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                <StyleBox>
                  <WorkspacePremiumIcon />
                  <Typography variant="h4" color="initial" textAlign="center">Experience</Typography>
                  <Typography variant="h6" color="initial" textAlign="center">1+ years</Typography>
                  <Typography variant="h6" color="initial" textAlign="center">Frontend Developer</Typography>
                </StyleBox>
              </Grid>
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                <StyleBox>
                  <WorkspacePremiumIcon />
                  <Typography variant="h4" color="initial" textAlign="center">Education</Typography>
                  <Typography variant="h6" color="initial" textAlign="center">System Analist</Typography>
                  <Typography variant="h6" color="initial" textAlign="center">Developer</Typography>
                </StyleBox>
              </Grid>
            </Grid>
            <Typography pt={3} variant="h6" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, esse est pariatur vel asperiores in suscipit perferendis, reprehenderit ex, officiis molestias. Modi tenetur sit praesentium totam aliquid ipsam, omnis ipsum facere assumenda laudantium consequatur ipsa eaque vero consectetur corporis animi?</Typography>
            <StyleLine />
            <StyledSkills>
            <Grid container display="flex" flexDirection="row" justifyContent="center" pt={3}>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>HTML</Typography>
                </StyleSkills>
              </Grid>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>CSS</Typography>
                </StyleSkills>
              </Grid>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>Sass</Typography>
                </StyleSkills>
              </Grid>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>JavaScript</Typography>
                </StyleSkills>
              </Grid>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>React</Typography>
                </StyleSkills>
              </Grid>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>Typescript</Typography>
                </StyleSkills >
              </Grid>
              </Grid>
              <Grid container display="flex" flexDirection="row" justifyContent="center" pt={3}>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>NodeJS</Typography>
                </StyleSkills>
              </Grid>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>Git</Typography>
                </StyleSkills>
              </Grid>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>Material UI</Typography>
                </StyleSkills>
              </Grid>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>Express</Typography>
                </StyleSkills>
              </Grid>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>AWS</Typography>
                </StyleSkills>
              </Grid>
              <Grid item xs={6} md={1}>
                <StyleSkills>
                <Typography>Tailwind</Typography>
                </StyleSkills>
              </Grid>
            </Grid>
            </StyledSkills>
        </Container>
      </StyledAbout>
    </>
  )
}

export default About