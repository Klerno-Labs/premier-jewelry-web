import { db } from '@/lib/db';
import { User } from '@/types/user.types';

export const fetchUsers = async (): Promise<User[]> => {
  const users = await db.users.findMany();
  return users;
};