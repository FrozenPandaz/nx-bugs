import React from 'react';
import { render } from '@testing-library/react';

import Lib92 from './lib92';

describe(' Lib92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib92 />);
    expect(baseElement).toBeTruthy();
  });
});
