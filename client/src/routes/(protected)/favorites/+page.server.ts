import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { getFavoritesByUserId } from '$lib/server/database';

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    redirect(302, '/')
  }

  const userId = locals.user.id;
  const favoritesData = await getFavoritesByUserId(userId);

  return { props: { favorites: favoritesData } };
};