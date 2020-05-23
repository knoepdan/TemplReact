import * as React from 'react';
import { MenuItem, RouteInfo } from 'app/common/NavigationState';
import { ExamplesPage } from './ExamplesPage';

export function addDevMenues<T>(topMenu: MenuItem): void {
    // developer
    let ex = new MenuItem(
        topMenu,
        'Examples',
        new RouteInfo('/dev/examples', React.createElement(ExamplesPage), false),
    );
    topMenu.children.push(ex);
}
