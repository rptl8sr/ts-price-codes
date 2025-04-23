<script lang='ts'>
  import type { IPageConfig } from '$lib/config';
  import { page } from '$app/stores';

  export let pages: IPageConfig[] = [];
  $: currentPageId = $page.url.pathname.replace(/^\//, '');
</script>

<nav class="navigation">
  {#each pages as page}
    <a
      href={`/${page.id}`}
      class={currentPageId === page.id ? 'active' : ''}
    >
      {page.name}
    </a>
  {/each}
</nav>

<style>
  .navigation {
    width: 100%;
    background-color: rgba(33, 33, 33, 0.9);
    padding: 1rem;
    display: flex;
    gap: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  a.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  }
</style>