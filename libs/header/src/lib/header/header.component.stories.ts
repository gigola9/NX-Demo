import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeaderComponent } from './header.component';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ტექსტი',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ტექსტი',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ტექსტი',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  primary: true,
  label: 'ტექსტი'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ტექსტი',
  backgroundColor: 'gold',
  color: 'white'
};
