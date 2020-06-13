import React from 'react';
import { render } from '@testing-library/react';

import Lib859 from './lib859';

describe(' Lib859', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib859 />);
    expect(baseElement).toBeTruthy();
  });
});
