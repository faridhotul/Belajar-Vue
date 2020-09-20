var app = new Vue ({
    el:'#app',
    data: {
        imageSrc :'me.jpg',
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
    /*computed: {
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
    }*/

    /*methods  : {
        diproses(){
            this.jumlah = this.a + this.b,
            this.kurang = this.a - this.b,
            this.kali = this.a * this.b,
            this.bagi = this.a / this.b
        }
    }*/
    /*
    watch:{
        isi : function(){
            this.keterangan = 'sedang mengetik....'
        }
    }*/

    //Watch dengan methode
    /*watch : {
        isi : 'ketik'
    },
    methods:{
        ketik : function(){
        if(this.isi == 'cinta'){
            this.keterangan ='sayang'
        } else{
            this.keterangan = 'sedang mengetik...'
            }
        }
    }*/
    //watch dengan login
    /*watch:{
        isi2: 'ketik'
    },
    methods:{
        ketik : function(){
            if (this.isi2 == this.isi){
            this.keterangan = '<i class="text-success">password sama silahkan lanjutkan</i>'
            this.tampil = true;
        }else{
            this.keterangan = '<i class ="text-danger">password tidak sama silahkan ulangi</i>'
            this.tampil = false;

        }
    }
}*/
  
});