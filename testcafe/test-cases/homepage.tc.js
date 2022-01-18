import { Selector } from 'testcafe';
import { accessibilityTest } from '../utilities/accessibility-tests.tc';

export const homepageTest = async (tc) => {
    const homeHeaderText = Selector('#Home').innerText;

    await tc.expect(homeHeaderText).contains('Home');
    
    await accessibilityTest(tc);
};