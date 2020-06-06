import React from 'react';
import { render } from '@testing-library/react';

import Lib898 from './lib898';

describe(' Lib898', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib898 />);
    expect(baseElement).toBeTruthy();
  });
});
