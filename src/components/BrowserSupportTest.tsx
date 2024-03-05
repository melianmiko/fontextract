import {PropsWithChildren} from "react";

export function BrowserSupportTest() {
    const bc = document.createElement("canvas").getContext("2d");
    bc.font = "20px sans";

    const metrics = bc.measureText("hello");
    const isSupported = typeof metrics.fontBoundingBoxAscent == "number";

    const warnView = document.getElementById("browser_not_supported");
    if(!isSupported && warnView)
        warnView.style.display = "";

    return null;
}