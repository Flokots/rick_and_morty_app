import type { Handle } from '@sveltejs/kit';
import { db } from '$lib/server/database';

export const handle: Handle = async ({ event, resolve }) => {
  // Get cookies from the browser
  const session = event.cookies.get('session');

  if (!session) {
    // If there is no session, load the page as normal
    return await resolve(event);
  }

  // Find the user based on the session
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { id: true, username: true, role: true },
  });

  // If `user` exists, set `event.locals.user` with the user ID, username, and role
  if (user) {
    event.locals.user = {
      id: user.id,
      name: user.username,
      role: user.role.name,
    };
  }

  // Load the page as normal
  return await resolve(event);
};
