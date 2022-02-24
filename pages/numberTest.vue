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
    <div class="answer-option" v-if="!passBlock && answerNow < 6">
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
    <div class="answer-option" v-if="!passBlock && answerNow < 6">
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
    <div class="action-block" v-if="!passBlock && answerNow < 6">
      <button class="del-button" @click="popAnswer()">{{ "&lt;=" }}</button>
      <button class="answer-button" @click="countAnswer()">送出</button>
    </div>
    <div class="example-block">
      <div
        class="example-color-block"
        :style="{ backgroundColor: answerBackground('wrong-side') }"
      ></div>
      <p class="example-text">表示錯位</p>
      <div
        class="example-color-block"
        :style="{ backgroundColor: answerBackground('correct-answer') }"
      ></div>
      <p class="example-text">表示正確</p>
      <div
        class="example-color-block"
        :style="{ backgroundColor: answerBackground('wrong-answer') }"
      ></div>
      <p class="example-text">表示未出現</p>
    </div>
    <div class="error-text-block" v-if="!!errorText">{{ errorText }}</div>
    <div class="pass-text-block" v-if="!!passBlock">
      <p>恭喜過關</p>
      <p>你總共嘗試了{{ answerNow }}次</p>
      <p>重新整理可以再玩一次唷</p>
      <button class="refresh-button" @click="() => { this.$router.go(0); }">重新整理</button>
    </div>
    <p style="text-align: center">來源：<a href="https://nerdlegame.com/">nerdlegame</a></p>
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
      passBlock: false,
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
        return "#deb3cf";
      } else if (status === "wrong-answer") {
        return "#C0C0C0";
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
          const evalList = Function('return (' + submitSplitList[0] + ')')();
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
      let answerArithmeticOptionList = this.$data.answerArithmeticOptionList;
      let answerNumberOptionList = this.$data.answerNumberOptionList;
      let includeList = [...questionList];
      // 先找正確位置的正確答案
      checkList.map((checkAnswer, i) => {
        let answerStatus = "";
        if (checkAnswer.value === questionList[i]) {
          includeList.splice(i, 1, "");
          checkAnswer.status = "correct-answer";
          answerStatus = "correct-answer";
        }
        answerNumberOptionList = answerNumberOptionList.map((option) => {
          if (+option.value === +checkAnswer.value && option.status === "") {
            option.status = answerStatus;
          }
          return option;
        });
        answerArithmeticOptionList = answerArithmeticOptionList.map(
          (option) => {
            if (option.value === checkAnswer.value && option.status === "") {
              option.status = answerStatus;
            }
            return option;
          }
        );
      });
      // 再找錯誤位置正確答案跟錯誤答案
      checkList.map((checkAnswer, i) => {
        let answerStatus = "";
        if (checkAnswer.value !== questionList[i]) {
          if (
            questionList.includes(checkAnswer.value) &&
            includeList.includes(checkAnswer.value)
          ) {
            includeList.splice(questionList.indexOf(checkAnswer.value), 1, "");
            checkAnswer.status = "wrong-side";
            answerStatus = "wrong-side";
          } else {
            checkAnswer.status = "wrong-answer";
            answerStatus = "wrong-answer";
          }
          answerNumberOptionList = answerNumberOptionList.map((option) => {
            if (+option.value === +checkAnswer.value && option.status === "") {
              option.status = answerStatus;
            }
            return option;
          });
          answerArithmeticOptionList = answerArithmeticOptionList.map(
            (option) => {
              if (option.value === checkAnswer.value && option.status === "") {
                option.status = answerStatus;
              }
              return option;
            }
          );
        }
      });
      const clearPass = checkList.filter(ans => (ans.status === 'wrong-side' || ans.status === 'wrong-answer' || ans.status === ''));
      if (clearPass.length === 0) {
        this.$data.passBlock = true;
      } else if (this.$data.answerNow === 5) {
        this.$data.errorText = "罰你國小重讀";
      }
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
      const questReg = /^[0-9+\-*\/=]{8}/;

      let checkQuestion = "";

      let question = {
        question: "",
        answer: "",
      };
      let questionChecker =
        checkQuestion.length === 8 && questReg.test(question.question);
      while (!questionChecker) {
        question = randomMathQuestion.get({
          numberRange: "1-999",
          amountOfNumber: "2-3",
          operations: ["/", "*", "+", "-"],
        });
        const questionParser = `${question.question}`.split(" ").join("");
        const answerParser = `${question.answer}`.split(" ").join("");
        if (answerParser > 0) {
          checkQuestion = `${questionParser}=${answerParser}`;
        }
        questionChecker =
          checkQuestion.length === 8 && questReg.test(checkQuestion);
        console.log("checkQuestion", checkQuestion);
      }
      // console.log("checkQuestion", checkQuestion);
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
    @media (max-width: 675px) {
      display: block;
      margin: 15px auto;
      text-align: center;
    }
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
      @media (max-width: 675px) {
        font-size: 1.5rem;
        width: 40px;
        height: 40px;
        display: inline-block;
        margin: 5px 15px;
      }
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
      @media (max-width: 675px) {
        font-size: 1.5rem;
        width: 30px;
        height: 30px;
      }
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
      border-radius: 4px;
      background-color: transparent;
      cursor: pointer;
      width: 180px;
      height: 60px;
      @media (max-width: 675px) {
        font-size: 1rem;
        width: 120px;
        height: 40px;
      }
    }
    .del-button {
      border: 2px solid gray;
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
  .pass-text-block {
    width: 70%;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    background-color: rgba(174, 221, 239,0.6);
    border-radius: 60px;
    .refresh-button {
      width: 240px;
      height: 40px;
      background-color: rgba(177, 211, 197,0.5);
      border-radius: 4px;
      cursor: pointer;
      border: 0.5px solid;
    }
  }
  .example-block {
    text-align: center;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    .example-color-block {
      height: 30px;
      width: 30px;
      border-radius: 30px;
      display: inline-block;
    }
    .example-text {
      display: inline-block;
      margin: 0;
    }
    .example-text:nth-child(2n) {
      margin: 0px 5px;
    }
  }
}
</style>