import React from 'react';
import { render } from '@testing-library/react';

import Lib62 from './lib62';

describe(' Lib62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib62 />);
    expect(baseElement).toBeTruthy();
  });
});
