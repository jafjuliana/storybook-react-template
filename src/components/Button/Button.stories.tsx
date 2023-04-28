import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button from './Button'

import { ButtonProps } from './Button.interface'

export default {
  title: 'Componentes/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'small',
  label: 'Button',
  disabled: true
}
