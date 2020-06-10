<template>
  <div class="" id="summary">
    <div v-if="!$parent.decrypted">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper modal">
            <div class="vertical-alignment-helper">
              <div class="modal-dialog vertical-align-center" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Data Decryption Form</h4>
                  </div>
                  <div class="modal-body">
                    <p>Key to unlock can be found in the Executive Report document.</p>
                    <input type="text" class="form-control" id="unlock_key" name="unlockKey" v-model="unlockKey" placeholder="Unlock key" />

                    <div class="alert alert-danger" v-if="this.$parent.error_message != ''" style="margin-top:20px; padding:10px;margin-bottom:0;">
                      <span  v-html="this.$parent.error_message"></span>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="unlock">Unlock</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Summary',
  data(){
    return {
      unlockKey:''
    }
  },
  beforeCreate(){
    if(this.$parent.decrypted){
      this.$router.push('/agents');
    }
  },
  methods:{
    unlock : function (){
      this.$emit('unlock', this.unlockKey);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    overflow-y: auto;
  }

  .vertical-alignment-helper {
      display:table;
      height: 100%;
      width: 100%;
  }
  .vertical-align-center {
      display: table-cell;
      vertical-align: middle;
  }
  .modal-content {
    width:inherit;
    height:inherit;
    margin: 0 auto;
  }

  .modal-header{
    background: #db3d44;
    color: #fff;
    font-weight: bold;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

</style>
