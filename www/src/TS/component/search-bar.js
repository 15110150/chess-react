import React from 'react';
import Form from 'react-bootstrap/Form';
import TournamentList from '../page/tournament-list';
import Container from 'react-bootstrap/Container';

const API = 'http://localhost:63282/federation/GetAll';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            federation: [],
            federationID: 0,
            fromDate: null,
            hasError: false,
            updateTournament: false
        };
    }

    componentDidMount() {
        fetch(API)
            .then(data => data.json())
            .then(data => this.setState({ federation: data }));
    }

    handleDateChange = (event) => {
        this.setState({
            fromDate: event
        });
    }

    handleChange = (event) => {
        this.setState({
            federationID: event.target.value
        });
    }

    handleTextChange = (event) => {
        console.log(event);
        this.setState({
            name: event.target.value
        });
    };

    searchTournamet = () => {
        this.setState(({
            updateTournament: !this.state.updateTournament
        }));
    }

    render() {
        return (
            <Container>
                <Form.Row>
                    <Form.Group controlId="formGridCity">
                        <Form.Label>Name</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group controlId="formGridState">
                        <Form.Label>Federaion</Form.Label>
                        <Form.Control as="select">
                            {this.state.federation.map((row) =>
                                <option key={row.ID}>{row.Name}</option>
                            )}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
                <TournamentList filter={this.state} isUpdate={this.state.updateTournament} />
            </Container>
        );
    }
}

export default SearchBar;