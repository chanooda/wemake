import { redirect } from 'react-router';
import { LINK } from '~/common/config';

export const loader = () => {
 return redirect(LINK.USER('username'));
};
