import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from '../components/IconButton';
import Close from '../assets/icon/svgs/Close.svg';

const meta = {
    title: 'Buttons/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        iconPath: { control: 'text', description: '이미지의 경로' },
        alt: { control: 'text', description: '이미지의 alt 속성' },
        onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        alt: 'icon',
        iconPath: Close,
    },
};
