<script lang="ts">
	import { page } from '$app/stores';
</script>

<section>
	<h1 class="heading">Admin</h1>

	<div class="container">
		{#if $page.data.user}
			<h3>Welcome {$page.data.user.name}!</h3>
		{/if}

		{#if $page.data.user.role === 'ADMIN'}
			<form action="/logout" method="POST">
				<button type="submit">Log out</button>
			</form>
		{/if}
	</div>
</section>

<style>
    .container {
        display: flex;
        justify-content: center;
    }

    .heading {
        text-align: center;
        background: linear-gradient(90deg, hsl(118, 95%, 45%) 30%, #0abbec 60%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    }
</style>