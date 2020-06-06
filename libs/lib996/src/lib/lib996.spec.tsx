import React from 'react';
import { render } from '@testing-library/react';

import Lib996 from './lib996';

describe(' Lib996', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib996 />);
    expect(baseElement).toBeTruthy();
  });
});
