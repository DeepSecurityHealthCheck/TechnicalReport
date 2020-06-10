<template>
  <div v-if="$parent.decrypted" id="clients">

    <!-- Search Box at the top -->
    <div class="col-lg-12 search_component text-center">
      <form v-on:submit.prevent="noop">
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon" id="sizing-addon2">
              <!-- Search icon -->
              <img src="data:image/png;base64,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" />
            </span>
            <input type="text" class="form-control" id="client_search_box" name="search_box" placeholder="Search ..." @keyup="searchType( $event.target.value )">
            <!-- <div class="input-group-addon">
              <span class="input-group-text" style="cursor:pointer" @click="export_to_csv()">Export to CSV</span>
            </div> -->
          </div>
        </div>
      </form>
    </div>

    <div class="col-lg-12 client_table_container">
      <table class="table table-condensed table-hover">
        <thead>
          <tr>
            <th @click="changeOrder('hostname')"><img v-if="orderBy=='hostname'" :src="getArrowIcon()" class="arrow" /> Hostname</th>
            <th @click="changeOrder('group_name')"><img v-if="orderBy=='group_name'" :src="getArrowIcon()" class="arrow" /> Computer group
            </th>
            <th @click="changeOrder('policy_name')"><img v-if="orderBy=='group_name'" :src="getArrowIcon()" class="arrow" /> Policy
            <th @click="changeOrder('plataform')"><img v-if="orderBy=='plataform'" :src="getArrowIcon()" class="arrow" /> OS Family</th>
            <th @click="changeOrder('agent_version')"><img v-if="orderBy=='agent_version'" :src="getArrowIcon()" class="arrow" /> Version</th>

            <th v-bind:key="short_name" v-for="short_name, module_name in this.$parent.ds_data.modules" class="modules_th" @click="changeOrder(module_name.replace(' ', '_').toLowerCase())">
                <img v-if="orderBy==module_name.replace(' ', '_').toLowerCase()" :src="getArrowIcon()" class="arrow" />
                <tooltip effect="scale" trigger="hover" placement="top" :content=module_name>
                  <span>{{ short_name.replace(/amp;/g, '').toUpperCase() }}</span>
                </tooltip>
            </th>
            
            <th @click="changeOrder('results')"><img v-if="orderBy=='compliancy_perc'" :src="getArrowIcon()" class="arrow" /> Conformity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="computer.id" v-for="computer in filteredAndSlicedClients" @click="selectedClient = computer; showModal = true">
            <td>{{computer.hostname}}</td>
            <td>{{computer.group_name != undefined ? computer.group_name : "-"}}</td>
            <td>{{computer.policy_name != undefined ? computer.policy_name : "-"}}</td>
            <td>{{computer.plataform}}</td>
            <td>{{computer.agent_version}}</td>
            <td v-bind:key="name" v-for="score, name in computer.modules" :style="summary_status_item( score.conformity_rate )" class="modules_td"></td>
            <div class="progress" style="margin-bottom:5px;">
              <div class="progress-bar" role="progressbar" :aria-valuenow="computer.results" aria-valuemin="0" aria-valuemax="100" :style="get_css_percentage(computer.results)">
                {{computer.results}}
              </div>
            </div>  
          </tr>
        </tbody>
      </table>
    </div>

    <div class="col-lg-1">
      <select v-model="displayedClients" class="btn btn-default">
        <option value="10">10 per page</option>
        <option value="25" selected>25 per page</option>
        <option value="50">50 per page</option>
        <option value="75">75 per page</option>
        <option value="100">100 per page</option>
        <option value="250">250 per page</option>
        <option value="500">500 per page</option>
        <option value="1000">1000 per page</option>
      </select>
    </div>
    <div class="col-lg-4 client_table_container">
      <div class="text-center">
        <button v-if="get_page > 1" class="btn btn-primary btn-sm" style="padding:2px 10px;" @click="current_page=1"> << </button>
        <button v-if="get_page > 1" class="btn btn-primary btn-sm" style="padding:2px 10px;" @click="current_page--"> < </button>
        <span v-if="filteredAndSlicedClients.length > 0"> {{ ((get_page - 1) * displayedClients) + 1 }} - {{ ((get_page - 1) * displayedClients) + filteredAndSlicedClients.length }} (out of {{ filteredClients.length }})</span>
        <button v-if="get_page < Math.ceil(filteredClients.length / displayedClients)" class="btn btn-primary btn-sm" style="padding:2px 10px;" @click="current_page++"> > </button>
        <button v-if="get_page < Math.ceil(filteredClients.length / displayedClients)" class="btn btn-primary btn-sm" style="padding:2px 10px;" @click="current_page = Math.ceil(filteredClients.length / displayedClients)"> >> </button>
      </div>
    </div>
    <div class="col-lg-7 client_table_container text-right">
      <div class="alert alert-grey clearfix" style="padding:5px; display:inline-block">
        <div :style="summary_status_item('100') + ';float:left; margin-left:5px'" class="status_setting">Fully Compliant</div>
        <div :style="summary_status_item('-') + ';float:left; margin-left:15px'" class="status_setting">Partially Compliant</div>
        <div :style="summary_status_item('0') + ';float:left; margin-left:15px'" class="status_setting">Not compliant</div>
      </div>
    </div>

    <!-- Client Details modal -->
    <modal v-if="showModal" v-model="showModal" id="details" effect="fade">

      <!-- custom header -->
      <div slot="modal-header" class="modal-header">
        <div class="col-lg-12">
          <h4 class="modal-title" id="myModalLabel"><b>Conformity details for "{{selectedClient.hostname}}"</b></h4>
        </div>

        <div class="col-lg-6" style="font-size: 12px;">
          <div style="margin-top: 3px"><div class="label label-default" style="background-color: white; color: #db3d44; display: inline-block; width: 60px; padding-top: 4px">Version</div> {{selectedClient.agent_version}}</div>
          <br>
          <div style="margin-top: 3px"><div class="label label-default" style="background-color: white; color: #db3d44; display: inline-block; width: 60px; padding-top: 4px">OS</div> {{ selectedClient.plataform }}</div>
        </div>
    
        <div class="col-lg-6" style="font-size: 12px; text-align: right">
          <!-- COMBAK: ADJUST INDEXING -->
          <div v-if="selectedClient.policy_name != undefined" style="margin-top: 3px">{{selectedClient.policy_name}}    <div class="label label-default" style="background-color: white; color: #db3d44; display: inline-block; width: 60px; padding-tip: 4px">Policy</div></div>
          <br>
          <div v-if="selectedClient.group_name != undefined" style="margin-top: 3px">{{selectedClient.group_name}} <div class="label label-default" style="background-color: white; color: #db3d44; display: inline-block; width: 60px; padding-top: 4px">Group</div></div>
          <br>
          <br>
        </div>
        </div>
        <div class="row"></div>
        
        <div class="alert alert-info">
            For more details about the settings, please refer to the Best Practice Guide!
        </div>
        
        <div v-bind:key="short_name" v-for="(short_name, module) in this.$parent.ds_data.modules" style="padding-bottom: 10px;">
         <div v-if="selectedClient.modules[module.replace(' ', '_').toLowerCase()].failed_items.length != 0">
          <b>{{module}}</b>
          <br>
            <div v-bind:key="i" v-for="result, i in selectedClient.modules[module.replace(' ', '_').toLowerCase()].failed_items" style="padding-bottom: 10px;">
              <div class="status_setting" :style="summary_status_item(0)">
                {{result.description.failure_item}}
              <!-- {{result.description.failure_item}}, expected {{$parent.operators[result.operator]}} <b>{{result.operand}}</b> -->
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-for="(module_obj, module_id, module_index) in this.$parent.raw_data.modules" style="padding-bottom:10px;">
          <b>{{ module_obj.name}}</b>
          <div v-for="(condition_id, condition_index) in get_module_conditions( module_id )">
            <div :style="summary_status_item(selectedClient.conditions[module_index][condition_index])" class="status_setting">
              {{ $parent.raw_data.conditions[condition_id].name.replace(/amp;/g, '') }}
            </div>
          </div> 
        </div> -->

        <!-- </div> -->

      <!-- custom buttons -->
      <div slot="modal-footer" class="modal-footer">
        <button type="button" class="btn btn-default" @click=" closeModal() ">Close</button>
      </div>

    </modal>

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
      showModal: false,
      selectedClient: null,
      defaultDisplayedClients: 25,
      displayedClients: 25,
      increaseBy:25,
      current_page:1,
      orderBy:'hostname',
      orderDirection:'asc',
      orderIndex: 0,
      module_index: {
        "ip":0,
        "am":1,
        "wr":2,
        "li":3,
        "im":4,
        "fw":5,
        "sp":6,
        "dc":7
      },

      icons:{
        "arrow_up":"data:image/png;base64,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",
        "arrow_down":"data:image/png;base64,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",
        "circle_full":'data:image/png;base64,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',
        "circle_half":'data:image/png;base64,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',
        "circle_empty":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKxmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarZZnUFP5Gsbfc056oSUgICX0JkgngPQaQAm92AgJkECIMSSo2FBZXMG1oCICNnRRRMG1ALIWRBQLi2LDvkEWFXVdLGBB5X5gCXvvzP1wZ+47c+b85pn3/7z/95wvDwDtD55UKkY1AHIlcllsWCArOSWVRXwKCDCABB6A8Ph50gAuNwoAYOL9j0IARu4CAgBwy54nlYrhfytNQUYeHwDhAkC6II+fC4CcAECu8qUyOQBWCABmi+RSOQC2HwCYsuSUVACsBQCYWePcBQDM9HFWAgBTFh8bBIB9ACDReDxZFgANAICVz8+SA9BYAOAoEYgkADQuAPjyhTwBAG0TAEzLzV0gAKCdBgDr9H/4ZP2bZ7rKk8fLUvH4LgAAQAoW5UnFvCXw/65csWJihhkA0ISy8FgA0AFATuQsiFSxJH1W9ASLBAATLFSEJ0wwPy8odYIFvOBI1VnxrKgJzhSFclQ+ck78BMsWxKr8M/JC4iaYJ5ucpchJCFDNzeCoPAuE8UkTnC9KnDXBeTlxkZM9QSpdpohV3TlTFqraMTfvH3uJOKp+uTA+XLUjb/JuGXnJqjsIMoJDVLokQdUjlQeq/KVirqo/Qxym0vPy41Rn5bL4yX45V/V9snkR3AmGYAiBKIgCFnDBGZzBCVwhHECesVgOABC0QLpEJsoSylkBUqk4g8WR8B2msZwdndgAySmprPHf/f4eIACA6JAmNeFFALcOAER3UsvcAtA8AqBZNKlZLQfQCgVo28RXyPLHNRwAAB4ooA5M0AMjMANrsAdncAdv8IcQiIBoiIcUmAd8EEIuyGARLINVUAylsAm2QSXshn1wEI7AMWiG03AeLsE1uAF34CEoYQBewRCMwCiCIESEjjAQPcQYsUDsEGeEjfgiIUgUEoukIGlIFiJBFMgyZA1SipQhlchepA75BTmFnEeuID3IfaQPGUTeIV9QDKWhTNQQtUSno2w0AI1E49G5aBa6EC1Ai9ANaAVagx5Gm9Dz6DX0DqpEX6HDGGBUTAczwewxNhaERWOpWCYmw1ZgJVg5VoM1YK1YJ3YLU2Kvsc84Ao6BY+Hscd64cFwCjo9biFuBW4+rxB3ENeE6cLdwfbgh3Hc8HW+At8N74Tn4ZHwWfhG+GF+Or8WfxF/E38EP4EcIBIIOwYrgQQgnpBCyCUsJ6wk7CY2ENkIPoZ8wTCQS9Yh2RB9iNJFHlBOLiTuIh4nniDeJA8RPJCrJmORMCiWlkiSk1aRy0iHSWdJN0nPSKFmDbEH2IkeTBeQl5I3k/eRW8nXyAHmUokmxovhQ4inZlFWUCkoD5SLlEeU9lUo1pXpSY6giaiG1gnqUepnaR/1M06LZ0oJoc2gK2gbaAVob7T7tPZ1Ot6T701PpcvoGeh39Av0J/ZMaQ81BjaMmUFupVqXWpHZT7Y06Wd1CPUB9nnqBern6cfXr6q81yBqWGkEaPI0VGlUapzR6NYY1GZpOmtGauZrrNQ9pXtF8oUXUstQK0RJoFWnt07qg1c/AGGaMIAafsYaxn3GRMcAkMK2YHGY2s5R5hNnNHNLW0nbVTtRerF2lfUZbqYPpWOpwdMQ6G3WO6dzV+TLFcErAlIwp66Y0TLk55aPuVF1/3QzdEt1G3Tu6X/RYeiF6OXqb9Zr1Huvj9G31Y/QX6e/Sv6j/eipzqvdU/tSSqcemPjBADWwNYg2WGuwz6DIYNjQyDDOUGu4wvGD42kjHyN8o22ir0VmjQWOGsa+xyHir8TnjlyxtVgBLzKpgdbCGTAxMwk0UJntNuk1GTa1ME0xXmzaaPjajmLHNMs22mrWbDZkbm880X2Zeb/7AgmzBthBabLfotPhoaWWZZLnWstnyhZWuFceqwKre6pE13drPeqF1jfVtG4IN2ybHZqfNDVvU1s1WaFtle90OtXO3E9nttOuZhp/mOU0yrWZarz3NPsA+377evs9BxyHKYbVDs8Ob6ebTU6dvnt45/bujm6PYcb/jQyctpwin1U6tTu+cbZ35zlXOt13oLqEuK11aXN662rlmuO5yvefGcJvpttat3e2bu4e7zL3BfdDD3CPNo9qjl81kc9nr2Zc98Z6Bnis9T3t+9nL3knsd8/rL2947x/uQ94sZVjMyZuyf0e9j6sPz2euj9GX5pvnu8VX6mfjx/Gr8nvqb+Qv8a/2fB9gEZAccDngT6BgoCzwZ+DHIK2h5UFswFhwWXBLcHaIVkhBSGfIk1DQ0K7Q+dCjMLWxpWFs4PjwyfHN4L8eQw+fUcYYiPCKWR3RE0iLjIisjn0bZRsmiWmeiMyNmbpn5aJbFLMms5miI5kRviX7MteIu5P4aQ4jhxlTFPIt1il0W2xnHiJsfdyhuJD4wfmP8wwTrBEVCe6J64pzEusSPScFJZUnK5OnJy5OvpeiniFJaUompiam1qcOzQ2Zvmz0wx21O8Zy7c63mLp57ZZ7+PPG8M/PV5/PmH0/DpyWlHUr7yovm1fCG0znp1elD/CD+dv4rgb9gq2AwwyejLON5pk9mWeaLLJ+sLVmDQj9hufC1KEhUKXqbHZ69O/tjTnTOgZwxcZK4MZeUm5Z7SqIlyZF0LDBasHhBj9ROWixVLvRauG3hkCxSVpuH5M3Na5Ez5VJ5l8Ja8YOiL983vyr/06LERccXay6WLO5aYrtk3ZLnBaEFPy/FLeUvbV9msmzVsr7lAcv3rkBWpK9oX2m2smjlQGFY4cFVlFU5q35b7bi6bPWHNUlrWosMiwqL+n8I+6G+WK1YVty71nvt7h9xP4p+7F7nsm7Huu8lgpKrpY6l5aVf1/PXX/3J6aeKn8Y2ZG7o3ui+cdcmwibJprub/TYfLNMsKyjr3zJzS9NW1taSrR+2zd92pdy1fPd2ynbFdmVFVEXLDvMdm3Z8rRRW3qkKrGqsNqheV/1xp2DnzV3+uxp2G+4u3f1lj2jPvb1he5tqLGvK9xH25e97tj9xf+fP7J/ravVrS2u/HZAcUB6MPdhR51FXd8jg0MZ6tF5RP3h4zuEbR4KPtDTYN+xt1GksPQpHFUdf/pL2y91jkcfaj7OPN5ywOFF9knGypAlpWtI01CxsVraktPScijjV3urdevJXh18PnDY5XXVG+8zGs5SzRWfHzhWcG26Ttr0+n3W+v31++8MLyRdud8R0dF+MvHj5UuilC50Bnecu+1w+fcXryqmr7KvN19yvNXW5dZ38ze23k93u3U3XPa633PC80dozo+fsTb+b528F37p0m3P72p1Zd3ruJty91zunV3lPcO/FffH9tw/yH4w+LHyEf1TyWONx+RODJzW/2/zeqHRXnukL7ut6Gvf0YT+//9UfeX98HSh6Rn9W/tz4ed0L5xenB0MHb7yc/XLglfTV6OviPzX/rH5j/ebEX/5/dQ0lDw28lb0de7f+vd77Ax9cP7QPc4efjOSOjH4s+aT36eBn9ufOL0lfno8u+kr8WvHN5lvr98jvj8Zyx8akPBkPAAAwAEAzMwHeHQCgpwAwbgBQZo/n5b9zPjKZ+P8bj2dqAABwB6htA0gsBIgpBKhuA7BsA9BoA+D6A8T7A+rionr+rrxMF+dxL2ozAL58bOx9EgDRBuBb79jYaPPY2LdaAOwBQNvIeE4HANA4DLBnOzvSLfB60gX1/8zL/wKoNQpZGroDGwAAACBjSFJNAABuJwAAc68AAPyOAACEtwAAeJMAAOosAAAyBQAAFXPNHflOAAABFElEQVR42oTSvUtcURCG8d+9FmKTyt4YUyTECzbpxFtkkZR7K9kiYAr/gBCwESSQ0sZKrQSLBLuDRaoQyAlrLxzF3mDAj047P26as03Ism83D88MDDNF27YGqepmGT0sZnSIrymGrYFTtG2rqptxfMObzM9wj2e5PsLbFMNFmcH3LB/gZYphKsUwgynsYQ6/qropi9mF7hL28SPF0PGfVHWzi/dYK/Ex857hWcEjPpR4jd8phqthdorhAX1MDna4Nzp3UOIE01XdTIxomMdNic0M9oaZVd1sYBw7xexCdwzHeIFtfEoxXGbxCVaxhms8HRxuEj/xKg/t4wF1rv+gk2I4Lf55jXW8w/OMzvEFn1MMt/B3AGOjVQkIiUTPAAAAAElFTkSuQmCC',
        "circle_disabled":'data:image/png;base64,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',
        "circle_forbidden":'data:image/png;base64,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',
        "circle_vulnerability":'data:image/png;base64,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',
        "circle_critical":'data:image/png;base64,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',
        "circle_warning":'data:image/png;base64,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',
        "circle_notice":'data:image/png;base64,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',
        "circle_blank":''
      }
    }
  },
  beforeCreate(){
    if(!this.$parent.decrypted){
      this.$router.push('/');
    }
  },
  methods:{
    get_criticity_level: function(weight) {
      if (weight > 7) return "HIGH";
      else if (weight > 4) return "MEDIUM";
      else return "LOW";
    },
    get_client_disc_space_in_MB: function(disk_space) {
        // Can either be: OK
        // Or: 1003,6018  ==  10.03%, 6018MB
        let disk_space_string = String(disk_space);

        if (disk_space_string.match(/(\d+),(\d+)/)) {
            let found   = disk_space_string.match(/(\d+),(\d+)/);
            return found[2];
        }
        else {return "";}
    },
    searchType: function( data ){
      this.searchText   = data.toLowerCase();
      this.current_page = 1;
    },
    // get_module_conditions: function( module_id ){
    //   return Object.keys(this.$parent.raw_data.conditions).filter( condition_id => {
    //     return this.$parent.raw_data.conditions[ condition_id ].module == module_id;
    //   });
    // },
    getArrowIcon: function(){
      return (this.orderDirection == 'asc')? this.icons.arrow_up :  this.icons.arrow_down;
    },
    getClientDiscHealth: function( disc_health_string ){
      let disc_health   = String( disc_health_string );
      let re            = /(\d+),(\d+)/;
      if (disc_health == "OK") {
        return "Ok";
      }
      else if (disc_health == "DN") {
        return "Unknown";
      }
      else {
        // $free_space_ratio,$free_space_MB
        // 1500,12441  == 15%,12441 MB
        let found   = disc_health.match(re);

        if (found.length == 3) {
          let space_in_percent  = found[1] / 100;
          let health_string     = space_in_percent + "% (" + found[2] + " MB)";
          return health_string;
        }
        else { return "Unknown"; }
      }
    },
    closeModal: function() {
      this.showModal = false;
    },
    summary_status_item( result_code ) {
      if (result_code == 100) result_code = "1";
      else if (result_code >= 50)result_code = "-"; 
      else if (result_code > 0) result_code = "0";
    
      let image_name          = "this.icons.circle_";
      let status              = String( result_code );
      let status_description  = this.get_status_description(result_code)[0];
      image_name             += status_description;

      return "background-image:url( '"+eval(image_name)+"' );"
    },
    get_status_description: function( result_code ) {
        result_code   = String(result_code);
        if      (result_code == "1")  {return ["full",      "Fully Compliant"];}
        else if (result_code == "-")  {return ["half",      "Partially Compliant"];}
        else if (result_code == "0")  {return ["empty",     "Not Compliant"];}
        else if (result_code == "X")  {return ["disabled",  "Unavailable"];}
        else                          {return ["forbidden", "Not Suggested"]}
    },
    get_css_percentage( percentage ){
      return "width: "+percentage+"%";
    },
    changeOrder( byField ){

      if(byField in this.module_index){
        this.orderIndex = this.module_index[byField];
      }
      if( this.orderBy == byField ){
        this.orderDirection = (this.orderDirection == 'asc') ? 'desc' : 'asc';
      }
      else{
        this.orderBy        = byField;
        this.orderDirection = 'asc';
      }
    }
  },
  watch: {
    showModal() {
      // When the modal closes...
      // Remove the modal-open class to enable scrolling on the main page again
      if (!this.showModal) {
        const body              = document.body;
        body.style.paddingRight = null;
        body.classList.remove('modal-open');
      }
    }
  },
  computed: {
    orderClients(){
      function propComparator(prop, direction, module_index, orderIndex, domains, os_families) {
        return function(a, b) {
            if (!(prop in a)) { // So we are sorting by module conformity
              a = a.modules[prop].conformity_rate;
              b = b.modules[prop].conformity_rate;
            } else {
              a = a[prop];
              b = b[prop];
            }

            if( direction == 'asc') {
              return ( ( a > b) ? 1 : (b > a) ? -1 : 0);
            }
            else
              return ( (a < b) ? 1 : (b < a) ? -1 : 0);
        }
      }

      return this.$parent.ds_data.computers
      .sort(
        propComparator( this.orderBy, this.orderDirection, this.module_index, this.orderIndex, this.$parent.raw_data.domain_index, this.$parent.raw_data.os_family_index)
      );
    },
    filteredClients() {
      return this.orderClients.filter(client => {
        return client.hostname.toLowerCase().includes(this.searchText)
               || client.agent_version.toLowerCase().includes(this.searchText)
               || client.plataform.toLowerCase().includes(this.searchText)
               || (client.group_name != undefined ? client.group_name.toLowerCase().includes(this.searchText) : false)
               || (client.policy_name != undefined ? client.policy_name.toLowerCase().includes(this.searchText) : false)
               || ( typeof client.agent_version !== 'undefined' &&  client.agent_version.toLowerCase().includes(this.searchText));
      })
    },
    filteredAndSlicedClients(){
      let filtered =  this.filteredClients.slice((this.current_page-1) * this.displayedClients, ((this.current_page-1) * this.displayedClients) + parseInt(this.displayedClients));
      return filtered;

    },

    get_page(){
     if( this.current_page > Math.ceil(this.filteredClients.length / this.displayedClients) ){
      this.current_page   = Math.ceil(this.filteredClients.length / this.displayedClients);
      calculated_page     = Math.ceil(this.filteredClients.length / this.displayedClients);

      if (! typeof calculated_page !== 'undefined') {return calculated_page;}
      else {return this.current_page;}
      
     }else{
      return this.current_page;
      }
    },

    ClientOnlineStatus: function(){
      if      (this.selectedClient.client_status == 0)  {return "Offline"}
      else if (this.selectedClient.client_status == 1)  {return "Online"}
      else                                              {return "Unknown"}
    },
    ClientStartupTime: function(){
      return(this.selectedClient.client_last_startup.replace(/T/, " "))
    },
    ClientVirtualizationType: function(){
      if (this.selectedClient.is_virtualized == "-")  {return("Physical")}
      else                                            {return("Virtualized ("+this.selectedClient.is_virtualized+")")}
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
