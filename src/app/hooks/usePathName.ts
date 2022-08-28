import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const usePathName = (): string => {
    const [pathName, setPathName] = useState('');
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.includes('delivery')) {
            setPathName(pathname.slice(10));
        }
    }, [pathname]);

    return pathName;
};

const capitalizeFirstLetter = (letter: string): string => {
    return letter[0].toUpperCase() + letter.substring(1);
};

export { usePathName, capitalizeFirstLetter };
