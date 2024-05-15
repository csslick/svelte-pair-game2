<script>
  export let shuffle = function(){};
</script>

<div class="modal">
  <div class="modal-container">
    <h1>Game Clear!</h1>
    <p class="bonus-score-title">Bonus score</p>
    <p class="bonus-score">5,000</p>
    <button class="btn next" on:click={shuffle}>Next</button>
    <button class="btn">Home</button>
  </div>
</div>

<style lang='scss'>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    display: grid;
    place-items: center;

    .modal-container {
      background: #fff;
      width: 400px;
      padding: 20px;
      border-radius: 30px;
      border: 10px solid #000;
      h1 { margin-bottom: 5px; }
      .bonus-score-title {
        font-size: 20px;
        color: #666;
      }
      .bonus-score {
        font-size: 36px;
        color: #f63030;
        margin-bottom: 20px;
      }
    }

    .btn { 
      font-size: 24px; 
      &.next { color: #f63030; }
    }
  }
</style>