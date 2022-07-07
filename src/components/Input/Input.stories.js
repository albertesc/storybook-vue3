import Input from './Input.vue'

export default {
  title: 'Atoms/Forms/Input',
  component: Input
}

const Template = (args) => ({
  components: { Input },
  setup () {
    return { args }
  },
  template: '<Input v-bind="args" />'
})

export const InputDefault = Template.bind({})
InputDefault.args = {
  inputName: 'name',
  placeholder: 'Placeholder'
}

export const InputError = Template.bind({})
InputError.args = {
  inputName: 'name',
  placeholder: 'Placeholder',
  error: 'Error message'
}

export const InputDisabled = Template.bind({})
InputDisabled.args = {
  inputName: 'name',
  placeholder: 'Placeholder',
  disabled: true
}

export const InputSmall = Template.bind({})
InputSmall.args = {
  inputName: 'name',
  placeholder: 'Placeholder',
  small: true
}

export const InputIconLeft = Template.bind({})
InputIconLeft.args = {
  inputName: 'name',
  placeholder: 'Placeholder',
  iconLeft: 'iconSearch'
}

export const InputIconRight = Template.bind({})
InputIconRight.args = {
  inputName: 'name',
  placeholder: 'Placeholder',
  iconRight: 'iconSearch'
}
