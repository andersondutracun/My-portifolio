import { styled, Typography, Container, Grid } from "@mui/material"

const Projects = () => {

  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    [theme.breakpoints.up('xs')]: { // <= mobile
        paddingTop: "100px",

    },
    [theme.breakpoints.up('md')]: { // >=mobile
        paddingTop: "0",
    }
}))

  return (
    <>
      <StyledProjects>
        <Container maxWidth="lg">
          <Typography variant="h1" color="initial">teste</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              
            </Grid>
            
          </Grid>
        </Container>
      </StyledProjects>
    </>
  )
}

export default Projects