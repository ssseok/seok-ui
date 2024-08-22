import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';

const meta = {
    title: 'Buttons/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: {
                type: 'radio',
                options: ['primary', 'secondary', 'text', 'link'],
            },
            description: '버튼 테마',
        },
        children: { control: 'text', description: '버튼 텍스트' },
        onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
        disabled: { control: 'boolean', description: '버튼 비활성화 여부' },
        size: {
            control: { type: 'radio', options: ['small', 'medium', 'large'] },
        },
        type: {
            control: { type: 'radio', options: ['button', 'submit', 'reset'] },
        },
    },
    args: {
        onClick: fn(),
    },
    decorators: [
        (Story) => (
            <div style={{ width: '375px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'Button',
        disabled: false,
        size: 'medium',
        type: 'button',
    },
};
export const Secondary: Story = {
    args: {
        theme: 'secondary',
        children: 'Button',
        disabled: false,
        size: 'medium',
        type: 'button',
    },
};
export const Text: Story = {
    args: {
        theme: 'text',
        children: 'Button',
        disabled: false,
        size: 'medium',
        type: 'button',
    },
};
export const Link: Story = {
    args: {
        theme: 'link',
        children: 'Button',
        disabled: false,
        size: 'medium',
        type: 'button',
    },
};
