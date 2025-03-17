import { Router as ZiggyRouter } from 'ziggy-js';

type AppRouter = {
    (): ZiggyRouter;
    (name: string, params?: any, absolute?: boolean): string;
};

declare global {
    // eslint-disable-next-line no-var
    var route: AppRouter;
}
