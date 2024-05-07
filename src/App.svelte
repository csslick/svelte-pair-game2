<script>
  import GameTitle from "./lib/components/GameTitle.svelte";
  import GameScore from "./lib/components/GameScore.svelte";
  import GamePlay from "./lib/components/GamePlay.svelte";

  const gameTitle = "Pair Game";
</script>

<main>
  <GameTitle title = {gameTitle} />
  <GamePlay />
  <GameScore />
</main>

