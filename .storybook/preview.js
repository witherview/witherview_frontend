import { addDecorator } from '@storybook/react'
import { withProvider } from './decorators/addon-redux-toolkit'

addDecorator(withProvider())
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}