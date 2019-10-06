import React from 'react';
import * as moment from 'moment';
import Table from 'react-bootstrap/Table';

const API = 'http://localhost:63282/tournament/TournamentManager';

class TournamentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tournaments: [],
            hasError: false,
            isUpdate: false,
            selectPage: 1,
            totalPage: 0
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isUpdate !== prevProps.isUpdate) {
            this.fetchData();
        }
        if (this.state.isUpdate !== prevState.isUpdate) {
            this.fetchData();
        }
    }

    fetchData() {
        const url = API;
        fetch(url)
            .then(data => data.json())
            .then(data => this.setState({ tournaments: data }));
    }

    render() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>NameTournament</th>
                        <th>Federation</th>
                        <th>FederationFlag</th>
                        <th>StartDate</th>
                        <th>EndDate</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tournaments.map((row, index) => {
                        return (
                            <tr key={row.ID}>
                                <td>{index++}</td>
                                <td>{row.Name}</td>
                                <td>{row.Federation.Acronym}</td>
                                <td>{row.Federation.Flag}</td>
                                <td>{moment(row.StartDate).format('DD/MM/YYYY')}</td>
                                <td>{moment(row.EndDate).format('DD/MM/YYYY')}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}

export default TournamentList;