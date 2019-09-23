import styled, { createGlobalStyle } from "styled-components";

const colors = {
	background: "#ffffff",
	main: "#00bfff",
	accent: "#ff6347",
	text: "#1e1e1e",
	hint: "#dcdcdc"
};

export const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	padding: 24px;
	background-color: ${colors.background};

	color: ${colors.text};
	font-family: sans-serif;
	font-weight: lighter;
	line-height: 1.1em;
}

@media (max-width: 480px) {
	body {
		padding: 2px;
	}
}
`;

const rectangle = {
	margin: "10px",
	padding: "5px",
	border: `solid 1px ${colors.main}`,
	borderRadius: "2px"
};

export const Div = styled.div(rectangle);
export const Input = styled.input(rectangle);
export const Select = styled.select(rectangle);
export const Table = styled.table`
	border: none;
	border-collapse: separate;
	border-spacing: 4px;

	tr:nth-child(odd) {
		background-color: ${colors.hint};
	}

	td {
		padding: 8px;
		min-width: 5em;
	}
`;

export const Hover = el => styled(el)`
	:hover {
		border-width: 3px;
	}
`;

export const Focus = el => styled(el)`
	:focus {
		background-color: ${colors.hint};
		border-color: ${colors.accent};
	}
`;
