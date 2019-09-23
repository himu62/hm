import * as React from "react";

import { Div, Input, Select, Table } from "../theme/default";
import { CPU } from "../data/cpu";

interface Props {
	data: CPU[];
}

interface State {
	selected: CPU;
	nameFilter: string;
}

export default class CPUSelector extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
			nameFilter: ""
		};
		this.search = this.search.bind(this);
		this.select = this.select.bind(this);
	}

	search(event) {
		this.setState({ nameFilter: event.target.value });
	}

	select(event) {
		const s = this.props.data.filter(v => v.name === event.target.value);
		if (s.length !== 1) {
			this.setState({ selected: null });
		}
		this.setState({ selected: s[0] });
	}

	list() {
		if (this.props.data.length === 0) {
			return (
				<Select size={5} disabled>
					<option>no CPU to select</option>
				</Select>
			);
		}

		const filtered = this.props.data.filter(
			v => v.name.indexOf(this.state.nameFilter) >= 0
		);

		return (
			<Select size={5} onChange={this.select}>
				{filtered.map((v, idx) => (
					<option key={idx} value={v.name}>
						{v.name}
					</option>
				))}
			</Select>
		);
	}

	showSelected() {
		if (this.state.selected) {
			return (
				<Table>
					<tbody>
						<tr>
							<td>Maker</td>
							<td>{this.state.selected.maker}</td>
						</tr>
						<tr>
							<td>Name</td>
							<td>{this.state.selected.name}</td>
						</tr>
					</tbody>
				</Table>
			);
		}
	}

	render() {
		return (
			<Div>
				<h2>CPU</h2>
				{this.list()}
				<Input type="text" onChange={this.search} />
				{this.showSelected()}
			</Div>
		);
	}
}
