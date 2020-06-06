import React from 'react';
import { render } from '@testing-library/react';

import Lib621 from './lib621';

describe(' Lib621', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib621 />);
    expect(baseElement).toBeTruthy();
  });
});
