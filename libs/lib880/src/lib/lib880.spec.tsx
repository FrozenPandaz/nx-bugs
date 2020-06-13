import React from 'react';
import { render } from '@testing-library/react';

import Lib880 from './lib880';

describe(' Lib880', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib880 />);
    expect(baseElement).toBeTruthy();
  });
});
