<script lang='ts'>
  import { IMAGES_PATH } from '$lib/config';
  import CodeBlocksContainer from '$lib/components/CodeBlocksContainer.svelte';
  import DebugPanel from '$lib/components/DebugPanel.svelte';

  export let data;
  $: ({ page, blocks, error } = data);
  $: imageUrl = page ? `${IMAGES_PATH}/${page.id}.png` : '';

  $: {
    console.log('Page data:', page);
  }
</script>

{#if error}
  <div class='error-container'>
    <h2>Ошибка</h2>
    <p>{ error }</p>
  </div>
{:else if page}
  <div class='page-container'>
    {#if imageUrl}
      <div class='image-container'>
        <img src={imageUrl} alt={page.name} class='background-image' />
<!--        <DebugPanel {page} {blocks} />-->
        <CodeBlocksContainer {blocks} />
      </div>
    {:else}
      <div class='loading-container'>
        <p>Загрузка слайда...</p>
      </div>
    {/if}
  </div>
{:else}
  <div class='loading-container'>
    <p>Загрузка...</p>
  </div>
{/if}

<style>
  .page-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding-top: 4.5rem;
  }

  .image-container {
    position: relative;
    display: inline-block;
  }

  .background-image {
    display: block;
    width: auto;
    height: auto;
    max-width: none; /* Убираем ограничение по максимальной ширине */
  }

  .error-container, .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    padding: 2rem;
  }

  .error-container {
    color: #e74c3c;
  }
</style>