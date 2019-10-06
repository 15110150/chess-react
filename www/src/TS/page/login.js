import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const API = 'http://localhost:63282/tournament/TournamentManager';

class Login extends React.Component {
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
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                 </Button>
            </Form>
        );
    }
}

export default Login;