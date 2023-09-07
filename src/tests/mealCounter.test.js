import { countCategoryMeals } from '../modules/mealCounter.js';

describe('countCategoryMeals', () => {
  test('returns 0 when category is null', async () => {
    const res = await countCategoryMeals(null);
    expect(res).toBe(0);
  });

  test('returns 0 when category is undefined', async () => {
    const res = await countCategoryMeals(undefined);
    expect(res).toBe(0);
  });

  test('returns 0 when category is an empty string', async () => {
    const res = await countCategoryMeals('');
    expect(res).toBe(0);
  });

  test('returns 0 when category is not a string', async () => {
    const res = await countCategoryMeals(123);
    expect(res).toBe(0);
  });
});
