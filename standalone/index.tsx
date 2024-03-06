import {render} from "preact";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {PageRoot} from "../src/components/page/PageRoot";
import {FontExtractApp} from "../src/FontExtractApp";
import {AboutPage} from "../src/AboutPage";
import {store} from "../src/redux/store";
import {Provider} from "react-redux";

const router = createHashRouter([
    {
        path: "/",
        element: <PageRoot children={<FontExtractApp/>} />,
        errorElement: <PageRoot children={<p>Not found</p>} />,
    },
    {
        path: "/about",
        element: <PageRoot children={<AboutPage />} />,
    }
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

render(<App />, document.body);
