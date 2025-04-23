<script>
  export let data;
</script>

{#if data.error}
  <div class="error-container">
    <h2>Ошибка</h2>
    <p>{data.error}</p>
  </div>
{/if}

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    padding: 2rem;
    color: #e74c3c;
  }
</style>