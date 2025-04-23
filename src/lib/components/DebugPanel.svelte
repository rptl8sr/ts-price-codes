<script lang='ts'>
  import type { ICodeData } from '$lib/types';
  import type { IPageConfig } from '$lib/config';

  export let page: IPageConfig;
  export let blocks: ICodeData[] | null | undefined = undefined;
</script>

<div class='debug-panel'>
  <p>Page ID: {page.id}</p>
  <p>Blocks: {blocks ? blocks.length : 'none'}</p>
  {#if blocks && blocks.length}
    <ul>
      {#each blocks as block, i}
        <li>Block {i}: {block.code}, x: {block.anchorX}, y: {block.anchorY}, align: {block.align}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .debug-panel {
    position: fixed;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    font-size: 12px;
    max-width: 400px;
    max-height: 300px;
    overflow: auto;
    z-index: 9999;
  }

  .debug-panel ul {
    padding-left: 20px;
  }
</style>