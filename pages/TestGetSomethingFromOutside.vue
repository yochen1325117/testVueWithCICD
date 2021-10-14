<template>
  <no-ssr>
    <div class='TestGetSomethingFromOutside'>
      <p>TestGetSomethingFromOutside</p>
      <div class='table-title'>
        <div v-for='tableTitle in dataTitle' :key='tableTitle'>
          {{ tableTitle }}
        </div>
      </div>
      <div class='table-body'>
        <div
          class='body-block'
          v-for='tableBody in dataBody'
          :key='tableBody.key'
        >
          <p>{{ tableBody.statistic_yyy }}</p>
          <p>{{ tableBody.according }}</p>
          <p>{{ tableBody.site_id }}</p>
          <p>{{ tableBody.marriage_type }}</p>
          <p>{{ tableBody.female_age_or_spouse1 }}</p>
          <p>{{ tableBody.male_age_or_spouse2 }}</p>
          <p>{{ tableBody.marry_pair }}</p>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  ssr: false,
  layout: 'testNoteLayout',
  name: 'TestGetSomethingFromOutside',
  components: {},
  data() {
    return {
      dataTitle: {},
      dataBody: [],
    };
  },
  methods: {},
  async asyncData(content) {
    const apiResponse = await content.$axios.get(
      'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-001661-005'
    );
    const data = apiResponse.data || {};
    const result = data.result || {};
    const records = result.records || [];
    const dataBody = records.filter((recordData) => {
      if (+recordData.marry_pair > 0) {
        recordData.key = Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, '')
          .substr(0, 5);
        return recordData;
      }
    });
    const dataTitle = records.filter(
      (recordData) => recordData.marry_pair === '結婚對數'
    );
    console.log('dataTitle', dataTitle);
    return {
      dataBody: dataBody || [],
      dataTitle: (dataTitle && dataTitle[0]) || {},
    };
  },
  head() {
    return {
      title: '抓抓-銓',
    };
  },
};
</script>
<style scoped lang='scss'>
.TestGetSomethingFromOutside {
  .table-title,
  .body-block {
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
}
</style>