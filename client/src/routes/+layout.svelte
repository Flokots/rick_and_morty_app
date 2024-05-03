<script>
    import '../styles.css';
    import Navbar from "../lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";
</script>

<Navbar />

<div>
    <slot></slot>
</div>

<Footer />

<style>
</style>