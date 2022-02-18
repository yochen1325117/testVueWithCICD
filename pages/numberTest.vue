<template>
  <div class="numberTest">
    <div class="answer-block">
      <div
        class="answer-list"
        v-for="(answerblock, i) in answerList"
        :key="`answerblock-${i}`"
      >
        <div
          class="answer-block"
          v-for="(answer, i) in answerblock"
          :key="i"
          :style="{ backgroundColor: answerBackground(answer.status) }"
        >
          {{ answer.text || answer.text === 0 || "" }}
        </div>
      </div>
    </div>
    <div class="answer-option">
      <button
        v-for="numberOption in answerNumberOptionList"
        :key="numberOption.value"
        class="answer-option-button"
        @click="pushAnswer(numberOption)"
        :style="{ backgroundColor: answerBackground(numberOption.status) }"
      >
        {{ numberOption.text }}
      </button>
    </div>
    <div class="answer-option">
      <button
        v-for="arithmeticOption in answerArithmeticOptionList"
        :key="arithmeticOption.value"
        class="answer-option-button"
        @click="pushAnswer(arithmeticOption)"
        :style="{ backgroundColor: answerBackground(arithmeticOption.status) }"
      >
        {{ arithmeticOption.text }}
      </button>
    </div>
    <div class="action-block">
      <button class="del-button" @click="popAnswer()">上一步</button>
      <button class="answer-button" @click="countAnswer()">送出</button>
    </div>
    <div>
      <p style="text-align: center">黃色為錯位</p>
      <p style="text-align: center">藍色為正確</p>
      <p style="text-align: center">紅色為未出現</p>
    </div>
    <div class="error-text-block" v-if="!!errorText">{{ errorText }}</div>
  </div>
</template>

<script>
import randomMathQuestion from "random-math-question";

export default {
  layout: "default",
  data() {
    return {
      questionList: [2, 3, "+", 4, 5, "=", 6, 8],
      answerList: [],
      answerNumberOptionList: [],
      answerArithmeticOptionList: [],
      answerNow: 0,
      countNumber: 0,
      emptyAnswer: {
        text: "",
        value: "",
        status: "",
      },
      errorText: "",
    };
  },
  mounted() {
    window.addEventListener("keydown", this.keyDown);
    this.createAnswerOptionList();
    this.defaultAnswerList();
    this.setQuestion();
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.banReloadKey);
  },
  methods: {
    answerBackground: function (status) {
      if (status === "" || status === "not-check") {
        return "transparent";
      } else if (status === "wrong-side") {
        return "yellow";
      } else if (status === "wrong-answer") {
        return "red";
      } else if (status === "correct-answer") {
        return "#b0e0e6";
      }
      return "transparent";
    },
    createAnswerOptionList: function () {
      const answerNumberOptionList = [];
      const answerArithmeticOptionList = [];
      const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      const arithmeticList = [
        {
          text: "+",
          value: "+",
          status: "",
        },
        {
          text: "-",
          value: "-",
          status: "",
        },
        {
          text: "x",
          value: "*",
          status: "",
        },
        {
          text: "/",
          value: "/",
          status: "",
        },
        {
          text: "=",
          value: "=",
          status: "",
        },
      ];
      numberList.map((number) => {
        answerNumberOptionList.push({
          text: `${number}`,
          value: `${number}`,
          status: "",
        });
      });
      arithmeticList.map((arithmetic) => {
        answerArithmeticOptionList.push(arithmetic);
      });
      this.$data.answerNumberOptionList = answerNumberOptionList;
      this.$data.answerArithmeticOptionList = answerArithmeticOptionList;
    },
    defaultAnswerList: function () {
      const answerList = [];
      const answerChance = 6;
      const answerLength = 8;
      const emptyAnswer = this.$data.emptyAnswer;
      for (let i = 0; i < answerChance; i++) {
        answerList[i] = [];
        for (let j = 0; j < answerLength; j++) {
          answerList[i].push(emptyAnswer);
        }
      }
      this.$data.answerList = answerList;
    },
    pushAnswer: function (option) {
      const answerNow = this.$data.answerNow;
      const answerLength = 8;
      const answerList = this.$data.answerList;
      if (answerNow < 6) {
        const checkAnswerList = answerList[answerNow].filter(
          (answer) => answer.value !== ""
        );
        if (checkAnswerList.length < answerLength) {
          this.$data.answerList[answerNow].splice(checkAnswerList.length, 1, {
            ...option,
            status: "not-check",
          });
        }
      }
    },
    popAnswer: function () {
      const answerNow = this.$data.answerNow;
      const answerList = this.$data.answerList;
      const emptyAnswer = this.$data.emptyAnswer;
      const checkAnswerList = answerList[answerNow].filter(
        (answer) => answer.value !== ""
      );
      if (checkAnswerList.length > 0) {
        this.$data.answerList[answerNow].splice(
          checkAnswerList.length - 1,
          1,
          emptyAnswer
        );
      }
    },
    countAnswer: function () {
      const answerNow = this.$data.answerNow;
      const answerList = this.$data.answerList;
      const checkAnswerList = answerList[answerNow].filter(
        (answer) => answer.value !== ""
      );
      if (checkAnswerList.length === 8) {
        const submitList = answerList[answerNow].map((answer) => answer.value);
        const submitSplitList = submitList.join("").split("=");
        if (submitSplitList.length === 2) {
          const evalList = eval(submitSplitList[0]);
          const equalList = submitSplitList[1];
          const googAnswer = +evalList === +equalList;
          if (!googAnswer) {
            this.$data.errorText = "罰你國小重讀";
            setTimeout(() => {
              this.$data.errorText = "";
            }, 1000);
          } else {
            this.checkAnswer();
          }
        } else {
          this.$data.errorText = "罰你國小重讀";
          setTimeout(() => {
            this.$data.errorText = "";
          }, 1000);
        }
      }
    },
    checkAnswer: function () {
      const answerNow = this.$data.answerNow;
      const answerList = this.$data.answerList;
      const questionList = this.$data.questionList;
      const checkList = answerList[answerNow];
      const answerArithmeticOptionList = this.$data.answerArithmeticOptionList;
      const answerNumberOptionList = this.$data.answerNumberOptionList;
      let includeList = questionList;
      checkList.map((checkAnswer, i) => {
        let answerStatus = "";
        if (checkAnswer.value === questionList[i]) {
          checkAnswer.status = "correct-answer";
          answerStatus = "correct-answer";
        } else {
          if (questionList.includes(checkAnswer.value) && includeList.includes(checkAnswer.value)) {
            includeList.splice(questionList.indexOf(checkAnswer.value), 1, '');
            checkAnswer.status = "wrong-side";
            answerStatus = "wrong-side";
          } else {
            answerStatus = "wrong-answer";
          }
        }
        checkAnswer.status = answerStatus;
        answerNumberOptionList.map((option) => {
          if (+option.value === +checkAnswer.value && option.status === "") {
            option.status = answerStatus;
          }
        });
        answerArithmeticOptionList.map((option) => {
          if (option.value === checkAnswer.value && option.status === "") {
            option.status = answerStatus;
          }
        });
      });
      this.$data.answerNumberOptionList = answerNumberOptionList;
      this.$data.answerArithmeticOptionList = answerArithmeticOptionList;
      this.$data.answerNow += 1;
    },
    keyDown: function (key) {
      switch (key.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
          this.pushAnswer({
            text: key.key,
            value: key.key,
            status: "",
          });
          break;
        case "Backspace":
          this.popAnswer();
          break;
        case "Enter":
          this.countAnswer();
          break;
        default:
          break;
      }
    },
    setQuestion: function () {
      let checkQuestion = "";
      while (checkQuestion.length !== 8) {
        const question = randomMathQuestion.get({
          numberRange: "1-80",
          amountOfNumber: "2-3",
          operations: ["/", "*", "+", "-"],
        });
        const questionParser = `${question.question}`.split(" ").join("");
        const answerParser = `${question.answer}`.split(" ").join("");
        if (answerParser > 0) {
          checkQuestion = `${questionParser}=${answerParser}`;
        }
      }
      console.log("checkQuestion", checkQuestion);
      this.$data.questionList = checkQuestion.split("");
    },
  },
};
</script>

<style lang="scss">
.numberTest {
  // empty css
  .answer-option {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px auto;
    max-width: 767px;
    .answer-option-button {
      font-size: 2rem;
      padding: 0;
      background-color: transparent;
      border: 2px solid #ddd;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .answer-option-button:hover {
      background-color: black;
      color: #cc99cc;
    }
  }
  .answer-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px auto;
    max-width: 767px;
    .answer-block {
      font-size: 2rem;
      padding: 0;
      background-color: transparent;
      border: 2px solid #ddd;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .action-block {
    display: flex;
    justify-content: center;
    align-items: center;
    .del-button,
    .answer-button {
      margin: 0 15px;
      font-size: 2rem;
      border: 2px solid gray;
      border-radius: 4px;
      background-color: transparent;
      cursor: pointer;
    }
    .del-button:active,
    .answer-button:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .error-text-block {
    width: 50%;
    height: 200px;
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 3px solid;
    font-size: 3rem;
  }
}
</style>