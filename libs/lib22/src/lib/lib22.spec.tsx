import React from 'react';
import { render } from '@testing-library/react';

import Lib22 from './lib22';

describe(' Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});
