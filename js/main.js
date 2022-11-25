const { createApp } = Vue;

createApp( {
    data(){
        return {
            title: "HELLO WORD",
            imgSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
            appClass: "container"
        }
    }
}).mount("#myApp");