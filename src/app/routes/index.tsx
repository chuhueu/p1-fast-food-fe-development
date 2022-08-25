import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import { configRoutesUser, configRoutesAdmin } from '../config/configRoutes';

export function ElementRouteUser() {
    return (
        <Suspense fallback={<div className="h-screen w-full z-[9999] bg-zinc-300">Loading...</div>}>
            <Routes>
                {configRoutesUser.map(({ path, element, routes }, index) => (
                    <Route key={`route-${index}`} path={path} element={element}>
                        {routes && (
                            <>
                                {routes.map((route, index) => (
                                    <Route key={`route-${index}`} path={route.path} element={route.element} />
                                ))}
                            </>
                        )}
                    </Route>
                ))}
            </Routes>
        </Suspense>
    );
}

export function ElementRouteAdmin() {
    return (
        <Suspense fallback={<div className="h-screen w-full z-[9999] bg-zinc-300">Loading...</div>}>
            <Routes>
                {configRoutesAdmin.map(({ path, element, routes }, index) => (
                    <Route key={`route-${index}`} path={path} element={element}>
                        {routes && (
                            <>
                                {routes.map((route, index) => (
                                    <Route key={`route-${index}`} path={route.path} element={route.element} />
                                ))}
                            </>
                        )}
                    </Route>
                ))}
            </Routes>
        </Suspense>
    );
}
