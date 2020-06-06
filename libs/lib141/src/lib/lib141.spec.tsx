import React from 'react';
import { render } from '@testing-library/react';

import Lib141 from './lib141';

describe(' Lib141', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib141 />);
    expect(baseElement).toBeTruthy();
  });
});
