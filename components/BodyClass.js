'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation';

const sanitizePathname = (pathname) => {
    return pathname
        .replace(/^\//, '') // Remove leading slash
        .replace(/\//g, '-') // Replace slashes with hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .toLowerCase();
};
function BodyClass() {
    const pathname = usePathname();
    useEffect(() => {
        if (pathname) {
            const sanitizedId = sanitizePathname(pathname);
            document.body.id = `page-${sanitizedId || 'home'}`;
        }
    }, [pathname]);

    return null;
}

export default BodyClass