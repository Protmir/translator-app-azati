import { apiInstance } from './apiInstance';
import { TranslateRequest } from '../types/translate/translateRequest';

export const translate = (data: TranslateRequest) => apiInstance.post(
    '',
    data,
);
