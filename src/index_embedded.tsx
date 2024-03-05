import {render} from "preact";
import {FontExtractApp} from "./FontExtractApp";
import {store} from "./redux/store";
import {Provider} from "react-redux";


function App() {
    return (
        <Provider store={store}>
            <FontExtractApp />
        </Provider>
    )
}

render(<App />, document.body);
