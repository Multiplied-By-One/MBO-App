import {Container} from '@mui/material'
import Layout from "../layout/Layout"
import NavBar from "../nav/NavBar"
import PropTypes from 'prop-types'

import { styled } from '@mui/material/styles'

const StyledContainer = styled(Container)({
  paddingTop: "30px"
})

const Page = ({title, children}) => {
  return <Layout>
      <NavBar title={title}/>
      <StyledContainer maxWidth="lg">
        {children}
      </StyledContainer>
    </Layout>
}

Page.propTypes = {
  title: PropTypes.node
}

export default Page