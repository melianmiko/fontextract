import {render} from "preact";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {PageRoot} from "./components/page/PageRoot";
import {FontExtractApp} from "./FontExtractApp";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {AboutPage} from "./AboutPage";

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
