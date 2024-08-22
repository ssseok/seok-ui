import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Close from '../../assets/icon/svgs/Close.svg';
import textField from './TextField';

const meta = {
    title: 'textFields/textField',
    component: textField,
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
        id: { control: 'text', description: '텍스트 필드의 id' },
    },
    args: {
        onIconClick: fn(),
        onChange: fn(),
    },
} satisfies Meta<typeof textField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        IconAlt: 'icon',
        iconPath: Close,
        errorMessge: '텍스트를 확인해주세요.',
        placeholder: '텍스트를 입력해주세요.',
        value: '',
        isError: false,
        id: ' ',
    },
};
