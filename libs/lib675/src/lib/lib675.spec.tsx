import React from 'react';
import { render } from '@testing-library/react';

import Lib675 from './lib675';

describe(' Lib675', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib675 />);
    expect(baseElement).toBeTruthy();
  });
});
