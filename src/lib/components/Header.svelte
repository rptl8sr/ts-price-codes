<script lang='ts'>
  import { PAGES } from '$lib/config';
  import Navigation from './Navigation.svelte';
  
  export let buildTime: string | number = '';
  
  function formatBuildTime(time: string | number): string {
    if (!time) return '';

    const timestamp = Number(time);
    if (isNaN(timestamp)) return String(time);

    const date = new Date(timestamp < 10000000000 ? timestamp * 1000 : timestamp);

    return new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }
</script>

<header class="header">
  <div class="header-content">
    <Navigation pages={PAGES} />
    <div class="build-time">
      {formatBuildTime(buildTime)}
    </div>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  .header-content {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .build-time {
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: white;
    font-size: 0.8rem;
    opacity: 0.7;
    padding: 0.25rem 0.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    z-index: 1001;
  }
</style>