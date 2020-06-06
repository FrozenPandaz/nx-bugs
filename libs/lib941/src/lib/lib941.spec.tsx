import React from 'react';
import { render } from '@testing-library/react';

import Lib941 from './lib941';

describe(' Lib941', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib941 />);
    expect(baseElement).toBeTruthy();
  });
});
