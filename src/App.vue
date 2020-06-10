<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid" style="padding-right: 6px;">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEtCAMAAACF/63iAAABU1BMVEX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9EsJVIAAAAcHRSTlMAAgQGCAoMDhASFBYYGhweICIkJigqLC4wMjQ2ODo8PkBCREZISkxOUFJUVlhaXF5gYmRmaGpsbnBydHZ4enx+gYOFh4mLjY+Rk5WXmZudn6Gjpaepq62vsbO1t7m7vb/Bw8XHycvNz9HT1dfZ293fC1TXggAAEBxJREFUeAHt3ddfE9vXBvCHhIIUEAwCUgSUXpQuPaL0ovQiHUICAZ71/1+9np+nHN6De/YkU/YkfD+5hJv5zOyy9lpr49mzZ8/+UlhZ29Ta/XFoZGxicmpqcvzTyEBvR0t9pDSMZ38qqGobnF7cPr5KyG9cn+2tzX7qaihFFsuv651ZP7oRXXfnWwvDzS+RbcJ1/Yv7CUnF/dm3ibYyZImCd9M7cUlP8njhYwSZrnFi71acwbOFnlJkquKelRjFUXd7E3XIPOVDu/fiBp7PNSGTlAweUNzDqy9NyBBdW3fiNp5PVSHwXs/FKZ7gXh8CrfeQ4h3ezEUQUCXTcYrHuNuKAKpeuxc/8LwfAdO0TfELr8dCCI7mA4qvktFcBEPTD4rv7qbCMF/tDsUIyVEYrmyTYgrGP8Bgoa8Uk/C0Eab6mBTTcLMEJqo9oRiIEzBOaJliJsaaYZbOWzEXV8MwR/4mxWjJTpii+0FMx+9hmCDnOyUA7lvhv+akBAMX4LdZSlDwKgI/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">
          <router-link to="/" class="navbar-brand">Deep Security Health Check: {{ds_data.customer}}</router-link>
        </div>

        <div v-if="decrypted" class="pull-right">
          <div class="btn-group" role="group" aria-label="..." style="padding-top: 8px;">
            <router-link v-bind:class="{'active': this.$route.name == 'Clients'}"     to="/agents"      class="btn btn-default">Agents</router-link>
            <router-link v-bind:class="{'active': this.$route.name == 'Policies'}"     to="/policies"     class="btn btn-default">Policies</router-link>
             </div>
        </div>
      </div><!-- /.container-fluid -->
    </nav>
    <div class="fluid-container">
      <router-view @unlock="unlock"/>
    </div>
  </div>
</template>

<script>

// import bpg from './assets/bpg_data.json';
import dsbpg from './assets/tech_report_data.json';

import CryptoJS from 'crypto-js';
import lzma from '../lzma';

export default {
  name: 'App',
  data () {
    return {
      decrypted: false,
      error_message: "",
      raw_data : [],
      ds_data: [],
      CryptoJSAesJson : {
          parse: function (jsonStr) {
              var j = JSON.parse(jsonStr);
              var cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.ct)});
              cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);
              return cipherParams;
          }
      },
      operators: {
        "LESS_THAN": "less than",
        "LESS_THAN_OR_EQUAL": "less than or equal to",
        "EQUAL": "equal to",
        "GREATER_THAN_OR_EQUAL": "greater than or equal to",
        "GREATER_THAN": "greater than or equal to",
        "NOT_EQUAL": "not equal to",
        "CONTAINS": "need contains",
        "NOT_CONTAINS": "not contains",
        "LENGTH_GREATER_THAN": "length greater than",
        "LENGTH_NOT_GREATER_THAN": "length not greater than"
      },
    }
  },
  methods:{

    // Of course this is not mine => https://gist.github.com/getify/7325764
    convertWordArrayToUint8Array: function (wordArray) {
        var len = wordArray.words.length,
          u8_array = new Uint8Array(len << 2),
          offset = 0, word, i
        ;
        for (i=0; i<len; i++) {
          word = wordArray.words[i];
          u8_array[offset++] = word >> 24;
          u8_array[offset++] = (word >> 16) & 0xff;
          u8_array[offset++] = (word >> 8) & 0xff;
          u8_array[offset++] = word & 0xff;
        }
        return u8_array;
      },

    unlock : function ( unlockKey ){
      this.error_message = "";
      let json_encrypted_data = atob(dsbpg.encrypted_data);

      let pw = CryptoJS.enc.Latin1.parse(unlockKey);
      var j = JSON.parse(json_encrypted_data);
      let iv_p = CryptoJS.enc.Hex.parse(j.iv);
      var cipher = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.ct)});

      let decrypted_bytes = CryptoJS.AES.decrypt(cipher, pw , {iv: iv_p, mode: CryptoJS.mode.CBC});
      try {
          const decByteArray = this.convertWordArrayToUint8Array(decrypted_bytes);

          let uncompress_data = lzma.decompress(decByteArray)
          this.ds_data = JSON.parse(uncompress_data);
          this.decrypted = true;
          this.$router.push('/agents');
      }catch(err){
        this.error_message = "<b>ERROR:</b> Wrong decryption key.";
      }
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 50px;
  }

  .navbar-default{
    background-color: #db3d44;
    color: #fff;
    font-weight: bold;
  }

  .navbar-default .navbar-brand{
    color: #fff;
  }

  .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:visited{
    color: #fff;
  }

  .navbar-header img{
    width: 35px;
    float: left;
    margin-right: 10px;
    margin-top: 7px;
  }

  .sub_title{
    font-size: 12px;
  }
</style>
