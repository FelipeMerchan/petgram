import React, { useContext } from 'react'
import { Context } from '../Context'

import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Layout } from '../components/Layout'
import { UserForm } from '../components/UserForm'

export default () => {
  const { activateAuth } = useContext(Context)

  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar las mejores de fotos de animales domésticos'>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'El usuario ya existe o hay algún problema.'
            return <UserForm disabled={loading} title='Registrarse' onSubmit={onSubmit} error={errorMsg} />
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'
            return <UserForm disabled={loading} title='Iniciar Sesión' onSubmit={onSubmit} error={errorMsg} />
          }
        }
      </LoginMutation>
    </Layout>
  )
}
