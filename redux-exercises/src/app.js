import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

class App extends React.Component {

    componentWillMount() {
        this.props.moviesList();
    }

    renderMovies = (movies) => (
        movies ?
            movies.map(item => (
                <div>
                    {item.name}
                </div>
            ))
            :
            null
    );

    render() {
        console.log(this.props.data.movies);
        return (
            <div>
                {this.renderMovies(this.props.data.movies)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies,
    }
};

export default connect(mapStateToProps, actions)(App);