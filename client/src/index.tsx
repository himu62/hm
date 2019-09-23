import * as React from "react";
import * as ReactDOM from "react-dom";

import { GlobalStyle } from "./theme/default";
import CPUSelector from "./component/CPUSelector";
import CPUs from "./data/cpu";

ReactDOM.render(
	<div>
		<GlobalStyle />
		<h1>hm</h1>
		<CPUSelector data={CPUs} />
	</div>,
	document.querySelector("#app")
);
