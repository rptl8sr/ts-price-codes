<script lang='ts'>
  import type { ICodeData } from '$lib/types';
  import CodeBlock from './CodeBlock.svelte';
  import { setContext, onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { page } from '$app/stores';

  export let blocks: ICodeData[] | null | undefined = undefined;

  const activeBlockId = writable<string | null>(null);
  setContext('activeBlockId', activeBlockId);

  let currentPath = '';

  $: if ($page && $page.url && $page.url.pathname !== currentPath) {
    currentPath = $page.url.pathname;
    console.log('URL изменился, сбрасываем активный блок');
    activeBlockId.set(null);
  }

  const setActiveBlock = async (blockId: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      console.log('Код скопирован в буфер обмена:', code);

      activeBlockId.set(blockId);
    } catch (error) {
      console.error('Ошибка при копировании в буфер обмена:', error);
    }
  };

  setContext('setActiveBlock', setActiveBlock);

  onMount(() => {
    if ($page && $page.url) {
      currentPath = $page.url.pathname;
    }
  });

  $: if (blocks) {
    activeBlockId.set(null);
  }
</script>

<div class="code-blocks-container">
  {#if blocks && blocks.length > 0}
    {#each blocks as block, i}
      <CodeBlock {block} blockId={`block-${i}`} />
    {/each}
  {:else}
    <div class='error-container'>
      <p>Блоки не найдены. Проверьте консоль браузера.</p>
    </div>
  {/if}
</div>

<style>
  .code-blocks-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    padding: 2rem;
    color: #e74c3c;
    background: rgba(255, 255, 255, 0.8);
    pointer-events: auto;
  }
</style>