import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from './RadioButton';

const meta = {
  title: 'Example/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: '2024.09.20(금)',
  },
};
