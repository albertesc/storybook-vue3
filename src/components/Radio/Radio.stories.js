import Radio from './Radio.vue'

export default {
  title: 'Atoms/Forms/Radio',
  component: Radio
}

const Template = (args) => ({
  components: { Radio },
  setup () {
    return { args }
  },
  template: '<Radio v-bind="args" />'
})

export const RadioDefault = Template.bind({})
RadioDefault.args = {
  inputName: 'name',
  label: 'Radio default'
}

export const RadioChecked = Template.bind({})
RadioChecked.args = {
  inputName: 'name',
  label: 'Radio checked',
  checked: true
}

export const RadioDisabled = Template.bind({})
RadioDisabled.args = {
  inputName: 'name',
  label: 'Radio disabled',
  disabled: true
}

export const RadioCheckedDisabled = Template.bind({})
RadioCheckedDisabled.args = {
  inputName: 'name',
  label: 'Radio checked and disabled',
  disabled: true,
  checked: true
}
