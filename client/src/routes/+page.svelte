<script>
    
</script>

<section class="py-5 text-center container">
	<div class="row py-lg-5">
		<div class="col-lg-8 col-md-8 mx-auto">
			<h1 class="rick-and-morty-heading">
				Rick and Morty<span class="rick-morty-heading-secondary">characters</span>
			</h1>
		</div>
	</div>
	<div class="container-fluid">
		<div class="d-flex" role="search">
			<input
                class="form-control me-2 rick-and-morty-border"
				type="text"
				placeholder="Search characters..."
			/>
			<button class="btn btn-outline-info" type="submit">Search</button>
		</div>
	</div>
</section>

<style>
    .rick-and-morty-heading {
		font-size: 84px;
		font-weight: 700;
		background: linear-gradient(90deg, hsl(118, 95%, 45%) 30%, #0abbec 70%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.rick-morty-heading-secondary {
		font-size: 1.375rem;
		font-weight: 400;
	}

	.rick-and-morty-border {
		border-color: #0abbec;
		margin: 5px;
	}
</style>