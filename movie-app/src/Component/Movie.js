import React from "react";
import PropTypes from 'prop-types';

function Movie() {
    return <h1></h1>;
}

Movie.protType = {
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;