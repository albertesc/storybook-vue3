import Textarea from './Textarea.vue'

export default {
  title: 'Atoms/Forms/Textarea',
  component: Textarea
}

const Template = (args) => ({
  components: { Textarea },
  setup () {
    return { args }
  },
  template: '<Textarea v-bind="args" />'
})

export const TextareaDefault = Template.bind({})
TextareaDefault.args = {
  inputName: 'name',
  placeholder: 'Placeholder'
}

export const TextareaError = Template.bind({})
TextareaError.args = {
  inputName: 'name',
  placeholder: 'Placeholder',
  error: 'Error message'
}

export const TextareaDisabled = Template.bind({})
TextareaDisabled.args = {
  inputName: 'name',
  placeholder: 'Placeholder',
  disabled: true
}

export const TextareaSmall = Template.bind({})
TextareaSmall.args = {
  inputName: 'name',
  placeholder: 'Placeholder',
  small: true
}

export const TextareaResize = Template.bind({})
TextareaResize.args = {
  inputName: 'name',
  placeholder: 'Placeholder',
  resize: true
}
