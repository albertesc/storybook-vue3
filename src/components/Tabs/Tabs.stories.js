import Tabs from './Tabs.vue'
import Tab from './Tab.vue'

export default {
  title: 'Components/Tabs',
  component: Tabs
}

const Template = (args) => ({
  components: { Tabs, Tab },
  setup () {
    return { args }
  },
  template: `
    <Tabs v-bind="args">
      <Tab title="Tab 1">
        <h3>Tab 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula 
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
          pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <p>
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, 
          rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
          pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate 
          eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
      </Tab>
      <Tab title="Tab 2">
        <h3>Tab 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula 
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
          pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <p>
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, 
          rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
          pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate 
          eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
      </Tab>
      <Tab title="Tab 3">
        <h3>Tab 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula 
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
          pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <p>
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, 
          rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
          pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate 
          eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
      </Tab>
      <Tab title="Tab 4">
        <h3>Tab 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula 
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
          pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <p>
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, 
          rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
          pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate 
          eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
      </Tab>
    </Tabs>
  `
})

export const TabsHorizontal = Template.bind({})
TabsHorizontal.args = {
  horizontal: true
}

export const TabsVertical = Template.bind({})
TabsVertical.args = {
  vertical: true
}
