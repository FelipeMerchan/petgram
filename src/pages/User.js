import React, { useContext } from 'react'
import { Context } from '../Context'

import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export default () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Tu cuenta'>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Layout>
  )
}
