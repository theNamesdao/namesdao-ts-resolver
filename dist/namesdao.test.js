// src/namesdao.test.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Namesdao } from './namesdao';
describe('NamesDAO Integration Test', () => {
    it('should fetch the address for a valid name', () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedName = "Namesdao.xch";
        const expectedAddress = "xch1jhye8dmkhree0zr8t09rlzm9cc82mhuqtp5tlmsj4kuqvs69s2wsl90su4";
        const namesdao = Namesdao.getInstance();
        const result = yield namesdao.getNameAddress(expectedName);
        expect(result).toEqual(expectedAddress);
    }));
});
