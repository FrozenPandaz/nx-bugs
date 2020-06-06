import React from 'react';
import { render } from '@testing-library/react';

import Lib891 from './lib891';

describe(' Lib891', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib891 />);
    expect(baseElement).toBeTruthy();
  });
});
