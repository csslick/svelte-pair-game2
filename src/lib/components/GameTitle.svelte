<script>
  import { page } from "../../store/store.js";
  import GameScore from "./GameScore.svelte";
  import GamePlay from "./GamePlay.svelte";

  export let title;
  // let page = "title"; // title, play, score
</script>

<main>
  {#if $page === "title"}
    <section class="itim-regular">
      <h1>{title}</h1>
      <div class="btn-group">
        <button class="btn" on:click={() => $page = "play"}>Start</button>
        <button class="btn" on:click={() => $page = "score"}>Score</button>
      </div>
    </section>
  {:else if $page === "play"}
    <GamePlay />
  {:else if $page === "score"}
    <!-- <GameScore bind:page /> -->
    <GameScore />
  {/if}
</main>

<style lang="scss">
  section {
    h1 {
      font-size: 16vw;
      color: #ff3e00;
      -webkit-text-stroke: 10px rgba(0, 0, 0, 0.5);
      paint-order: stroke fill;
    }
    .btn-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      button {
        display: inline;
        padding: 10px;
        font-size: 32px;
        background: transparent;
        width: 5em;
        border: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
