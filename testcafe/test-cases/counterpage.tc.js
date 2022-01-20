import { Selector } from "testcafe";
import { accessibilityTest } from "../utilities/accessibility-tests.tc";

export const counterpageTest = async (tc) => {
    const clickmeButton = Selector('#btnClickMe');
    const clickedText = Selector('#clickedTxt').innerText;

    await tc.expect(clickedText).eql('You clicked 0 times.');
    await tc.click(clickmeButton);

    await tc.expect(clickedText).eql('You clicked 1 times.');

    await accessibilityTest(tc);
}