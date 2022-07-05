<script lang="ts">
  import { onMount } from "svelte";
  import Grid from "./lib/Grid.svelte";
  import { Buffers, Buffs, fillBuff } from "./ts/buff";
  import { initDisplay } from "./ts/display";
import { createPlayer } from "./ts/player";
  import { spawn } from "./ts/spawn";

  let buffs: Buffs;

  onMount(() => {
    initDisplay();

    spawn("base", 5, 5, "b");
    spawn("entity", 6, 6, "e");
    spawn("projectile", 18, 9, "a");

    //fillBuff("base","_")

    createPlayer();

    update();
  });

  function update() {
    buffs = $Buffers;
  }
</script>

<div class="app">
{#if buffs}
  <Grid data={buffs.base} />
  <Grid data={buffs.entity} />
  <Grid data={buffs.player} />
  <Grid data={buffs.projectile} />
{/if}
</div>

<style scoped>
  div.app {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: #000; 
  }
</style>