# Move Session Dropdown

A Flarum extension that moves the user session dropdown from the secondary navigation area to the main navigation bar for better accessibility and user experience.

## Features

- Moves SessionDropdown to the main navigation bar (`#app-navigation`)
- Automatically hides the original SessionDropdown location
- Responsive design - hides username on mobile to save space
- Only shows when user is logged in
- Uses flexbox layout for proper positioning

## Installation

1. Copy this extension to your Flarum's `packages/` directory
2. Run `composer install` in the extension directory
3. Enable the extension in your Flarum admin panel

## Development

```bash
cd js
pnpm install
pnpm run build       # Build for production
pnpm run dev:forum   # Development build with watch mode
```

## Technical Details

- Built with Vite + TypeScript
- Uses Mithril.js JSX syntax
- LESS preprocessing for styles
- Extends Flarum's Navigation component
- Modern build system following Flarum extension patterns