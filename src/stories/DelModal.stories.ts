import type { Meta, StoryObj } from '@storybook/vue3'

import DelModal from '../components/posts/DelModal.vue'
import postData from './postData.json'

const meta: Meta<typeof DelModal> = {
  component: DelModal
}

export default meta
type Story = StoryObj<typeof DelModal>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { DelModal },
    setup() {
      return { args }
    },
    template: '<DelModal v-bind="args" />'
  }),
  args: {
    toggle: true,
    deletionID: 'delID',
    postTitle: 'post Title'
  }
}
