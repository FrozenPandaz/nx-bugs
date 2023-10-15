import { mount } from '@vue/test-utils';
import ButtonsButtons from './buttons.vue';

describe('ButtonsButtons', () => {
  it('renders properly', () => {
    const wrapper = mount(ButtonsButtons, {});
    expect(wrapper.text()).toContain('Welcome to ButtonsButtons');
  });
});
