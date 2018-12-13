<script>
export default {
  render: function(createElement) {
    // return createElement("p", "No items found.", []);
    return createElement(
      "div",
      [
        createElement("h3", "hello world"),
        createElement("h3", "0hello world")
      ]
    );
  }
};
</script>

<style>
</style>
