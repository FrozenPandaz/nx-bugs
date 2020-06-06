import React from 'react';
import { render } from '@testing-library/react';

import Lib518 from './lib518';

describe(' Lib518', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib518 />);
    expect(baseElement).toBeTruthy();
  });
});
