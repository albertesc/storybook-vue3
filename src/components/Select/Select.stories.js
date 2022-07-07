import Select from './Select.vue'

export default {
  title: 'Atoms/Forms/Select',
  component: Select
}

const Template = (args) => ({
  components: { Select },
  setup () {
    return { args }
  },
  template: '<Select v-bind="args" />'
})

export const SelectDefault = Template.bind({})
SelectDefault.args = {
  inputName: 'name'
}

export const SelectError = Template.bind({})
SelectError.args = {
  inputName: 'name',
  error: 'Error en el campo selector'
}

export const SelectDisabled = Template.bind({})
SelectDisabled.args = {
  inputName: 'name',
  disabled: true
}

export const SelectSmall = Template.bind({})
SelectSmall.args = {
  inputName: 'name',
  small: true
}
