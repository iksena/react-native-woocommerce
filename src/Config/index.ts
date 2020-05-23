import { Platform } from 'react-native';

export default {
  WC_BASE_URL: Platform.OS === 'android' ?
      'http://192.168.100.39:8888/wp-json/wc/v3' :
      'http://localhost:8888/wp-json/wc/v3',
  // WC_CONSUMER_KEY: 'ck_eca8cadd75c243210391c0fa9a102fe8c15852d8',
  WC_CONSUMER_KEY: 'ck_6e8324e82531cce36ad563d8c748bf0fb4d3f394', // admin
  // WC_CONSUMER_SECRET: 'cs_1b92356f380183675b327267cfc7be5dc6cd7594'
  WC_CONSUMER_SECRET: 'cs_7c1ca9c0b045c92c58e885d0a94a859eb70bfa3a' // admin
};
