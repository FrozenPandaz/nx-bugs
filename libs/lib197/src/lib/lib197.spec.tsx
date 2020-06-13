import React from 'react';
import { render } from '@testing-library/react';

import Lib197 from './lib197';

describe(' Lib197', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib197 />);
    expect(baseElement).toBeTruthy();
  });
});
