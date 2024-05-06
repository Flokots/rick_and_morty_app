// client/src/routes/(protected)/favorites/+page.server.ts
import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { db } from '$lib/server/database';

export const load: PageServerLoad = async ({ locals }) => {
  // redirect user if not logged in
  if (!locals.user) {
    redirect(302, '/')
  }

  const userId = locals.user.id;
  const favoritesData = await db.favorite.findMany({
    where: { userId: userId },
    include: { character: true },
  });

  return { props: { favorites: favoritesData } };
};