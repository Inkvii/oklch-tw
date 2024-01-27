import type { Meta, StoryObj } from "@storybook/react"
import { Button, Button as Component } from "./Button"
import { ArrowLeft, ArrowRight, Martini, MathOperations } from "phosphor-react-sc"
import ResizableBox from "@/library/stories/ResizableBox"
import { ButtonVariant } from "@/library/button/types/ButtonVariant"

const meta = {
  title: "Button",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    variant: { options: ["solid", "outline", "hyperlink"], description: "General look and feel of the button" },
    theme: {
      options: ["primary", "secondary", "info", "success", "danger"],
      description: "Color theme of the variant",
    },
    size: { options: [undefined, null, "small"], description: "Prepared size options of the component" },
    dominantIconSide: {
      control: "radio",
      options: ["left", "right"],
      description:
        "Declares position where dominant icon will appear. If component contains both dominant and subdominant icon, the subdominant icon will take the other place. Dominant icon side also decides where loader icon will be placed",
    },
    isLoading: {
      control: "boolean",
      description: "If set to true, loading icon will be switched to dominant icon side position.",
    },
    isDisabled: { control: "boolean", description: "Disabled button cannot be clicked on" },
  },
  args: {
    variant: "solid",
    theme: "primary",
    dominantIcon: <Martini />,
    subdominantIcon: <MathOperations />,
    dominantIconSide: "left",
    children: "Big Beautiful Button",
    onPress: () => console.log("Pressed"),
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
}

export const TextOnlyBasicButton: Story = {
  args: {
    dominantIcon: undefined,
    subdominantIcon: undefined,
  },
}

export const ButtonsInGrid: Story = {
  args: {
    dominantIcon: <ArrowLeft />,
    subdominantIcon: <ArrowRight />,
  },
  decorators: [
    () => (
      <ResizableBox>
        <div className={"flex gap-4 p-4"}>
          <ButtonsByVariant variant={"solid"} isDisabled={false} />
          <ButtonsByVariant variant={"solid"} isDisabled={true} />

          <ButtonsByVariant variant={"outline"} isDisabled={false} />
          <ButtonsByVariant variant={"outline"} isDisabled={true} />

          <ButtonsByVariant variant={"hyperlink"} isDisabled={false} />
          <ButtonsByVariant variant={"hyperlink"} isDisabled={true} />
        </div>
      </ResizableBox>
    ),
  ],
}

function ButtonsByVariant(props: { variant: ButtonVariant; isDisabled?: boolean }) {
  return (
    <div className={"flex flex-col gap-2 p-4"}>
      <Button theme={"primary"} variant={props.variant} isDisabled={props.isDisabled} onPress={() => {}}>
        Primary
      </Button>
      <Button theme={"secondary"} variant={props.variant} isDisabled={props.isDisabled} onPress={() => {}}>
        Secondary
      </Button>
      <Button theme={"info"} variant={props.variant} isDisabled={props.isDisabled} onPress={() => {}}>
        Info
      </Button>
      <Button theme={"success"} variant={props.variant} isDisabled={props.isDisabled} onPress={() => {}}>
        Success
      </Button>
      <Button theme={"danger"} variant={props.variant} isDisabled={props.isDisabled} onPress={() => {}}>
        Danger
      </Button>
    </div>
  )
}
