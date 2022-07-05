<script lang="ts">
  import type { Buff } from "../ts/buff";
  import Cell from "./Cell.svelte";

  export let data: Buff;
</script>

<div class="grid">
  {#each data.buff as yItem, y}
    {#each data.buff[y] as xItem, x}
      {#if xItem != null}
        <Cell {x} {y} c={xItem} />
      {/if}
    {/each}
  {/each}
</div>
