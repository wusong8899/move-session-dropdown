<?php

declare(strict_types=1);

namespace wusong8899\MoveSessionDropdown;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/js/dist/forum.css'),
];