import { OrderByPipe } from './order-by.pipe';

const testArray = [
    { id: 1, name: 'test1', date: new Date().getTime() },
    { id: 2, name: 'test2', date: new Date(2023, 3, 20).getTime() },
    { id: 3, name: 'test3', date: new Date(2050, 3, 20).getTime() },
];
describe('OrderByPipe', () => {
    const pipe = new OrderByPipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return empty array if nothing provided', () => {
        expect(pipe.transform(undefined, 'date')).toEqual([]);
    });

    it('should not mutate array', () => {
        const array = [...testArray];

        expect(pipe.transform(array, 'date')).not.toBe(testArray);
    });

    it('should order array by date in ascending order', () => {
        const sorted = pipe.transform(testArray, 'date');

        expect(sorted[0].id).toBe(2);
    });

    it('should order array by date in descending', () => {
        const sorted = pipe.transform(testArray, 'date', 'desc');

        expect(sorted[0].id).toBe(3);
    });
});
