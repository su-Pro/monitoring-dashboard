import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'example-component',
    title: 'Example',
    translate: 'EXAMPLE',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'example',
  },
  {
    id: 'plan',
    title: 'M plan',
    translate: 'PLAN',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'plan',
  },
  {
    id: 'note-card',
    title: 'note',
    translate: 'NOTE',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'apps/notes',
  },
];

export default navigationConfig;
