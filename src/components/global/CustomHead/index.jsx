import React from 'react'
import PropTypes from 'prop-types';

const CustomHead = ({ title = 'Kim Stair: Frontend Engineer' }) => {
    return (
        <>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content="Senior frontend engineer building accessible, performant, beautiful experiences for the web." />
        </>
    )
}

CustomHead.propTypes = {
    title: PropTypes.string,
};

export default CustomHead