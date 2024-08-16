import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NavigationBar from '../components/NavigationBar';

const meta = {
    title: 'Navigation/NavigationBar',
    component: NavigationBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: '페이지 타이틀을 설정합니다.',
        },
        showBackButton: {
            control: 'boolean',
            description: '뒤로가기 버튼을 표시합니다.',
        },
        showCloseButton: {
            control: 'boolean',
            description: '닫기 버튼을 표시합니다.',
        },
        showTitle: {
            control: 'boolean',
            description: '페이지 타이틀을 표시합니다.',
        },
        isDark: {
            control: 'boolean',
            description: '다크모드를 설정합니다.',
        },
    },
    args: {
        onBackButtonClick: fn(),
        onCloseButtonClick: fn(),
    },
    decorators: [
        (Story) => (
            <div style={{ width: '375px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        showBackButton: true,
        showCloseButton: true,
        showTitle: true,
        title: 'Page Title',
        isDark: false,
    },
};
