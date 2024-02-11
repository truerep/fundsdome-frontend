import { getUserInfo } from '@/api';
import Cookies from 'universal-cookie';

const authService = async () => {
    const cookies = new Cookies();

    // cookies.remove('auth_token', { path: '/' });
    const authToken = cookies.get('auth_token', { domain: 'fundsdome.com' });
    const isAuthenticated = await getUserInfo()
    if (isAuthenticated?._id) {
        return true;
    } else {
        return false
    }
}

export default authService;