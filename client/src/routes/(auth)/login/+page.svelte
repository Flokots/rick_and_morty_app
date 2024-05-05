<script lang="ts">
    import { enhance } from '$app/forms' 
    import type { ActionData } from './$types'
  
    export let form: ActionData
  </script>
  
  
<section>
    <h1 class="heading">Login</h1>
    <div class="container">
        <form action="?/login" method="POST" use:enhance>
            <div>
              <label for="username">Username</label>
              <input id="username" name="username" type="text" required />
            </div>
          
            <div>
              <label for="password">Password</label>
              <input id="password" name="password" type="password" required />
            </div>
          
            {#if form?.invalid}
              <p class="error">Username and password is required.</p>
            {/if}
          
            {#if form?.credentials}
              <p class="error">You have entered the wrong credentials.</p>
            {/if}
          
            <button type="submit">Log in</button>
          </form>
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
	form {
		margin: 2rem 0;
		display: grid;
		justify-content: start;
		row-gap: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.4rem;
		color: hsl(220 20% 80%);
	}

	input,
	button {
		padding: 1rem;
		font: inherit;
		color: inherit;
		background-color: hsl(220 20% 20%);
		border: none;
		border-radius: 1rem;
		border: 1px solid hsl(220 20% 28%);
	}

	button {
		margin-top: 0.4rem;
		font-weight: 700;
		cursor: pointer;
		max-width: 140px;
	}

    .error {
	color: tomato;
}
  </style>