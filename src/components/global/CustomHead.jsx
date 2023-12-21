import React from 'react'

const CustomHead = (props) => {
    let title = props?.title;
    return (
        <>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content="Senior frontend engineer building accessible, performant, beautiful experiences for the web." />
        </>
    )
}

export default CustomHead