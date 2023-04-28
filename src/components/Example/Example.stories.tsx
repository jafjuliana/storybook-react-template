import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Example from './index'

export default {
  title: 'Componentes/Example',
  component: Example
} as Meta

export const Basic: Story = (args) => <Example {...args} />
