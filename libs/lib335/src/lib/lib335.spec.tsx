import React from 'react';
import { render } from '@testing-library/react';

import Lib335 from './lib335';

describe(' Lib335', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib335 />);
    expect(baseElement).toBeTruthy();
  });
});
