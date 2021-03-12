<template>
    <div>
        <b-button v-b-modal.modal-1>FTP 가져오기</b-button>
        <b-modal id="modal-1" title="BootstrapVue" hide-header hide-footer>
            <div class="modal-header">
                <h5 class="modal-title" id="notification">FTP 정보</h5>
            </div>
            <div class="modal-body" v-show="body">
                <div class="row">
                    <div class="col-lg-10">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="Host">Host<small class="text-danger ml-1">* 필수</small></label>
                                    <input type="text" class="form-control form-control-sm" id="Host" name="Host" placeholder="Host" value="" ref="Host" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="User ID">User ID<small class="text-danger ml-1">* 필수</small></label>
                                    <input type="text" class="form-control form-control-sm" id="UserID" name="UserID" placeholder="User ID" value="" ref="UserID" >
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="PassWord">PassWord<small class="text-danger ml-1">* 필수</small></label>
                                    <input type="text" class="form-control form-control-sm make-phone" id="PassWord" name="PassWord" placeholder="PassWord" value="" ref="PassWord" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-body" v-show="body2" >
                <div class="row">
                    <div class="col-lg-10">
                        <div class="row">
                            <div class="col-lg-12">
                                <table class="table table-striped table-bordered">
                                    <thead>
                                        <tr style="border: 1px solid green">
                                            <td>분류</td><td>선택</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-show="back">
                                            <td>Back</td>
                                           <td><a href="#" ref="back" @click="fn_getFtpBackPathInfo">..</a></td>
                                        </tr>
                                        <tr :key="idx" v-for="(item, idx) in list_data.dir" style="border:1px solid green">
                                            <td>Folder</td>
                                            <td><a href="#" ref="path" @click="fn_getFtpPathInfo(idx)">{{item}}</a></td>
                                        </tr>
                                        <tr :key="idx" v-for="(item, idx) in list_data.image" style="border:1px solid green">
                                            <td>Image</td>
                                            <td><a href="#" ref="image" @click="fn_image_choice">{{item}}</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer" v-show="footer" >
                <button class="btn btn-light" @click="$bvModal.hide('modal-1')">취소</button>
                <button class="btn btn-primary" @click="fn_getFtpInfo">연결하기</button>
            </div>
        </b-modal>

    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            host : "", 
            id   : "", 
            pw   : "",
            path : "",
            body : true,
            body2 : false,
            footer : true,
            back : false,

            list_data : ""
        }
    },
    methods: {
        fn_getFtpInfo : function() {
            axios({
                method: 'GET',
                url : 'https://strawberry.handle.im/v1/ftp',
                params : {
                    host : this.$refs.Host.value,
                    id   : this.$refs.UserID.value,
                    pw   : this.$refs.PassWord.value,
                }
            }).then((response) => {
                if(response.data.code == 403){
                    alert('FTP정보가 올바르지않습니다.');
                }else{
                    this.host = this.$refs.Host.value;
                    this.id = this.$refs.UserID.value;
                    this.pw = this.$refs.PassWord.value;

                    // list data 넣기
                    this.list_data = response.data.data;

                    // modal show & hide
                    this.body = false;
                    this.body2 = true;
                    this.footer = false;
                    
                }
            }).catch((ex)=> {
                console.log("ERR!!!!! : ", ex)
            })
        },
        fn_getFtpPathInfo : function(idx) {
            // 폴더를 처음 선택 아닐시
            if( this.path !== "" ){
                this.path =  this.path + '/' + this.$refs.path[idx].innerText;
            }else{
                this.path = this.$refs.path[idx].innerText;
            }

            axios({
                method: 'GET',
                url : 'https://strawberry.handle.im/v1/ftp',
                params : {
                    host : this.host,
                    id   : this.id,
                    pw   : this.pw,
                    path : this.path
                }
            }).then((response) => {
                if(response.data.code == 403){
                    alert('FTP정보가 올바르지않습니다.');
                }else{
                    
                    this.list_data = response.data.data;

                    // 이전폴더로 가기 링크 show
                    this.back = true;
                }
            }).catch((ex)=> {
                console.log("ERR!!!!! : ", ex)
            })
        },
        fn_getFtpBackPathInfo : function() {
            // 저장된 path 재설정
            if ( this.path !== '' || this.path !== '/' ) {
                let tags = this.path.split('/');
                let string = '';
                for (let i = 0; i < tags.length-1; i++) {
                    if( i > 0 ) string += '/';
                    string += tags[i];
                }
                this.path = string;
            }

            axios({
                method: 'GET',
                url : 'https://strawberry.handle.im/v1/ftp',
                params : {
                    host : this.host,
                    id   : this.id,
                    pw   : this.pw,
                    path : this.path
                }
            }).then((response) => {
                if(response.data.code == 403){
                    alert('FTP정보가 올바르지않습니다.');
                }else{
                    this.list_data = response.data.data;

                    // 최상위 폴더일시 이전링크 hide
                    if ( this.path == '') this.back = false;
                }
            }).catch((ex)=> {
                console.log("ERR!!!!! : ", ex)
            })
        },
        fn_image_choice : function() {
            alert(this.$refs.image.innerText)
        },
    }
}
</script>