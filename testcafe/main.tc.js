import { homepageTest } from './test-cases/homepage.tc';
import { counterpageTest } from './test-cases/counterpage.tc';

fixture('Homepage').page('http://localhost:3000');
test.meta('Traceability', ['lesson-3-2'])(
    'Homepage',
    homepageTest
);

fixture('Counterpage').page('http://localhost:3000/counter');
test.meta('Traceability', ['lesson-3-2'])(
    'Counterpage',
    counterpageTest
);