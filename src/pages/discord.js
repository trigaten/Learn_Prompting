import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';

export default function Discord() {
    let url = "https://discord.gg/4Kq46MKFpH"
    useEffect(() => {
        window.location.href = url;
    }, []);

    return (
        <p>Redirecting to link..., please click <Link href={url} target="_self">here</Link> if not redirected</p>
    );
};