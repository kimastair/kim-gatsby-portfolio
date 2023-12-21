import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key="alata"
            rel="preload"
            href="/fonts/Alata/Alata-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="notosans"
            rel="preload"
            href="/fonts/NotoSans/NotoSans-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
    ]);
};