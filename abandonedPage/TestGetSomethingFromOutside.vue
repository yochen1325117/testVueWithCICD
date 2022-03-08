<template>
  <no-ssr>
    <div class="TestGetSomethingFromOutside">
      <p>TestGetSomethingFromOutside</p>
      <div>
        <select v-model="filterValue" @change="changeBigFilterOption">
          <option :value="null" selected>請選擇大類</option>
          <option
            v-for="titleOption in dataTitle"
            :key="titleOption.id"
            :value="titleOption.id"
          >
            {{ titleOption.label }}
          </option>
        </select>
        <select v-if="filterOptionList" v-model="filterOption">
          <option :value="null" selected>請選擇小類</option>
          <option
            v-for="filterOptionData in filterOptionList"
            :key="filterOptionData"
            :value="filterOptionData"
          >
            {{ filterOptionData }}
          </option>
        </select>
        <button v-if="filterOption" @click="getFilterDataTwo">抓2</button>
      </div>
      <div class="table-title">
        <div v-for="tableTitle in dataTitle" :key="tableTitle.id">
          {{ tableTitle.label }}
        </div>
      </div>
      <div class="table-body">
        <div
          class="body-block"
          v-for="tableBody in dataBody"
          :key="tableBody.key"
        >
          <div
            class="body-data"
            v-for="apiResultTitleId in apiResult.fields"
            :key="apiResultTitleId.id"
          >
            {{ tableBody[apiResultTitleId.id] }}
          </div>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  ssr: false,
  layout: "testNoteLayout",
  name: "TestGetSomethingFromOutside",
  components: {},
  data() {
    return {
      apiResult: {},
      dataTitle: {},
      dataBody: [],
      setFilterObject: [],
      filterOptionList: [],
      filterValue: null,
      filterOption: null,
    };
  },
  methods: {
    changeBigFilterOption: function getFilterData() {
      const filterValue = this.$data.filterValue;
      const setFilterObject = this.$data.setFilterObject;
      this.$data.filterOption = null;
      this.$data.filterOptionList = Array.from(setFilterObject[filterValue]).sort();
    },
    getFilterDataTwo: function getFilterDataTwo() {
      const filterOption = this.$data.filterOption;
      const filterValue = this.$data.filterValue;
      const originBodyData = this.$data.originBodyData;
      this.$data.dataBody = originBodyData.filter(
        (tableData) => `${tableData[filterValue]}` === `${filterOption}`
      );
    },
  },
  async asyncData(content) {
    // const apiResponse = await content.$axios.get(
    //   "https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-001661-005"
    // );
    // const data = apiResponse.data || {};
    const result = {};
    const fields = result.fields || [];
    const records = result.records || [];
    const dataTitle = [];

    const setFilterObject = {};
    fields.map((fieldData) => {
      setFilterObject[fieldData.id] = new Set();
    });

    Object.keys(records[0]).map((recorTitledData) => {
      dataTitle.push({
        id: recorTitledData,
        label: records[0][recorTitledData],
      });
      records.map((recordData, index) => {
        if (index > 0) {
          setFilterObject[recorTitledData].add(
            `${recordData[recorTitledData]}` || ""
          );
        }
      });
    });

    const dataBody = records.filter((recordData) => {
      recordData.key = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5);
      return recordData;
    });
    // console.log("dataBody", dataBody);
    return {
      apiResult: result || {},
      dataBody: dataBody || [],
      originBodyData: dataBody || [],
      dataTitle: dataTitle || {},
      setFilterObject: setFilterObject || [],
    };
  },
  head() {
    return {
      title: "抓抓-銓",
    };
  },
};
</script>
<style scoped lang='scss'>
.TestGetSomethingFromOutside {
  .table-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    border: 1px solid;
    div,
    p {
      flex: 1;
      text-align: center;
    }
  }
  .table-body {
    .body-block {
      display: flex;
      text-align: center;
      justify-content: space-around;
      align-items: center;
      line-height: 2;
      transition: 0.5s;
      border-bottom: 1px solid gray;
      .body-data {
        flex: 1;
        padding: 6px;
      }
    }
    .body-block:hover {
      transform: translate(0px, -10%);
      box-shadow: 0 3px 15px 3px rgb(51 51 51 / 50%);
      background-color: white;
    }
  }
}
</style>