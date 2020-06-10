<template>
  <div v-if="$parent.decrypted" class="" id="clients">
    <div class="col-lg-12 search_component text-center">
    <form  v-on:submit.prevent="noop">
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-addon" id="sizing-addon2">
            <!-- Search icon -->
            <img src="data:image/png;base64,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" />
          </span>
          <input type="text" class="form-control" id="client_search_box" name="search_box" placeholder="Search ..." @keyup="searchType( $event.target.value )">
          <div class="input-group-addon">
            <span class="input-group-text" style="cursor:pointer" @click="export_to_csv()">Export to CSV</span>
          </div>
        </div>
      </div>
    </form>
    </div>

    <div v-for="category_name in exclusion_categories">

      <!-- Only print the table if the category exists (File, Folder, Spyware...) -->
      <div v-if="typeof exclusion_data[category_name] !== 'undefined'" class="col-lg-12 client_table_container">
        <table class="table table-condensed table-hover">
          <thead>
            <tr>

              <!-- Table headline -->
              <th class="modules_th" style="background-color: #eee; text-align: left">
                <span style="padding-left: 10px">{{category_name}}</span>
                <span style="font-size: 11px">exclusion list</span>
              </th>
              <th v-for="(description, short_name) in exclusion_columns" style="width: 6%; background-color: #eee"class="modules_th">
                <tooltip effect="scale" trigger="hover" placement="top" :content="description">
                  <span>{{ short_name }}</span>
                </tooltip>
              </th>
            </tr>
          </thead>

          <tbody>
            <!-- The exclusion items -->
            <tr v-for="(exclusion_distribution, description) in exclusion_data[category_name]" v-show="filtered_exclusions.includes(description)">
                <!-- The File/Folder itself -->
                <td style="padding-top:7px;">
                  {{description}}
                </td>
                
                <!-- Loop through all conlumns (scan states) -->
                <td v-for="(description, short_name) in exclusion_columns" style="padding-top:7px;">
                  <div v-if="typeof exclusion_distribution[short_name] !== 'undefined'" style="margin-bottom:5px; text-align: center"> 
                      {{ get_percentage(exclusion_distribution[short_name]) }}%
                  </div>
                  <div v-else style="text-align: center"> - </div>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { tooltip, modal } from 'vue-strap'

export default {
  name: 'Clients',
  components: {tooltip, modal},
  data () {
    return {
      searchText : '',
      decrypted: false,
      unlockKey: null,
      selectedClient: null,
      exclusion_categories: ["File", "Folder", "Spyware"],
      exclusion_columns: {
        "MS": "Manual Scan",
        "RT": "Real-time Scan",
        "PS": "Prescheduled Scan",
        "SN": "Scan Now"
      }
    }
  },
  beforeCreate(){
    if(!this.$parent.decrypted){
      this.$router.push('/');
    }
  },
  methods:{
    export_to_csv: function() {
      let _this               = this;
      let element             = document.createElement('a');
      let filename            = "data_export_Exclusions.csv";
      let exclusion_csv_list  = [["Type", "Exclusion", "MS", "RT", "PS", "SN"]];

      _this.exclusion_categories.forEach(function(category) {
        if (typeof _this.exclusion_data[category] !== 'undefined') {

          // Loop through the individual exclusions
          Object.keys(_this.exclusion_data[category]).forEach(function(exclusion_name) {
            let perc_manual_scan    = _this.exclusion_data[category][exclusion_name]["MS"] || "-";
            let perc_realtime_scan  = _this.exclusion_data[category][exclusion_name]["RT"] || "-";
            let perc_presched_scan  = _this.exclusion_data[category][exclusion_name]["PS"] || "-";
            let perc_scan_now       = _this.exclusion_data[category][exclusion_name]["SN"] || "-";
            let exclusion_cleaned   = exclusion_name.replace(/"/g, '\'');
            exclusion_cleaned       = exclusion_name.replace(/,/g, ';');

            exclusion_csv_list.push([category, exclusion_cleaned, perc_manual_scan, perc_realtime_scan, perc_presched_scan, perc_scan_now]);
          });
        }
      });

      element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(exclusion_csv_list.join("\n")));
      element.setAttribute('download', filename);
      element.style.display   = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    searchType: function( data ){
      this.searchText = data.toLowerCase();
      this.current_page = 1;
    },
    get_css_percentage: function( percentage ){
      return "width: "+percentage+"%";
    },
    get_percentage: function(exclusion_count) {
      return Math.round(parseInt(exclusion_count) * 100 / parseInt(this.$parent.raw_data.exclusion_matrix.client_count));
    }
  },
  watch: {},
  computed: {
    filtered_exclusions: function() {
      var filtered_data   = [];
      var _this           = this;

      Object.keys(_this.exclusion_data).forEach(function(category_name) {
        filtered_data = filtered_data.concat(Object.keys(_this.exclusion_data[category_name]).filter(function(exclusion_name) {
          return exclusion_name.toLowerCase().includes(_this.searchText);
        }));
      })

      return filtered_data;
    },
    exclusion_data : function() {
      return this.$parent.raw_data.exclusion_matrix;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .search_component .form-group input{
    display: inline;
  }

  .form-group{
    width: 100%;
    margin:20px 0;
  }

  .input-group{
    width: 80%;
    margin:auto;
  }

  .client_table_container td:hover, .client_table_container th:hover{
    cursor: pointer;
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

  .modal-header{
    background: #db3d44;
    color: #fff;
    font-weight: bold;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .modules_th{
    text-align:center;
    position:relative;
  }

  .modules_td{
    padding-left:20px; background-repeat: no-repeat; background-position: center;
  }

  .status_setting{
    padding-left:20px; background-repeat: no-repeat; background-position: 5px 3px;
  }

  #details .alert-info{
    font-size: 12px;
    padding: 5px;
    text-align: center;
  }

  .arrow{
    height:11px;
    margin-bottom:3px;
  }

  .alert-grey {
    color: #555;
    background-color: #efefef;
    border-color: #bbb;
  }
</style>
