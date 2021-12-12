const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description:
        "SOCKS is an Internet protocol that exchanges network packets between a client and server through a proxy server.",
    };
  },
});

const mounted = app.mount("#app");
