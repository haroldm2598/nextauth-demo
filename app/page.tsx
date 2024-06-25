import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import UserCard from './components/UserCard';

export default async function Home() {
	const session = await getServerSession();

	return (
		<>
			{session ? (
				<UserCard user={session?.user} pagetype={'Home'} />
			) : (
				<h1 className='text-5xl'>You shall not pass</h1>
			)}
		</>
	);
}
