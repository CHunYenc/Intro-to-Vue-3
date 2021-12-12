## L2

```

06:00 假設我們在網頁(F12)上要修改 data.product 的值，可以直接使用 F12 Console 頁面中輸入 mounted.product = "我要修改的值"

Q: 為什麼是修改 mounted 呢 ?
A: ./main.js 當中, 我們使用 app(js) 宣告，而 #app(html) 要使用 js 的值時, 需要 mounted 綁定 #app (html-id) 上。
```
