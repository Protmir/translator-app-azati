import { RefObject, useEffect } from 'react';

export const useOutSideClick = (ref: RefObject<HTMLElement>, callback: (event: Event) => void) => {
    useEffect(() => {
        window.addEventListener('mousedown', callback);

        return () => window.removeEventListener('mousedown', callback);
    }, [ref, callback]);
};
