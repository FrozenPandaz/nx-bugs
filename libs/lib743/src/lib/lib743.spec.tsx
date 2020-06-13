import React from 'react';
import { render } from '@testing-library/react';

import Lib743 from './lib743';

describe(' Lib743', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib743 />);
    expect(baseElement).toBeTruthy();
  });
});
