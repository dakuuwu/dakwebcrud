import type { Meta, StoryObj } from '@storybook/vue3';

import EditModal from '../components/posts/EditModal.vue';
import postData from "./postData.json"

const meta: Meta<typeof EditModal> = {
  component: EditModal,
};

export default meta;
type Story = StoryObj<typeof EditModal>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { EditModal },
    setup() {
      return { args };
    },
    template: '<EditModal v-bind="args" />',
  }),
  args: {
    toggle: true,

  },
};