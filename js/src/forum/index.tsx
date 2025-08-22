import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Navigation from 'flarum/common/components/Navigation';
import SessionDropdown from 'flarum/forum/components/SessionDropdown';
import Mithril from 'mithril';

app.initializers.add('wusong8899-move-session-dropdown', () => {
  extend(Navigation.prototype, 'view', function (vnode: Mithril.VnodeDOM<any, any>) {
    // Only work on mobile devices (viewport width <= 767px)
    if (window.innerWidth > 767) {
      return;
    }

    // Only work on homepage
    const routeName = app.current.get('routeName');
    if (routeName !== 'tags') {
      return;
    }

    if (!vnode || !vnode.children || !Array.isArray(vnode.children)) {
      return;
    }

    // Only add if user is logged in
    if (!app.session.user) {
      return;
    }

    // Check if we already added the session component to avoid duplication
    const hasSessionComponent = vnode.children.some((child: any) => 
      child && child.attrs && child.attrs.className && 
      child.attrs.className.includes('Navigation-session')
    );

    if (!hasSessionComponent) {
      // Add SessionDropdown component to navigation
      vnode.children.push(
        <li className="item-session Navigation-session">
          <SessionDropdown />
        </li>
      );
    }
  });
});