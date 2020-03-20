import React from 'react';
import { connect } from 'react-redux';
import { addArticle, getData } from '../actions/index';


class ConnectionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: '' });
    }

    render() {
        const { title } = this.state;
        return (<div >
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" id="title"
                        value={title}
                        onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                <button type="submit" className="btn btn-success" onClick={(e) => {
                    e.preventDefault();
                    return this.props.fetchPost()
                }}>Fetch Post</button>
            </form>
        </div>

        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article)),
        fetchPost: () => dispatch(getData())
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectionForm);

export default Form;