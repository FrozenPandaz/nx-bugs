import React from 'react';
import { render } from '@testing-library/react';

import Lib993 from './lib993';

describe(' Lib993', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib993 />);
    expect(baseElement).toBeTruthy();
  });
});
