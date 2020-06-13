import React from 'react';
import { render } from '@testing-library/react';

import Lib959 from './lib959';

describe(' Lib959', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib959 />);
    expect(baseElement).toBeTruthy();
  });
});
