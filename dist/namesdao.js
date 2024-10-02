// src/namesdao.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
export class Namesdao {
    constructor() { }
    static getInstance() {
        if (!Namesdao.instance) {
            Namesdao.instance = new Namesdao();
        }
        return Namesdao.instance;
    }
    getNameAddress(name) {
        return __awaiter(this, void 0, void 0, function* () {
            // Trim and remove ".xch" if it exists
            const trimmedName = name.trim().replace(/\.xch$/, '');
            const response = yield axios.get(`https://namesdaolookup.xchstorage.com/${trimmedName.toLowerCase()}.json`);
            if (response.data && 'address' in response.data) {
                return response.data.address;
            }
            throw new Error('Address not found for the given name.');
        });
    }
}
