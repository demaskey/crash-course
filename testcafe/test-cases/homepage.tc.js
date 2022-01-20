import { Selector } from 'testcafe';
import { accessibilityTest } from '../utilities/accessibility-tests.tc';

export const homepageTest = async (tc) => {
    const homeHeaderText = Selector('h1').innerText;

    await tc.expect(homeHeaderText).contains('Hello, World!');
    
    await accessibilityTest(tc);
};