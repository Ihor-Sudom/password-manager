import type { NextPage } from 'next'
// components
import Signup from 'src/components/containers/register/Signup'
// layout
import Layout from 'src/layout'

const Register: NextPage = () => {
  return (
    <Layout>
      <Signup />
    </Layout>
  )
}

export default Register
