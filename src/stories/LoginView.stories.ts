import type { Meta, StoryObj } from '@storybook/vue3'

import LoginView from '../views/LoginView.vue'

const meta: Meta<typeof LoginView> = {
  component: LoginView
}

export default meta
type Story = StoryObj<typeof LoginView>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { LoginView },
    setup() {
      return { args }
    },
    template: '<LoginView v-bind="args" />'
  }),
  args: {}
}
