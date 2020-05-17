import {Platform} from 'react-native';

export default {
  ...Platform.select({
    android: {
      WC_BASE_URL: 'http://192.168.100.39:8888/wp-json/wc/v3',
    },
    ios: {
      WC_BASE_URL: 'http://localhost:8888/wp-json/wc/v3',
    },
    web: {
      WC_BASE_URL: 'http://localhost:8888/wp-json/wc/v3',
    },
  }),
  WC_CONSUMER_KEY: 'ck_eca8cadd75c243210391c0fa9a102fe8c15852d8',
  WC_CONSUMER_SECRET: 'cs_1b92356f380183675b327267cfc7be5dc6cd7594',
}
;
