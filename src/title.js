export const title = {
  data() {
    return {
      title: 'title',
      subTitle: 'sub title',
    };
  },

  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    },
  },
};
