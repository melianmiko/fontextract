import {PropsWithChildren} from "react";

export function BrowserSupportTest(props: PropsWithChildren) {
    let bc = document.createElement("canvas").getContext("2d");
    bc.font = "20px sans";

    let metrics = bc.measureText("hello");
    return typeof metrics.fontBoundingBoxAscent == "number" ? null : (<>{props.children}</>);
}