import { FilterPipe } from './filter.pipe';

const testArray = [
    { id: 1, name: 'test1', date: new Date().getTime() },
    { id: 2, name: 'test2', date: new Date(2023, 3, 20).getTime() },
    { id: 3, name: 'test32', date: new Date(2050, 3, 20).getTime() },
];

describe('FilterPipe', () => {
    const pipe = new FilterPipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should not mutate array', () => {
        const array = [...testArray];

        expect(pipe.transform(array, 'test', 'name')).not.toBe(testArray);
    });

    it('should filter array', () => {
        expect(pipe.transform(testArray, '2', 'name')).toHaveSize(2);
    });
});
