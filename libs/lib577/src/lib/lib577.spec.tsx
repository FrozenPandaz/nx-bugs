import React from 'react';
import { render } from '@testing-library/react';

import Lib577 from './lib577';

describe(' Lib577', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib577 />);
    expect(baseElement).toBeTruthy();
  });
});
