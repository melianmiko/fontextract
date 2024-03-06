import { render } from 'preact';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { PageRoot } from '../src/components/page/PageRoot';
import { FontExtractApp } from '../src/FontExtractApp';
import { AboutPage } from '../src/AboutPage';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';
import { type ReactElement } from 'react';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <PageRoot>
          <FontExtractApp/>
      </PageRoot>
    ),
    errorElement: (
      <PageRoot>
        <p>Not found</p>
      </PageRoot>
    )
  },
  {
    path: '/about',
    element: (
      <PageRoot>
        <AboutPage/>
      </PageRoot>
    )
  }
]);

function App (): ReactElement {
  return (
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  );
}

render(<App />, document.body);
