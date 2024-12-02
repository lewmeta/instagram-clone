import './bootstrap';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect'
import { livewire_hot_reload } from 'virtual:livewire-hot-reload'

window.Alpine = Alpine;

Alpine.plugin(intersect)
Alpine.start();

livewire_hot_reload();