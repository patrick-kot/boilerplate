import { Story, Meta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Button {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Default: Story = (args) => <Button {...args} />
