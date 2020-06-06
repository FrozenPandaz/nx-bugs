import React from 'react';
import { render } from '@testing-library/react';

import Lib800 from './lib800';

describe(' Lib800', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib800 />);
    expect(baseElement).toBeTruthy();
  });
});
