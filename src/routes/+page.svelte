<script>
  // The 3x3 board is represented as a flat array of 9 elements
  let board = Array(9).fill(null);
  let xIsNext = true; // 'X' always starts
  let winner = null;

  // Function to check for a winner
  function calculateWinner(b) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // columns
      [0,4,8],[2,4,6]          // diagonals
    ];
    for (const [a,b,c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  // Handle user's click on a cell
  function handleClick(index) {
    if (winner || board[index]) return; // Ignore if game over or cell occupied
    board[index] = xIsNext ? 'X' : 'O';
    winner = calculateWinner(board);
    xIsNext = !xIsNext;
  }

  // Reset the game
  function resetGame() {
    board = Array(9).fill(null);
    xIsNext = true;
    winner = null;
  }
</script>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(3, 60px);
    gap: 8px;
    margin-bottom: 16px;
  }
  .cell {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    background: #f2f2f2;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0 1px 2px #ccc;
  }
  .cell:hover {
    background: #e9e9e9;
  }
  .status {
    font-size: 1.2em;
    margin-bottom: 12px;
  }
</style>

<div class="status">
  {#if winner}
    Winner: {winner}
  {:else if board.every(cell => cell)}
    Draw!
  {:else}
    Next player: {xIsNext ? 'X' : 'O'}
  {/if}
</div>

<div class="board">
  {#each board as cell, index}
    <div class="cell" on:click={() => handleClick(index)}>
      {cell}
    </div>
  {/each}
</div>

<button on:click={resetGame}>Restart</button>
