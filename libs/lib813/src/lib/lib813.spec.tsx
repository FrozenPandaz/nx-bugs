import React from 'react';
import { render } from '@testing-library/react';

import Lib813 from './lib813';

describe(' Lib813', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib813 />);
    expect(baseElement).toBeTruthy();
  });
});
