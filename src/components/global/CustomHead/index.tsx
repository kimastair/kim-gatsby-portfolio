import React from 'react'

interface Props {
  title?: string
}

// This component is used to set the title and description of the page
const CustomHead: React.FC<Props> = ({
  title = 'Kim Stair: Frontend Engineer',
}) => (
  <>
    <html lang="en" />
    <title>{title}</title>
    <meta
      name="description"
      content="Senior frontend engineer building accessible, performant, beautiful experiences for the web."
    />
  </>
)

export default CustomHead
