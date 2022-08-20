import {Container} from '@mui/material'
import Layout from "../layout/Layout"
import NavBar from "../nav/NavBar"
import PropTypes from 'prop-types'

const Page = ({title, children}) => {
  return <Layout>
      <NavBar title={title}/>
      <Container maxWidth="lg">
        {children}
      </Container>
    </Layout>
}

Page.propTypes = {
  title: PropTypes.node
}

export default Page