import React from 'react';
import { render } from '@testing-library/react';

import Lib508 from './lib508';

describe(' Lib508', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib508 />);
    expect(baseElement).toBeTruthy();
  });
});
