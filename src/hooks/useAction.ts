import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TranslatorActionCreators from '../store/actions/translator-actions';

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(TranslatorActionCreators, dispatch);
};
