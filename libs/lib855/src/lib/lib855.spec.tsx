import React from 'react';
import { render } from '@testing-library/react';

import Lib855 from './lib855';

describe(' Lib855', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib855 />);
    expect(baseElement).toBeTruthy();
  });
});
