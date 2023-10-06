import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: ' Poppy 01 ', img: 'https://cdn.discordapp.com/attachments/1124124600079491253/1159194305261469847/012.gif?ex=653022d3&is=651dadd3&hm=823e91567913764473b10c58c198e79625eb880312b3183f238eb57fb99aa993&', price: 120 },
    { name: ' Ram 02 ', img: 'https://cdn.discordapp.com/attachments/1124124600079491253/1159194305261469847/012.gif?ex=653022d3&is=651dadd3&hm=823e91567913764473b10c58c198e79625eb880312b3183f238eb57fb99aa993&', price: 90 },
    { name: ' Phone Toy 03 ', img: 'https://cdn.discordapp.com/attachments/1124124600079491253/1159194305261469847/012.gif?ex=653022d3&is=651dadd3&hm=823e91567913764473b10c58c198e79625eb880312b3183f238eb57fb99aa993&', price: 70 },
    { name: ' CPU 04 ', img: 'https://cdn.discordapp.com/attachments/1124124600079491253/1159194305261469847/012.gif?ex=653022d3&is=651dadd3&hm=823e91567913764473b10c58c198e79625eb880312b3183f238eb57fb99aa993&', price: 50 },
    { name: ' Wild 05 ', img: 'https://cdn.discordapp.com/attachments/1124124600079491253/1159194305261469847/012.gif?ex=653022d3&is=651dadd3&hm=823e91567913764473b10c58c198e79625eb880312b3183f238eb57fb99aa993&', price: 100 },


  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
