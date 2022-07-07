import Link from './Link.vue'

export default {
  title: 'Atoms/Link',
  component: Link,

  argTypes: {
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank'],
      defaultValue: '_self',
      description: 'Type of target'
    }
  }
}

const Template = (args) => ({
  components: { Link },
  setup () {
    return { args }
  },
  template: '<Link v-bind="args" />'
})

export const LinkDefault = Template.bind({})
LinkDefault.args = {
  href: '#',
  text: 'Botón sólo texto'
}

export const LinkExternal = Template.bind({})
LinkExternal.args = {
  href: 'https://www.google.com',
  text: 'Botón sólo texto',
  target: '_blank'
}

export const LinkStrong = Template.bind({})
LinkStrong.args = {
  href: '#',
  text: 'Botón sólo texto',
  strong: true
}
