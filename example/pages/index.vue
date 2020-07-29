<template>
  <div>
    {{ numbers }}
  </div>
</template>

<script>
export default {
  computed: {
    numbers () {
      return this.$_.uniq([1, 1, 2, 2, 3, 4, 5]).join(' ')
    }
  }
}
</script>
