<script>
    import '../styles.css';
    import Navbar from "../lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";
</script>

<Navbar />

<div class="space">
    <slot></slot>
</div>

<Footer />

<style>

</style>