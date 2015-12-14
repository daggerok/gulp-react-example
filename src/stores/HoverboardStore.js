var HoverboardStore = Hoverboard({
  init: function(state, options) {
    return options;
  },
  check: function(state, value) {
    return state.map(function(option) {
      return {
        value: option.value,
        label: option.label,
        checked: value === option.value
      }
    })
  }
});

HoverboardStore.init([
  {value: '1', label: 'one', checked: false},
  {value: '2', label: 'two', checked: false},
  {value: '3', label: 'three', checked: false}
])
