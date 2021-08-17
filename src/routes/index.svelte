<script context="module">
  export async function preload(page, session) {
    const result = await this.fetch("products.json");
    const products = await result.json();
    return { products };
  }
</script>

<script>
  import successkid from "images/successkid.jpg";
  export let products;
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<div class="wrap">
  <div class="boardwrap">
    <div class="rowhead">
      <div class="row ">번호</div>
      <div class="row">제목</div>
      <div class="row">내용</div>
      <div class="row">작성자</div>
      <div class="row">조회수</div>
      <div class="row">작성일</div>
      <div class="row">비밀번호</div>
      <div class="row">삭제</div>
      <div class="row">수정</div>
    </div>

    {#each products as board}
      <div class="boardlist">
        <div class="row boardcon">{board.num}</div>
        <div class="row boardcon">{board.subject}</div>
        <div class="row boardcon">{board.content}</div>
        <div class="row boardcon">{board.name}</div>
        <div class="row boardcon">{board.views}</div>
        <div class="row boardcon">{board.wdate}</div>
        <div class="row boardcon">{board.passwd}</div>
        <div class="row boardcon"><button>삭제</button></div>
        <div class="row boardcon"><button>수정</button></div>
      </div>
    {/each}
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .wrap {
    display: flexbox;
    min-height: 100vh;
  }
  .boardwrap {
    box-shadow: 0 0 rgba(0, 0, 0, 0.5);
    display: flexbox;
    border: 1px solid black;
    height: 70vh;
    width: 75vh;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: baseline;
  }
  .rowhead,
  .boardlist {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    text-align: center;
    width: 100%;
    height: 25px;
  }
  .row {
    height: 25px;
  }

  .row:nth-child(1) {
    flex-basis: 10%;
  }
  .row:nth-child(2) {
    flex-basis: 15%;
  }
  .row:nth-child(3) {
    flex-basis: 15%;
  }
  .row:nth-child(4) {
    flex-basis: 10%;
  }
  .row:nth-child(5) {
    flex-basis: 10%;
  }
  .row:nth-child(6) {
    flex-basis: 10%;
  }
  .row:nth-child(7) {
    flex-basis: 10%;
  }
  .row:nth-child(8) {
    flex-basis: 10%;
  }
  .row:nth-child(9) {
    flex-basis: 10%;
  }
  @media (min-width: 480px) {
  }
</style>
