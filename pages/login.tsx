import type { NextPage } from 'next'
// components
import LoginComponent from 'src/components/containers/login/Login'
// layout
import Layout from 'src/layout'

const Login: NextPage = () => {
  return (
    <Layout>
      <LoginComponent />
    </Layout>
  )
}

export default Login