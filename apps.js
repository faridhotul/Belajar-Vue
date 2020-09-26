/*Vue.component('daftar', {
    template: '<div><siswa v-for="s in daftarsiswa">{{s.nama}} kelas {{s.kelas}} </siswa></div>',
    data: function(){
        return {
            daftarsiswa:[
                {nama : 'Farid', kelas : '12'},
                {nama : 'Dhotul', kelas : '12'},
                {nama : 'Khasanah', kelas : '12'}
            ]
        }
    }
   
});

Vue.component('siswa' , {
    template: '<ul><li><slot></slot></li></ul>'
});*/

//props
/*
Vue.component('karya' , {
    props : ['judul', 'isi'],
    template : '<div><h2>{{judul}}</h2><p>{{isi}}</p></div>'
});*/

//props lv 2
/*
Vue.component('tes', {
    props : ['nilai', 'nilai2'],
    template : '<div><b>{{nilai}}</b> harus <b>{{nilai2}}</b></div>'
})*/


Vue.component ('nama', {
    template: " <input type='text' placeholder = 'Masukkan nama Anda' @blur ='validasi'> </input> ",
    methods : {
        validasi (){
            this.$emit('applied')
        }
    }
});
var app = new Vue ({
    el:'#app',
    data: {
        valid : false
    },
    methods : {
        validasi() {
            this.valid = true;
        }
    }





    //capitalize
    /*
    data : {
        pesan : 'halo Farid sukses halo'
    },
    filters :{
        capitalize: function (value){
            if (!value) return ''
            value = value.toString()
            return value.charAt(0) .toUpperCase() + value.slice(1)
        }
    }*/

    //flipword
    /*
    data : {
        pesan : 'halo Farid sukses'
    },
    filters :{
        terbalik(value){
            if (!value) return ''
            value = value.toString()
            return value.split('') .reverse().join('')
        },
        terbalik2 (value){
            if (!value) return ''
            value = value.toString()
            return value.split(' ') .reverse().join(' ')
        },
    }*/


    //flip word
    /*
    data : {
        pesan : 'halo Farid sukses'
    },
    filters :{
        kapital(value){
            if (!value) return ''
            value = value.toString()
            return value.toUpperCase()
        },
        kecil (value){
            if (!value) return ''
            value = value.toString()
            return value.toLowerCase()
        },
    }*/

    // array computed property
    /*
    data :{
        cari:'',
        kendaraan :[
            {jenis : 'mobil', merk : 'honda' , warna : 'merah'},
            {jenis : 'motor', merk : 'honda' , warna : 'hitam'},
            {jenis : 'sepeda', merk : 'phoenix' , warna : 'biru'},
        ]
    },
    computed:{
        filterkendaraan: function(){
            return this.kendaraan.filter((kd)=>{
                return kd.merk.match(this.cari)
            });
        }
    }*/
  



//array ft computed property
    /*  data: {
            barang: [
                {jenis : 'mie rebus', stok:true},
                {jenis : 'mie goreng', stok:true},
                {jenis : 'mie gacoan', stok:true},
                {jenis : 'yamie panda', stok:false},
                {jenis : 'mie nyinyr', stok:false},
                {jenis : 'mie apah', stok:false}
        ]
    },
    computed:{
        barangAda(){
            return this.barang.filter(b => b.stok)
        },
        barangHabis(){
            return this.barang.filter(b => !b.stok)
        },
    }*/


    // menghapus array
    /*
    methods:{
        tambah: function(){
            this.kendaraan.push(this.isi)
            this.isi=''
        },
        hapus(index){
            this.kendaraan.splice(index,1)
        }
    }*/
        

    
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

// eventhandler tombol lain
/*methods:{
    enter : function() {this.hasil = 'Tombol Enter'},
    esc : function() {this.hasil = 'Tombol Escape'},
    space : function() {this.hasil = 'Tombol Spasi'},
    up : function() {this.hasil = 'Tombol panah atas'},
    down : function() {this.hasil = 'Tombol panah bawah'},
    right : function() {this.hasil = 'Tombol panah kanan'},
    left : function() {this.hasil = 'Tombol panah kiri'}

}*/
  
});