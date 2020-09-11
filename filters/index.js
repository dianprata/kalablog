import Vue from 'vue'

Vue.filter('formatArticleCategory', function (category) {
  if (category === 1) {
    return 'Productivity'
  } else if (category === 2) {
    return 'UI/UX'
  } else {
    return 'Javascript'
  }
})
