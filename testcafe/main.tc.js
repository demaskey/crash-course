import { homepageTest } from './test-cases/homepage.tc';

fixture('Homepage').page('http://localhost:3000');
test.meta('Traceability', ['lesson-3-2'])(
    'Homepage',
    homepageTest
);