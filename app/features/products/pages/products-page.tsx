import { redirect } from 'react-router';
import { LINK } from '~/common/config';

export function loader() {
 return redirect(LINK.PRODUCT_LEADERBOARDS);
}
