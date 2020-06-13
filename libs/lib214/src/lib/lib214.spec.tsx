import React from 'react';
import { render } from '@testing-library/react';

import Lib214 from './lib214';

describe(' Lib214', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib214 />);
    expect(baseElement).toBeTruthy();
  });
});
