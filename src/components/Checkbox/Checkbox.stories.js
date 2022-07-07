import Checkbox from './Checkbox.vue'

export default {
  title: 'Atoms/Forms/Checkbox',
  component: Checkbox
}

const Template = (args) => ({
  components: { Checkbox },
  setup () {
    return { args }
  },
  template: '<Checkbox v-bind="args" />'
})

export const CheckboxDefault = Template.bind({})
CheckboxDefault.args = {
  inputName: 'name',
  label: 'Checkbox default'
}

export const CheckboxChecked = Template.bind({})
CheckboxChecked.args = {
  inputName: 'name',
  label: 'Checkbox checked',
  checked: true
}

export const CheckboxDisabled = Template.bind({})
CheckboxDisabled.args = {
  inputName: 'name',
  label: 'Checkbox disabled',
  disabled: true
}

export const CheckboxCheckedDisabled = Template.bind({})
CheckboxCheckedDisabled.args = {
  inputName: 'name',
  label: 'Checkbox checked and disabled',
  disabled: true,
  checked: true
}
