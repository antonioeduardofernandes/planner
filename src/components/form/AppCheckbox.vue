<template>
  <div id="app_checkbox">
    <div class="box">
      <div class="background" :class="{ checked: checked }" />
      <svg class="icon" width="17" height="14" viewBox="0 0 17 14" fill="none">
        <path
          class="check_icon"
          :class="{ checked: checked }"
          d="M15.4525 1.03915L15.151 1.34065L15.4525 1.03915C15.0908 0.677498 14.5045 0.677359 14.1427 1.03884L5.81911 9.35457C5.79036 9.3833 5.74376 9.38329 5.71502 9.35455L2.86472 6.50424C2.50385 6.14337 1.91908 6.14234 1.55694 6.50193L1.84619 6.79324L1.55694 6.50193L1.05563 6.99971C0.691671 7.36111 0.690632 7.94944 1.05331 8.31212L5.11186 12.3707C5.47364 12.7324 6.06019 12.7324 6.42196 12.3707L15.9479 2.84469C16.3097 2.48292 16.3097 1.89637 15.9479 1.5346L15.4525 1.03915Z"
          fill="white"
          stroke="white"
          stroke-width="0.852757"
        />
      </svg>
    </div>
    <div class="label subtitle">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    checked: Boolean,
  },
}
</script>

<style scoped>
#app_checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  --size: 18px;
}
.box {
  width: var(--size);
  height: var(--size);
  border: 2px solid var(--placeholder);
  border-radius: 3px;
  margin-right: 0.6rem;
  position: relative;
}

.background {
  background-color: var(--accent);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  transform: scale(1.2);
  opacity: 0;
}

.checked.background {
  opacity: 1;
  animation: background 0.2s alternate ease-in-out;
}

.icon {
  position: absolute;
  stroke: var(--white);
  fill: var(--white);
}

.check_icon {
  stroke-dasharray: 100;
  stroke-dashoffset: 170;
  opacity: 0;
}

.checked.check_icon {
  animation: check 0.3s ease-in-out forwards;
}

@keyframes background {
  0% {
    transform: scale(1.2);
  }
  40% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1.2);
  }
}

@keyframes check {
  to {
    opacity: 1;
    stroke-dashoffset: 200;
  }
}
</style>
