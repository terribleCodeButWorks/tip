<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Planaria />
    <button v-if="!tipping" @click="tipping = !tipping">TIP</button>
    <div class="tip-container" v-else>
      <ul v-for="amount in amounts" v-bind:key="amount">
        <button @click="tip(amount)">{{ amount }}satoshi</button>
      </ul>
      <MoneyButton
        to="1HWbpbCZHTBJmZxjFAmfHqgNjbEePkMqTW"
        :amount="tipAmount"
        currency="BSV"
        label=""
        client-identifier="a487dbab0a83557b5b681456038be735"
        button-id="1563118841480"
        button-data="{}"
        type="tip"
        @payment="handlePayment"
      />
    </div>
  </div>
</template>

<script>
import MoneyButton from "vue-money-button"
import Planaria from "@/components/Planaria.vue"

const Satoshi = (x) => {
  return x / 100000000
}

export default {
  name: "HelloWorld",
  methods: {
    tip: function(amount) {
      this.tipAmount = Satoshi(amount)
    },
    handlePayment: function() {
      this.$root.$emit("tipped")
      this.msg = "Bitcoin is the most efficient system, and will help us to stamp out dishonesty and fraud."
    }
  },
  data: () => {
    return {
      tipping: false,
      amounts: [600, 800, 1000, 2000, 5000, 8000, 10000],
      tipAmount: Satoshi(600),
      msg: "Bitcoin is the most efficient system, "
    };
  },
  components: {
    MoneyButton,
    Planaria
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.tip-container {
  text-align: center;
  padding: auto auto;
}
</style>
