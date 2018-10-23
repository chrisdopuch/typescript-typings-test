import { reverse } from '../index';

describe('index', () => {
    describe('#reverse', () => {
        it('should return empty string for empty input', () => {
            const s = '';

            const result = reverse(s);

            expect(result).toEqual('');
        });

        it('should return the reversed input', () => {
            const s = 'abcdefg';

            const result = reverse(s);

            expect(result).toEqual('gfedcba');
        });
    });
});
