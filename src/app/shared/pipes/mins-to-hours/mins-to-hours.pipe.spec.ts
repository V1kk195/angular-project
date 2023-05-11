import { MinsToHoursPipe } from './mins-to-hours.pipe';

describe('MinsToHoursPipe', () => {
    const pipe = new MinsToHoursPipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should transform minutes to hours and minutes string', () => {
        expect(pipe.transform(125)).toBe('2h 5min');
        expect(pipe.transform('45')).toBe('45min');
        expect(pipe.transform()).toBe('');
        expect(pipe.transform(60).trim()).toBe('1h');
    });
});
