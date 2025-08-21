import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Navigation from 'flarum/common/components/Navigation';
import SessionDropdown from 'flarum/forum/components/SessionDropdown';
import Component from 'flarum/common/Component';
import Mithril from 'mithril';

app.initializers.add('wusong8899/move-session-dropdown', () => {
  extend(Navigation.prototype, 'view', function (vnode: Mithril.VnodeDOM<any, any>) {
    if (!vnode || !vnode.children || !Array.isArray(vnode.children)) {
      return;
    }

    // Only add if user is logged in
    if (!app.session.user) {
      return;
    }

    // Check if we already added it to avoid duplication
    const hasSessionDropdown = vnode.children.some((child: any) => 
      child && child.tag === SessionDropdown
    );

    if (!hasSessionDropdown) {
      // Add spacer to push session dropdown to the right
      vnode.children.push(
        <li className="Navigation-spacer" style={{flex: 1}}></li>
      );
      
      // Add the SessionDropdown component
      vnode.children.push(
        <li className="item-session Navigation-session">
          <SessionDropdown />
        </li>
      );
    }
  });
});