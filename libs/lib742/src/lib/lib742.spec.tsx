import React from 'react';
import { render } from '@testing-library/react';

import Lib742 from './lib742';

describe(' Lib742', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib742 />);
    expect(baseElement).toBeTruthy();
  });
});
