// src/namesdao.test.ts

import { Namesdao } from './namesdao';


describe('NamesDAO Integration Test', () => {
  it('should fetch the address for a valid name', async () => {
    const expectedName = "Namesdao.xch";
    const expectedAddress = "xch1jhye8dmkhree0zr8t09rlzm9cc82mhuqtp5tlmsj4kuqvs69s2wsl90su4";

    const namesdao = Namesdao.getInstance();
    const result = await namesdao.getNameAddress(expectedName);

    expect(result).toEqual(expectedAddress);
  });
});
