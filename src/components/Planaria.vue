<template>
  <div>
    <p v-if="!tipped">{{ msg }}</p>
    <p v-if="tipped">
      <strong>{{ txCount }}</strong> people total
      <strong>{{ totalReceived }}</strong> satoshis
      <strong>TIP</strong>ed!
    </p>
  </div>
</template>

<script>
const query = {
  v: 3,
  q: {
    find: {
      "out.e.a": "1HWbpbCZHTBJmZxjFAmfHqgNjbEePkMqTW"
    },
    limit: 1000
  },
  r: {
    f:
      "[ reduce .[] as $tx ( {count:  0, value: 0} ; . | .count += 1 | .value += $tx.out[0].e.v ) ]"
  }
};

var s = JSON.stringify(query);
var b64 = Buffer.from(s).toString("base64");
var url =
  "https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/" + b64;

export default {
  name: "Planaria",
  mounted() {
    this.$root.$on("tipped", () => {
      this.msg = "accounting the ledger...";
      try {
        this.$genesis.get(url).then(r => {
          let data = r.data;
          this.txCount = data.u[0].count + data.c[0].count;
          this.totalReceived = data.u[0].value + data.c[0].value;
          this.tipped = true;
        });
      } catch (error) {
        this.msg = "network seems broken?"
      }
    });
  },
  data: () => {
    return {
      tipped: false,
      txCount: 0,
      totalReceived: 0,
      msg: "You can't imagine how many people tipped, I swear...Tip to see it."
    };
  }
};
</script>
