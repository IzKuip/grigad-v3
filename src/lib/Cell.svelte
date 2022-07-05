<script lang="ts">
  import { tileSize } from "../ts/display";

  import { onMount } from "svelte";
  export let x: number;
  export let y: number;
  export let c: string;

  let css = "";

  function update() {
    css = `
    top: ${tileSize * y}px;
    left: ${tileSize * x}px;
    width: ${tileSize}px;
    height: ${tileSize}px;
    `;
  }
  onMount(update);
</script>

<span style={css}>{c}</span>

<style scoped>
  span {
    position: fixed;
    background-color: #333;
    border: #555 3px solid;
    box-sizing: border-box;
    color:white;
    font-family: monospace;
    font-size: 20px;
    font-variant:small-caps;
  }
</style>
