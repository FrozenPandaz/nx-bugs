import React from 'react';
import { render } from '@testing-library/react';

import Lib609 from './lib609';

describe(' Lib609', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib609 />);
    expect(baseElement).toBeTruthy();
  });
});
