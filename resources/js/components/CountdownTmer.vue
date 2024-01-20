<template>
    <div class="base-timer">
      <svg
        class="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="base-timer__circle">
          <circle
            class="base-timer__path-elapsed"
            cx="50"
            cy="50"
            r="45"
          ></circle>
          <path
            :stroke-dasharray="circleDasharray"
            class="base-timer__path-remaining"
            :class="remainingPathColor"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span class="base-timer__label">{{ formattedTimeLeft }}</span>
    </div>
    <button @click="resetTimer">Reset Timer</button>
  </template>


  <script setup>
import { ref,computed,watch,onMounted } from 'vue';

  const props = defineProps({
    timer: Object,
})

const TIME_LIMIT = ref(0);
const TIME_CURRENT = ref(0);

watch(() => props.timer,(newVal, oldVal) => {
    TIME_LIMIT.value = newVal.timer.max;
    TIME_CURRENT.value=newVal.timer.current;

  }
);

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 5;
const ALERT_THRESHOLD = 3;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};




const timePassed = ref(TIME_LIMIT - TIME_CURRENT.value);

watch(() => {
  timePassed.value = TIME_LIMIT.value - TIME_CURRENT.value;
});
let timerInterval = ref(null);

const circleDasharray = computed(() => {
  return `${(timeFraction.value * FULL_DASH_ARRAY).toFixed(0)} 283`;
});

const timeLeft = computed(() => {
  return TIME_LIMIT.value - timePassed.value;
});

const formattedTimeLeft = computed(() => {
  const time = timeLeft.value;
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  // Add a leading zero if seconds is less than 10
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutes}:${seconds}`;
});



const timeFraction = computed(() => {
  const rawTimeFraction = timeLeft.value / TIME_LIMIT.value;
  return rawTimeFraction - (1 / TIME_LIMIT.value) * (1 - rawTimeFraction);
});

const remainingPathColor = computed(() => {
  const { alert, warning, info } = COLOR_CODES;

  if (timeLeft.value <= alert.threshold) {
    return alert.color;
  } else if (timeLeft.value <= warning.threshold) {
    return warning.color;
  } else {
    return info.color;
  }
});

watch(() => timeLeft.value, (newValue) => {
  if (newValue === 0) {
    onTimesUp();
  }
});

onMounted(() => {
  startTimer();
  TIME_LIMIT.value = props.timer.max;
    TIME_CURRENT.value=props.timer.current;
});

const onTimesUp = () => {
  clearInterval(timerInterval.value);
};

const startTimer = () => {
  timerInterval.value = setInterval(() => (timePassed.value += 1), 1000);
};


const resetTimer=()=>{
    clearInterval(timerInterval.value);
    timePassed.value=0;
    startTimer();
}
</script>


  <style scoped lang="scss">
  .base-timer {
    position: relative;
    width: 300px;
    height: 300px;

    &__svg {
      transform: scaleX(1);
    }

    &__circle {
      fill: none;
      stroke: none;
    }

    &__path-elapsed {
      stroke-width: 7px;
      stroke: grey;
    }

    &__path-remaining {
      stroke-width: 7px;
      stroke-linecap: round;
      transform: rotate(90deg);
      transform-origin: center;
      transition: 1s linear all;
      fill-rule: nonzero;
      stroke: currentColor;

      &.green {
        color: rgb(65, 184, 131);
      }

      &.orange {
        color: orange;
      }

      &.red {
        color: red;
      }
    }

    &__label {
      position: absolute;
      width: 300px;
      height: 300px;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
    }
  }
  </style>
