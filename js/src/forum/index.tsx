import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Navigation from 'flarum/common/components/Navigation';
import SessionDropdown from 'flarum/forum/components/SessionDropdown';
import avatar from 'flarum/common/helpers/avatar';
import Mithril from 'mithril';

app.initializers.add('wusong8899-move-session-dropdown', () => {
  extend(Navigation.prototype, 'view', function (vnode: Mithril.VnodeDOM<any, any>) {
    // Only work on mobile devices (viewport width <= 767px)
    if (window.innerWidth > 767) {
      return;
    }

    if (!vnode || !vnode.children || !Array.isArray(vnode.children)) {
      return;
    }

    // Only add if user is logged in
    if (!app.session.user) {
      return;
    }

    // Check if we already added the avatar component to avoid duplication
    const hasAvatarComponent = vnode.children.some((child: any) => 
      child && child.attrs && child.attrs.className && 
      child.attrs.className.includes('Navigation-avatar')
    );

    if (!hasAvatarComponent) {
      // Add mobile avatar component
      vnode.children.push(
        <li className="item-avatar Navigation-avatar">
          <button 
            className="Button Button--flat Avatar-button"
            onclick={() => {
              // Find and trigger the original session dropdown click
              const originalDropdown = document.querySelector('#header-secondary .SessionDropdown .Dropdown-toggle, #drawer .SessionDropdown .Dropdown-toggle');
              if (originalDropdown) {
                (originalDropdown as HTMLElement).click();
              }
            }}
          >
            {avatar(app.session.user, { className: 'Avatar--size32' })}
          </button>
        </li>
      );
    }
  });
});