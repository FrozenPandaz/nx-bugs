import React from 'react';
import { render } from '@testing-library/react';

import Lib35 from './lib35';

describe(' Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});
