import React from 'react';
import { render } from '@testing-library/react';

import Lib911 from './lib911';

describe(' Lib911', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib911 />);
    expect(baseElement).toBeTruthy();
  });
});
