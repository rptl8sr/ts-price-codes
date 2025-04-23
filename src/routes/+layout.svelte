<script lang='ts'>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import { page } from '$app/state';
  import { PAGES } from '$lib/config';

  export let data;
  const { buildTime } = data;

  $: currentPageId = page.params.slug;
</script>

<div class='app'>
  <Header pages={PAGES} {currentPageId} {buildTime} />

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
</style>