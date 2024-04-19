<script lang="js">
    import Header from "../elements/Header.svelte";
    import Footer from "../elements/Footer.svelte";

    import { Page } from "../elements/page";

    export let slug;
</script>

<!-- Page -->
    <Header />
    <Page slug={slug} />

    <Footer />
<!-- Page end -->
