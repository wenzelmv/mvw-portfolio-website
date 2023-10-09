<template>
  <div class="bubbles">
    <span style="--i: 11"></span>
    <span style="--i: 12"></span>
    <span style="--i: 24"></span>
    <span style="--i: 10"></span>
    <span style="--i: 14"></span>
    <span style="--i: 23"></span>
    <span style="--i: 18"></span>
    <span style="--i: 16"></span>
    <span style="--i: 19"></span>
    <span style="--i: 20"></span>
    <span style="--i: 22"></span>
    <span style="--i: 25"></span>
    <span style="--i: 18"></span>
    <span style="--i: 21"></span>
    <span style="--i: 15"></span>
    <span style="--i: 13"></span>
    <span style="--i: 26"></span>
    <span style="--i: 17"></span>
    <span style="--i: 13"></span>
    <span style="--i: 28"></span>
    <span style="--i: 11"></span>
    <span style="--i: 12"></span>
    <span style="--i: 24"></span>
    <span style="--i: 10"></span>
    <span style="--i: 14"></span>
    <span style="--i: 23"></span>
    <span style="--i: 18"></span>
    <span style="--i: 16"></span>
    <span style="--i: 19"></span>
    <span style="--i: 20"></span>
    <span style="--i: 22"></span>
    <span style="--i: 25"></span>
    <span style="--i: 18"></span>
    <span style="--i: 21"></span>
    <span style="--i: 15"></span>
    <span style="--i: 13"></span>
    <span style="--i: 26"></span>
    <span style="--i: 17"></span>
    <span style="--i: 13"></span>
    <span style="--i: 28"></span>
  </div>
</template>

<style scoped>
.bubbles {
  position: relative;
  display: flex;
  z-index: -999;
}
.bubbles span {
  position: relative;
  width: 30px;
  height: 30px;
  background: #e0115f;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow:
    0 0 0 10px #e0115f44,
    0 0 50px #e0115f,
    0 0 100px #e0115f;
  animation: animate 15s linear infinite;
  animation-duration: calc(250s / var(--i));
}
.bubbles span:nth-child(even) {
  background: #c54b8c;
  box-shadow:
    0 0 0 10px #c54b8c44,
    0 0 50px #c54b8c,
    0 0 100px #c54b8c;
}
@keyframes animate {
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-100vh) scale(1);
  }
}
</style>
