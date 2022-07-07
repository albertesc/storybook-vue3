import Button from './Button.vue'

export default {
  title: 'Atoms/Buttons',
  component: Button
}

const Template = (args) => ({
  components: { Button },
  setup () {
    return { args }
  },
  template: '<Button v-bind="args">Click me</Button>'
})

export const ButtonPrimary = Template.bind({})

export const ButtonSecondary = Template.bind({})
ButtonSecondary.args = {
  primary: false
}

export const ButtonLinePrimary = Template.bind({})
ButtonLinePrimary.args = {
  line: true
}

export const ButtonLineSecondary = Template.bind({})
ButtonLineSecondary.args = {
  primary: false,
  line: true
}

export const ButtonLink = Template.bind({})
ButtonLink.args = {
  link: true
}

export const ButtonPrimarySmall = Template.bind({})
ButtonPrimarySmall.args = {
  small: true
}

export const ButtonSecondarySmall = Template.bind({})
ButtonSecondarySmall.args = {
  primary: false,
  small: true
}

export const ButtonLineSmall = Template.bind({})
ButtonLineSmall.args = {
  line: true,
  small: true
}
