import type { Meta, StoryObj } from '@storybook/vue3';

import PostCard from '../components/posts/PostCard.vue';
import postData from "./postData.json"

const meta: Meta<typeof PostCard> = {
  component: PostCard,
};

export default meta;
type Story = StoryObj<typeof PostCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { PostCard },
    setup() {
      return { args };
    },
    template: '<PostCard v-bind="args" />',
  }),
  args: {
    id: postData[0].id,
    content: postData[0].content,
    tags: postData[0].tags
  },
};