var app = new Vue ({
    el:'#app',
    data: {
        a:3,
        b:5
    }, 

    computed: {
        jumlah  : function(){
            return this.a + this.b
        },

        kurang  : function(){
            return this.a - this.b
        },

        kali  : function(){
            return this.a * this.b
        },

        bagi  : function(){
            return this.a / this.b
        },
    }
    /*data:{
        text   : 'Halo Farid Kuat!',
        angka1 : 100,
        angka2 : 10.4,
        pilihan1 : true,
        pilihan2 : false,
        array : ['satu', 'dua', 'tiga']

    }*/

    /*data  :{
        tampil  : false,
        pesan   : 'Farid harus sukses!',
        pesan2   : 'Harus selalu kuat'
    }*/

    // bab4
    /*data: {
        bil1    :1,
        bil2    :2,
        jumlah  : null
    },    
    computed: {
        diproses(){
            return this.jumlah = this.bil1 + this.bil2
        }
    },
    methods:{
        diproses(){
            return this.jumlah = this.bil1 + this.bil2
        }
    }*/

    //computed - methode
    
});