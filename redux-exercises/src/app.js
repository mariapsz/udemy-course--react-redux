import * as React from 'react';
import {connect} from 'react-redux';
import {moviesList, directorsList} from './actions';
import { bindActionCreators} from 'redux';

class App extends React.Component {

    componentWillMount() {
        this.props.moviesList();
        this.props.directorsList();
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
        return (
            <div>
                {this.renderMovies(this.props.data.directors)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies,
    }
};

const mapDispatchToProps = (dispatch) => {
     return bindActionCreators({
         moviesList,
         directorsList,
     }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);