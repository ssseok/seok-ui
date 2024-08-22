import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessge from './ErrorMessge';

const meta = {
    title: 'Text/ErrorMessge',
    component: ErrorMessge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text', description: 'ErrorMessge의 내용' },
    },
} satisfies Meta<typeof ErrorMessge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '에러 메세지는 여기로',
    },
};
