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
              (register) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }
                return <UserForm title='Registrarse' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>
          <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
        </>
      }
    }
  </Context.Consumer>
)
