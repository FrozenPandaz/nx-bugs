import React from 'react';
import { render } from '@testing-library/react';

import Lib570 from './lib570';

describe(' Lib570', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib570 />);
    expect(baseElement).toBeTruthy();
  });
});
