import React from 'react';
import { render } from '@testing-library/react';

import Lib474 from './lib474';

describe(' Lib474', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib474 />);
    expect(baseElement).toBeTruthy();
  });
});
