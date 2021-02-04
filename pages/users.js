import Head from 'next/head';
import styles from '../styles/components/Users.module.scss'

const Users = () => {
    return(
        <div>
            <Head>
                <title>Users</title>
            </Head>
            <p className={ styles.main }>
                Users
            </p>
        </div>
    );
}

export default Users;