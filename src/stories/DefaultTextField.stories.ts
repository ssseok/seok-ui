import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DefaultTextField from '../components/DefaultTextField';
import Clear from '../assets/icons/Clear.svg';

const meta = {
    title: 'TextFields/DefaultTextField',
    component: DefaultTextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        iconPath: { control: 'text', description: '아이콘 이미지의 경로' },
        IconAlt: { control: 'text', description: '아이콘 이미지의 alt 속성' },
        onIconClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
        errorMessge: { control: 'text', description: '에러 메시지' },
        placeholder: {
            control: 'text',
            description: '텍스트 필드의 placeholder',
        },
        value: { control: 'text', description: '텍스트 필드의 값' },
        isError: { control: 'boolean', description: '에러 상태 여부' },
        onChange: {
            action: 'changed',
            description: '텍스트 필드 값 변경 이벤트',
        },
    },
    args: {
        onIconClick: fn(),
        onChange: fn(),
    },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        IconAlt: 'icon',
        iconPath: Clear,
        errorMessge: '텍스트를 확인해주세요.',
        placeholder: '텍스트를 입력해주세요.',
        value: '',
        isError: false,
    },
};
