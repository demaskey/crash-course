import { axeCheck, createReport } from 'axe-testcafe';

export const accessibilityTest = async (tc) => {
    const {error, violations } = await axeCheck(tc);
    await tc.expect(violations.length === 0).ok(createReport(violations));
};