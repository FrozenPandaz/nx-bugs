import React from 'react';
import { render } from '@testing-library/react';

import Lib951 from './lib951';

describe(' Lib951', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib951 />);
    expect(baseElement).toBeTruthy();
  });
});
