<script lang='ts'>
  import type { ICodeData } from '$lib/types';
  import { getContext } from 'svelte';
  import { derived } from 'svelte/store';

  export let block: ICodeData;
  export let blockId: string;

  const activeBlockId = getContext('activeBlockId');
  const setActiveBlock = getContext('setActiveBlock');

  let isMouseDown = false;
  const isActive = derived(activeBlockId, $activeBlockId => $activeBlockId === blockId);

  function getTransformStyle(align: string): string {
    switch(align) {
      case 'center': return 'transform: translateX(-50%);';
      case 'right': return 'transform: translateX(-100%);';
      default: return '';
    }
  }

  function handleMouseDown() {
    isMouseDown = true;
  }

  function handleMouseUp() {
    isMouseDown = false;
    setActiveBlock(blockId, block.code);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      isMouseDown = true;
      e.preventDefault();
    }
  }

  function handleKeyUp(e: KeyboardEvent) {
    if (isMouseDown && (e.key === 'Enter' || e.key === ' ')) {
      isMouseDown = false;
      setActiveBlock(blockId, block.code);
      e.preventDefault();
    }
  }
</script>

<div
  class="text-block"
  class:is-active={$isActive}
  class:is-pressed={isMouseDown}
  style="
    left: {block.anchorX}px;
    top: {block.anchorY}px;
    color: {block.fontColor};
    font-family: '{block.fontFamily}', sans-serif;
    font-size: {block.fontSize}px;
    text-align: {block.align};
    {getTransformStyle(block.align)};
  "
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:mouseleave={() => isMouseDown = false}
  on:keydown={handleKeyDown}
  on:keyup={handleKeyUp}
  aria-label="Нажмите, чтобы скопировать"
  role="button"
  tabindex="0"
>
  {block.code}
</div>

<style>
  .text-block {
    position: absolute;
    white-space: pre-wrap;
    pointer-events: auto;
    line-height: 1;
    background: rgba(100, 255, 0, 0.6);
    cursor: pointer;
    transition: transform 0.1s ease, background-color 0.2s ease, box-shadow 0.2s ease;
    border-radius: 3px;
    padding: 2px 4px;
    user-select: none;
  }

  .text-block:hover {
    background: rgba(120, 255, 40, 0.8);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
  .text-block.is-pressed {
    transform: scale(0.98);
    background: rgba(80, 200, 30, 0.9);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }
  
  .text-block.is-active {
    background: rgba(236, 147, 15, 0.8);
    box-shadow: 0 0 8px rgba(237, 94, 0, 0.4);
  }

  .text-block.is-active.is-pressed {
    transform: scale(0.98);
    background: rgba(200, 120, 10, 0.9);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }
</style>
