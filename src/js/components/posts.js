import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

export class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        try {
            return (
                <>
                    {/* <ul>
                        {this.props.articles.map(el => (
                            <li key={el.id}>asdjkasds{el.title}</li>
                        ))}
                    </ul> */}
                </>
            );
        } catch (error) {
            console.log("");
        }
        return (
            <>
            </>
        )
    }
}

function mapStateToProps(state) {
    console.log("hjkhjkhjkhjkh",state)
    return {
        articles: state.articles.slice(0, 10),
        remoteArticles: state.remoteArticles,
    };
}
export default connect(mapStateToProps)(Post);