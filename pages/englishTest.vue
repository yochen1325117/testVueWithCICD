<template>
  <div class="englishTest">
    <div class="answer-block" v-if="!passBlock && answerNow < 6">
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
          {{ answer.text || "" }}
        </div>
      </div>
    </div>
    <div class="answer-option" v-if="!passBlock && answerNow < 6">
      <button
        v-for="englishOption in answerEnglishOptionList"
        :key="englishOption.text"
        class="answer-option-button"
        @click="pushAnswer(englishOption)"
        :style="{ backgroundColor: answerBackground(englishOption.status) }"
      >
        {{ englishOption.text }}
      </button>
    </div>
    <div class="example-block" v-if="!passBlock && answerNow < 6">
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
        <div class="action-block" v-if="!passBlock && answerNow < 6">
      <button class="del-button" @click="popAnswer()">{{ "&lt;=" }}</button>
      <button class="answer-button" @click="checkAnswer()">送出</button>
    </div>
    <div class="error-text-block" v-show="!!errorText">{{ errorText }}</div>
    <div class="pass-text-block" v-show="!!passBlock">
      <p>恭喜過關</p>
      <p>你總共嘗試了{{ answerNow + 1 }}次</p>
      <p>重新整理可以再玩一次唷</p>
      <button
        class="refresh-button"
        @click="
          () => {
            this.$router.go(0);
          }
        "
      >
        重新整理
      </button>
    </div>
  </div>
</template>

<script>

import englishJson from '~/assets/jsonFile/englishTest';

export default {
  layout: "default",
  data() {
    return {
      wordList: [],
      randomWordNumber: 0,
      randomWord: "",
      answerList: [],
      emptyAnswer: {
        text: "",
        status: "",
      },
      answerNow: 0,
      answerEnglishOptionList: [],
      passBlock: false,
      errorText: "",
    };
  },
  mounted() {
    this.getEnglishWordList();
    this.defaultAnswerOptions();
    window.addEventListener("keydown", this.keyDown);
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
    async getEnglishWordList() {
      // const { data: getWordJsonRes } = await this.$axios.get(
      //   "https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt"
      // );
      // const wordList = getWordJsonRes.split(/\s/);
      this.$data.wordList = englishJson;
      this.setEnglishWord();
      // const test = await this.$axios.get('https://www.thefreedictionary.com/apple');
      // console.log('test', test);
      // console.log('englishJson', englishJson);
    },
    setEnglishWord() {
      const wordList = this.$data.wordList;
      console.log('wordList', wordList);
      const randomWordNumber = Math.round(Math.random() * wordList.length);
      const randomWord = wordList[randomWordNumber];
      this.$data.randomWordNumber = randomWordNumber;
      this.$data.randomWord = randomWord;
      console.log('randomWord', randomWord);
      this.defaultAnswerList();
    },
    defaultAnswerList() {
      const randomWord = this.$data.randomWord;
      const answerList = [];
      const answerChance = 6;
      const answerLength = randomWord.length;
      const emptyAnswer = this.$data.emptyAnswer;
      for (let i = 0; i < answerChance; i++) {
        answerList[i] = [];
        for (let j = 0; j < answerLength; j++) {
          answerList[i].push(emptyAnswer);
        }
      }
      this.$data.answerList = answerList;
    },
    defaultAnswerOptions() {
      const englishWord = "qwertyuiopasdfghjklzxcvbnm";
      const englishWordList = englishWord.split("");
      const answerEnglishOptionList = this.$data.answerEnglishOptionList || [];
      for (let i = 0; i < englishWordList.length; i += 1) {
        answerEnglishOptionList.push({
          text: englishWordList[i],
          status: "",
        });
      }
    },
    pushAnswer(englishOption) {
      const randomWord = this.$data.randomWord;
      const answerNow = this.$data.answerNow;
      const answerLength = randomWord.length;
      const answerList = this.$data.answerList;
      if (answerNow < 6) {
        const checkAnswerList = answerList[answerNow].filter(
          (answer) => answer.text !== ""
        );
        if (checkAnswerList.length < answerLength) {
          this.$data.answerList[answerNow].splice(checkAnswerList.length, 1, {
            ...englishOption,
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
        (answer) => answer.text !== ""
      );
      if (checkAnswerList.length > 0) {
        this.$data.answerList[answerNow].splice(
          checkAnswerList.length - 1,
          1,
          emptyAnswer
        );
      }
    },
    keyDown: function (key) {
      const regText = /^[a-zA-z]{1}$/;
      if (regText.test(key.key)) {
        this.pushAnswer({
          text: key.key.toLowerCase(),
          status: "",
        });
      } else {
        switch (key.key) {
          case "Backspace":
            this.popAnswer();
            break;
          case "Enter":
            this.checkAnswer();
            break;
          default:
            break;
        }
      }
    },
    checkAnswer() {
      const answerNow = this.$data.answerNow;
      const answerList = this.$data.answerList;
      const randomWord = this.$data.randomWord;
      let answerString = "";
      answerList[answerNow].map((answerText) => {
        answerString += answerText.text;
      });
      if (answerString.length === randomWord.length) {
        if (answerString === randomWord) {
          this.$data.passBlock = true;
        } else {
          this.countAnswer(answerString);
        }
      } else {
      this.$data.errorText = "??";
        setTimeout(() => {
          this.$data.errorText = "";
        }, 1000);
      }
    },
    countAnswer(answerString) {
      const wordList = this.$data.wordList;
      const answerNow = this.$data.answerNow;
      const answerList = this.$data.answerList;
      const randomWord = this.$data.randomWord;
      const checkEnglish = wordList.includes(answerString);
      const answerEnglishOptionList = this.$data.answerEnglishOptionList;
      console.log("answerEnglishOptionList", answerEnglishOptionList);
      if (!checkEnglish) {
        this.$data.errorText = "這我不認識喔";
        setTimeout(() => {
          this.$data.errorText = "";
        }, 1000);
      } else {
        const randomWordList = randomWord.split("");
        const checkAnswerList = answerList[answerNow] || [];
        for (let i = 0; i < checkAnswerList.length; i += 1) {
          if (
            checkAnswerList[i].text === randomWordList[i] &&
            checkAnswerList[i].status === "not-check"
          ) {
            checkAnswerList[i].status = "correct-answer";
            randomWordList.splice(i, 1, "");
          }
        }
        for (let i = 0; i < checkAnswerList.length; i += 1) {
          if (
            randomWordList.includes(checkAnswerList[i].text) &&
            checkAnswerList[i].status === "not-check"
          ) {
            checkAnswerList[i].status = "wrong-side";
            randomWordList.splice(i, 1, "");
          } else if (
            !randomWordList.includes(checkAnswerList[i].text) &&
            checkAnswerList[i].status === "not-check"
          ) {
            checkAnswerList[i].status = "wrong-answer";
            randomWordList.splice(i, 1, "");
          }
        }

        const checkLevel = ['not-check', 'wrong-answer', 'wrong-side', 'correct-answer', ]
        answerEnglishOptionList.map((englishWord) => {
          checkAnswerList.map((answerWord) => {
            if (
              answerWord.text === englishWord.text &&
              checkLevel.indexOf(answerWord.status) > checkLevel.indexOf(englishWord.status)
            ) {
              englishWord.status = answerWord.status;
            }
          });
        });
        this.$data.answerEnglishOptionList = answerEnglishOptionList;
        this.$data.answerNow += 1;
      }
    },
  },
};
</script>



<style lang="scss">
.englishTest {
  // empty css
  .answer-option {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    max-width: 767px;
    flex-wrap: wrap;
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
      max-width: 50px;
      height: 50px;
      flex: 1 0 10%;
      margin: 5px;
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
    background-color: rgba(174, 221, 239, 0.6);
    border-radius: 60px;
    .refresh-button {
      width: 240px;
      height: 40px;
      background-color: rgba(177, 211, 197, 0.5);
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
    padding: 0;
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