import React from 'react';
import { connect } from 'react-redux';


const ConnectedList = ({ articles, remoteArticles, loading }) => {
    return (<> < ul>
        {
            articles.map(el => {
                return (<>
                    <li key={el.id}>{el.title}</li></>)
            })
        }
        {
            remoteArticles.map(el => {
                return (<>
                    <li key={el.userId}>{el.title}</li></>)
            })
        }
        {loading && <p>Loading..</p>}
    </ul >
    </>)
};

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state)
    return {
        articles: state.articles,
        remoteArticles: state.remoteArticles,
        loading: state.loading,
        error: state.error
    };
}


const List = connect(mapStateToProps)(ConnectedList);

export default List;