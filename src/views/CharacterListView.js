import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchAction } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchAction("https://swapi.co/api/people/")
  }

  componentDidUpdate(prevProps) {
    (prevProps.nextPage !== this.props.nextPage && this.props.nextPage !== null)
    && (this.props.fetchAction(this.props.nextPage))
  }

  render() {
    return(
      <div>
        <div className="header">
          <h1>ALL THE STARS</h1>
          <h2>SOME OF THE WARS</h2>
        </div>
        {this.props.characters && !this.props.nextPage && (
          <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.characters} />
          </div>
        )}
        {this.props.fetching && (
          // return something here to indicate that you are fetching data
          <p className="loading">LOADING...</p>
        )}
        {this.props.error && (
          <p>this.props.error</p>
        )}
      </div>
  )}
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error,
    nextPage: state.charsReducer.nextPage
  }
}

export default connect(
  mapStateToProps,
  { fetchAction }
)(CharacterListView);
