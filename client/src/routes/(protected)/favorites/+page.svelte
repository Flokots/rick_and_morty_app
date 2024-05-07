<script lang="ts">
	import { page } from '$app/stores';
  
	let favorites = $page.data.props.favorites || [];
  </script>
  
  <section>
	<div class="container">
	  <div>
		{#if $page.data.user}
		<h1 class="heading">Favorite Characters</h1>
		  <p>Welcome {$page.data.user.name} Here are your favorite characters: </p>
		{/if}
  
		{#if $page.data.user.role === 'ADMIN'}
		  <form action="/logout" method="POST">
			<button type="submit">Log out</button>
		  </form>
		{/if}
  
		{#each favorites as favorite}
		  <div>
			<h2>{favorite.character.name}</h2>
			<p>Status: {favorite.character.status}</p>
			<p>Species: {favorite.character.species}</p>
		  </div>
		{/each}
	  </div>
	</div>
  </section>
  
  <style>
   .heading {
	  text-align: center;
	  background: linear-gradient(90deg, hsl(118, 95%, 45%) 30%, #0abbec 60%);
	  background-clip: text;
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	}
  </style>
  