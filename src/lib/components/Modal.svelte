<script>
  import { score, round, time, page } from '../../store/store';
  export let shuffle = function(){};
  export let modalTitle = "Game Clear!"; // 모달창 제목
  export let scoreTitle = "Score"; // 점수 표시 제목
  export let btn1Text = "Next"; // 버튼1 이름
</script>

<div class="modal">
  <div class="modal-container">
    <h1>{modalTitle}</h1>
    <!-- <p class="bonus-score-title">Bonus score</p> -->
    <p class="score-title">{scoreTitle}</p>
    <!-- <p class="bonus-score">5,000</p> -->
    <p class="score">{$score}</p>
    <button 
      class="btn next" 
      on:click={() => {
        shuffle();
        if(btn1Text === "Next") {
          console.log('Next')
          $round += 1;
          $time = 100;
        } else {
          console.log('Replay')
          $score = 0;
          $round = 1;
          $time = 100;
        }
      }}
    >{btn1Text}</button>
    <button 
      class="btn"
      on:click={() => {
        // 게임 상태변수 초기화
        $page = "title";
        $score = 0;
        $round = 1;
        $time = 100;
      }}
    >Home</button>
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
      // .bonus-score-title 
      .score-title {
        font-size: 20px;
        color: #666;
      }
      // .bonus-score 
      .score {
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