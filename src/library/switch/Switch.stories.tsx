import { default as Component, Props, Switch } from "./Switch"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "@/library/stories/ResizableBox"

const meta = {
  title: "Switch",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    isSelected: { control: "boolean", description: "Sets value of the switch" },
    label: { control: "text", description: "Label of the component" },
    isReadOnly: { control: "boolean", description: "If set to true, cannot be modified" },
    isDisabled: { control: "boolean", description: "If set to true, cannot be clicked on" },
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  args: {
    label: "My label",
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <Switch {...(Story().props as Props)} />
      </ResizableBox>
    ),
  ],
}
