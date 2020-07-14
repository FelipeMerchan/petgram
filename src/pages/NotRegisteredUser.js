import React from 'react'
import Context from '../Context'

import { RegisterMutation } from '../container/RegisterMutation'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }

                const errorMsg = error && 'El usuario ya existe o hay algún problema.'
                return <UserForm disabled={loading} title='Registrarse' onSubmit={onSubmit} error={errorMsg} />
              }
            }
          </RegisterMutation>
          <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
        </>
      }
    }
  </Context.Consumer>
)
