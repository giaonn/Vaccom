(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-773424bd"],{4219:function(t,a,n){"use strict";n("9825")},9825:function(t,a,n){},d2df:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",{staticClass:"mt-3",style:"xs"===t.breakpointName||"sm"===t.breakpointName?"padding-top: 75px":"",attrs:{id:"createEWarranty",fluid:"",tag:"section"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"px-0 py-0",attrs:{cols:"12"}},[n("base-material-card",{staticClass:"px-5 py-3",staticStyle:{"margin-top":"20px"},attrs:{icon:"mdi-clipboard-text",title:"0"===String(t.uid)?"ĐĂNG KÝ CẤP GIẤY ĐI ĐƯỜNG":"CẬP NHẬT THÔNG TIN NGƯỜI ĐĂNG KÝ"}},[n("v-btn",{staticClass:"mx-0",staticStyle:{position:"absolute",right:"20px",top:"15px"},attrs:{id:"xemdanhsach",dark:"",color:"#0072bc"},on:{click:function(a){return a.stopPropagation(),t.showDanhSach(a)}}},[n("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v(" mdi-format-list-bulleted ")]),t._v(" Danh sách đăng ký ")],1),n("v-form",{ref:"formDangKy",attrs:{"lazy-validation":"",id:"formDangKy"},model:{value:t.validFormAdd,callback:function(a){t.validFormAdd=a},expression:"validFormAdd"}},[n("v-container",{staticClass:"py-0 mt-3"},[t.dataHistory&&"add"===t.typeAction?n("v-row",[n("v-btn",{staticClass:"mx-3 mt-3",attrs:{dark:"",small:"",color:"#0072bc"},on:{click:function(a){return a.stopPropagation(),t.copyContent(a)}}},[n("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v(" mdi-content-copy ")]),t._v(" Sử dụng thông tin trước ")],1)],1):t._e(),n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Họ và tên "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.required,required:"",outlined:"",placeholder:"Họ và tên",dense:"","hide-details":"auto",id:"hoten",autofocus:""},on:{blur:t.formatHoTen,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("cccd")}},model:{value:t.applicantInfo["HoVaTen"],callback:function(a){t.$set(t.applicantInfo,"HoVaTen",a)},expression:"applicantInfo['HoVaTen']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Số CMND/CCCD "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.giayToLoaiKhac?t.required:t.requiredCredit,required:"",outlined:"",placeholder:"Số CMND/CCCD",dense:"",id:"cccd","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("sdt")}},model:{value:t.applicantInfo["CMTCCCD"],callback:function(a){t.$set(t.applicantInfo,"CMTCCCD",a)},expression:"applicantInfo['CMTCCCD']"}}),n("v-checkbox",{staticClass:"mt-0 checkboxCmt",attrs:{label:"Giấy tờ loại khác"},model:{value:t.giayToLoaiKhac,callback:function(a){t.giayToLoaiKhac=a},expression:"giayToLoaiKhac"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Số điện thoại "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.requiredTelNo,required:"",outlined:"",placeholder:"Số điện thoại",dense:"","hide-details":"auto",id:"sdt"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("email")}},model:{value:t.applicantInfo["SoDienThoai"],callback:function(a){t.$set(t.applicantInfo,"SoDienThoai",a)},expression:"applicantInfo['SoDienThoai']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"mb-2"},[t._v("Email")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Email",dense:"",id:"email","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("noio")}},model:{value:t.applicantInfo["Email"],callback:function(a){t.$set(t.applicantInfo,"Email",a)},expression:"applicantInfo['Email']"}})],1)],1),n("v-row",[n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("div",{staticClass:"mb-2 font-weight-bold"},[t._v("Địa chỉ nơi ở/ cư trú "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.required,required:"",outlined:"",placeholder:"Số nhà, đường, tổ dân phố, khóm ấp, thôn bản…",dense:"",id:"noio","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("tinhthanh")}},model:{value:t.applicantInfo["NoiO_DiaChi"],callback:function(a){t.$set(t.applicantInfo,"NoiO_DiaChi",a)},expression:"applicantInfo['NoiO_DiaChi']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"mb-2"},[t._v("Tỉnh/ Thành phố "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listTinhThanh,"item-text":"tinhThanhTen","item-value":"tinhThanhMa",id:"tinhthanh",rules:t.required,required:"",outlined:"",placeholder:"Tỉnh/ Thành phố",dense:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("quanhuyen")}},model:{value:t.tinhThanh,callback:function(a){t.tinhThanh=a},expression:"tinhThanh"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"mb-2"},[t._v("Quận/ Huyện "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listQuanHuyen,"item-text":"quanHuyenTen","item-value":"quanHuyenMa",id:"quanhuyen",rules:t.required,required:"",outlined:"",placeholder:"Quận/ Huyện",dense:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("xaphuong")}},model:{value:t.quanHuyen,callback:function(a){t.quanHuyen=a},expression:"quanHuyen"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"mb-2"},[t._v("Phường/ Xã "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listXaPhuong,"item-text":"phuongXaTen","item-value":"phuongXaMa",id:"xaphuong",rules:t.required,required:"",outlined:"",placeholder:"Phường/ Xã",dense:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("noilamviec")}},model:{value:t.xaPhuong,callback:function(a){t.xaPhuong=a},expression:"xaPhuong"}})],1)],1),n("v-row",{staticClass:"pt-3"},[n("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[n("div",{staticClass:"mb-2 font-weight-bold"},[t._v("Địa chỉ nơi làm việc "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.required,required:"",outlined:"",placeholder:"",dense:"",id:"noilamviec","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("tinhthanhlamviec")}},model:{value:t.applicantInfo["NoiCT_DiaChi"],callback:function(a){t.$set(t.applicantInfo,"NoiCT_DiaChi",a)},expression:"applicantInfo['NoiCT_DiaChi']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"mb-2"},[t._v("Tỉnh/ Thành phố "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listTinhThanh,"item-text":"tinhThanhTen","item-value":"tinhThanhMa",id:"tinhthanhlamviec",rules:t.required,required:"",outlined:"",placeholder:"Tỉnh/ Thành phố",dense:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("quanhuyenlamviec")}},model:{value:t.tinhThanhLamViec,callback:function(a){t.tinhThanhLamViec=a},expression:"tinhThanhLamViec"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"mb-2"},[t._v("Quận/ Huyện "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listQuanHuyenLamViec,"item-text":"quanHuyenTen","item-value":"quanHuyenMa",id:"quanhuyenlamviec",rules:t.required,required:"",outlined:"",placeholder:"Quận/ Huyện",dense:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("xaphuonglamviec")}},model:{value:t.quanHuyenLamViec,callback:function(a){t.quanHuyenLamViec=a},expression:"quanHuyenLamViec"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"mb-2"},[t._v("Phường/ Xã "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listXaPhuongLamViec,"item-text":"phuongXaTen","item-value":"phuongXaMa",id:"xaphuonglamviec",rules:t.required,required:"",outlined:"",placeholder:"Phường/ Xã",dense:"","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("ngaycap")}},model:{value:t.xaPhuongLamViec,callback:function(a){t.xaPhuongLamViec=a},expression:"xaPhuongLamViec"}})],1)],1),n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Ngày cấp "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.required,required:"",placeholder:"dd/mm/yyyy, ddmmyyyy",dense:"","hide-details":"auto",outlined:"",id:"ngaycap"},on:{blur:t.formatBirthDate,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("thoihan")}},model:{value:t.applicantDateFormatted,callback:function(a){t.applicantDateFormatted=a},expression:"applicantDateFormatted"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-2"},[t._v("Ngày hết hạn "),n("span",{staticStyle:{color:"red"}},[t._v("(*)")])]),n("v-text-field",{attrs:{rules:t.required,required:"",placeholder:"dd/mm/yyyy, ddmmyyyy",dense:"","hide-details":"auto",outlined:"",id:"thoihan"},on:{blur:t.formatNgayTiem,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.nextFocus("ghichu")}},model:{value:t.ngayDuKienFormatted,callback:function(a){t.ngayDuKienFormatted=a},expression:"ngayDuKienFormatted"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[n("div",{staticClass:"mb-2"},[t._v("Ghi chú")]),n("v-textarea",{attrs:{outlined:"",placeholder:"",dense:"",rows:"3","hide-details":"auto",id:"ghichu"},model:{value:t.applicantInfo["GhiChu"],callback:function(a){t.$set(t.applicantInfo,"GhiChu",a)},expression:"applicantInfo['GhiChu']"}})],1)],1)],1)],1),n("v-row",{staticClass:"mt-5"},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},["0"===String(t.uid)?n("v-btn",{staticClass:"mr-4",attrs:{color:"red"},on:{click:t.huyDangKy}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),n("span",[t._v("HỦY")])],1):t._e(),"0"===String(t.uid)?n("v-btn",{staticClass:"mr-3",attrs:{color:"#0072bc",loading:t.processingAction,disabled:t.processingAction},on:{click:t.submitForm}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-content-save-outline ")]),n("span",[t._v("ĐĂNG KÝ")])],1):t._e(),"0"!==String(t.uid)?n("v-btn",{staticClass:"mr-3",attrs:{color:"#0072bc"},on:{click:t.submitForm}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-content-save-outline ")]),n("span",[t._v("CẬP NHẬT THÔNG TIN")])],1):t._e()],1)],1)],1)],1)],1)],1)},i=[],o=n("3835"),c=(n("498a"),n("8ba4"),n("a9e3"),n("7db0"),n("ac1f"),n("1276"),n("fb6a"),n("a15b"),n("99af"),n("4d90"),n("d3b7"),n("25f0"),n("1157")),r=n.n(c),u={name:"CreateEWarranty",props:["uid"],data:function(){return{loading:!1,validFormAdd:!0,tab:null,typeAction:"add",processingAction:!1,giayToLoaiKhac:!1,applicantInfo:{HoVaTen:"",CMTCCCD:"",SoDienThoai:"",Email:"",NoiCT_TenCoQuan:"",NoiCT_DiaChi:"",NoiCT_TinhThanh_Ma:"",NoiCT_TinhThanh_Ten:"",NoiCT_QuanHuyen_Ma:"",NoiCT_QuanHuyen_Ten:"",NoiCT_PhuongXa_Ma:"",NoiCT_PhuongXa_Ten:"",NoiO_DiaChi:"",NoiO_TinhThanh_Ma:"",NoiO_TinhThanh_Ten:"",NoiO_QuanHuyen_Ma:"",NoiO_QuanHuyen_Ten:"",NoiO_PhuongXa_Ma:"",NoiO_PhuongXa_Ten:"",LichLamViec:"",UyBanNhanDan_ID:"",NgayCap:"",ThoiHan:"",GhiChu:""},listGioiTinh:[{name:"Nam",value:0},{name:"Nữ",value:1},{name:"Không xác định",value:2}],listDoiTuong:[],listTinhThanh:[],tinhThanh:"01",tinhThanhLamViec:"01",listQuanHuyen:[],listQuanHuyenLamViec:[],quanHuyen:"004",quanHuyenLamViec:"004",listXaPhuong:[],listXaPhuongLamViec:[],xaPhuong:"",xaPhuongLamViec:"",listDiaBan:[],listCoSoYTe:[],coSoYTe:"",listQuocTich:[],listDanToc:[],menuApplicantIdDate:!1,menuDate:!1,applicantDate:null,applicantDateFormatted:null,birthDate:null,ngayDuKienFormatted:null,ngayDuKien:null,dataHistory:"",required:[function(t){return!!t||"Thông tin bắt buộc"}],requiredSex:[function(t){return!(!t&&0!=t)||"Thông tin bắt buộc"}],requiredCredit:[function(t){if(t&&9===t.length){var a=/^(([0-9]{9,9}))$/;return a.test(t)||"Số CMND gồm 9 hoặc 12 ký tự 0-9"}var n=/^(([0-9]{12,12}))$/;return n.test(t)||"Số CMND gồm 9 hoặc 12 ký tự 0-9"},function(t){return!(!t&&0!=t)||"Thông tin bắt buộc"}],requiredTelNo:[function(t){var a=/^0([1-9]{1}\d{8})$/;return!t||(a.test(t)||"Số điện thoại gồm 10 số")},function(t){return!!String(t).trim()||"Thông tin bắt buộc"}],telNo:function(t){var a=/^0([1-9]{1}\d{8})$/;return!t||(a.test(t)||"Số điện thoại gồm 10 số")},require:function(t){return!!String(t).trim()||"Thông tin bắt buộc"},requiredBirthDate:[function(t){return!!t||"Thông tin bắt buộc"}]}},watch:{$route:function(t,a){var n=this;t.query;n.getTinhThanh(),"0"===String(n.uid)?n.typeAction="add":(n.typeAction="update",n.bindDataUpdate())},tinhThanh:function(t){this.applicantInfo.NoiO_TinhThanh_Ma=t,this.getQuanHuyen(t)},quanHuyen:function(t){this.applicantInfo.NoiO_QuanHuyen_Ma=t,this.getXaPhuong(t)},xaPhuong:function(t){this.applicantInfo.NoiO_PhuongXa_Ma=t},tinhThanhLamViec:function(t){this.applicantInfo.NoiCT_TinhThanh_Ma=t,this.getQuanHuyen(t)},quanHuyenLamViec:function(t){this.applicantInfo.NoiCT_QuanHuyen_Ma=t,this.getXaPhuong(t)},xaPhuongLamViec:function(t){this.applicantInfo.NoiCT_PhuongXa_Ma=t},birthDate:function(t){this.applicantDateFormatted=this.formatDate(this.birthDate)},ngayDuKien:function(t){this.ngayDuKienFormatted=this.formatDate(this.ngayDuKien)},menuApplicantIdDate:function(t){var a=this;t&&this.$nextTick((function(){return a.$refs.picker.activePicker="YEAR"}))}},computed:{breakpointName:function(){return this.$store.getters.getBreakpointName},giaydiduongUpdate:function(){return this.$store.getters.getGiayDiDuongUpdate}},created:function(){var t=this;t.$store.commit("SET_INDEXTAB",1);var a=this.$store.getters.getIsSigned;if(a){try{var n=localStorage.getItem("giayDiDuong");t.dataHistory=n?JSON.parse(n):""}catch(e){}t.getTinhThanh(),"0"===String(t.uid)?t.typeAction="add":(t.typeAction="update",t.bindDataUpdate())}else t.$router.push({path:"/login"})},methods:{autoBind:function(){var t=this;console.log("add",r()("#nhomdoituong").val()),r()("#nhomdoituong").val()&&Number.isInteger(Number(r()("#nhomdoituong").val()))&&r()("#nhomdoituong").val().length<=2&&(t.applicantInfo["NhomDoiTuong"]=Number(r()("#nhomdoituong").val())-1),t.$refs.chondoituong.isMenuActive=!1},submitForm:function(){var t=this;if(!t.processingAction){t.processingAction=!0;t.checkTuoi();if(t.$refs.formDangKy.validate()){t.formatDataInput();var a={data:t.applicantInfo};if("add"===t.typeAction)try{t.dataHistory=t.applicantInfo?t.applicantInfo:"",localStorage.setItem("giayDiDuong",JSON.stringify(t.applicantInfo))}catch(n){}"add"===t.typeAction?t.$store.dispatch("createRegistration",a).then((function(a){t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Đăng ký thành công",color:"success"}),t.processingAction=!1,t.tinhThanh="01",t.quanHuyen="004",t.applicantInfo["DanToc_Ma"]="01",t.applicantInfo["QuocTich_Ma"]="VN",t.applicantInfo["HoVaTen"]="",t.applicantInfo["GioiTinh"]="",t.applicantDateFormatted="",t.applicantInfo["CMTCCCD"]="",t.applicantInfo["SoTheBHYT"]="",t.applicantInfo["SoDienThoai"]="",t.$refs.formDangKy.resetValidation(),r()("html, body").animate({scrollTop:r()("#xemdanhsach").offset().top},500,"linear"),r()("#hoten").focus()})).catch((function(){t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Đăng ký không thành công",color:"error"}),t.processingAction=!1})):(a["id"]=t.uid,t.$store.dispatch("updateRegistration",a).then((function(a){t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Cập nhật thành công",color:"success"}),t.processingAction=!1,t.$router.push("/pages/danh-sach-dang-ky-tiem-moi")})).catch((function(){t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Cập nhật không thành công",color:"error"}),t.processingAction=!1})))}else t.processingAction=!1,t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Vui lòng nhập đầy đủ các thông tin bắt buộc",color:"error"}),r()("html, body").animate({scrollTop:r()("#xemdanhsach").offset().top},500,"linear")}},copyContent:function(){var t=this;try{var a=localStorage.getItem("giayDiDuong");t.dataHistory=a?JSON.parse(a):""}catch(n){}t.applicantInfo["Email"]=t.dataHistory["Email"],t.applicantInfo["NhomDoiTuong"]=t.dataHistory["NhomDoiTuong"],t.applicantInfo["DiaChiNoiO"]=t.dataHistory["DiaChiNoiO"],t.tinhThanh=t.dataHistory["TinhThanh_Ma"],t.quanHuyen=t.dataHistory["QuanHuyen_Ma"],t.xaPhuong=t.dataHistory["PhuongXa_Ma"],t.applicantInfo["DiaBanCoSo_ID"]=t.dataHistory["DiaBanCoSo_ID"],t.coSoYTe=t.dataHistory["CoSoYTe_Ma"],t.applicantInfo["DanToc_Ma"]=t.dataHistory["DanToc_Ma"],t.applicantInfo["QuocTich_Ma"]=t.dataHistory["QuocTich_Ma"],t.applicantInfo["DonViCongTac"]=t.dataHistory["DonViCongTac"],t.applicantInfo["TienSuDiUng"]=t.dataHistory["TienSuDiUng"],t.applicantInfo["CacBenhLyDangMac"]=t.dataHistory["CacBenhLyDangMac"],t.applicantInfo["CacThuocDangDung"]=t.dataHistory["CacThuocDangDung"],t.ngayDuKienFormatted=t.dataHistory["NgayDangKi"],t.applicantInfo["GhiChu"]=t.dataHistory["GhiChu"]},huyDangKy:function(){var t=this;t.$refs.formDangKy.reset(),t.$refs.formDangKy.resetValidation()},bindDataUpdate:function(){var t=this;t.applicantInfo.CacBenhLyDangMac=t.giaydiduongUpdate.cacBenhLyDangMac,t.applicantInfo.CacThuocDangDung=t.giaydiduongUpdate.cacThuocDangDung,t.applicantInfo["CMTCCCD"]=t.giaydiduongUpdate.cmtcccd,t.coSoYTe=t.giaydiduongUpdate.coSoYTeMa,t.applicantInfo.DanToc_Ma=t.giaydiduongUpdate.danTocMa,t.applicantInfo.DiaBanCoSo_ID=t.giaydiduongUpdate.diaBanCoSoID,t.applicantInfo.DiaChiNoiO=t.giaydiduongUpdate.diaChiNoiO,t.applicantInfo.DonViCongTac=t.giaydiduongUpdate.donViCongTac,t.applicantInfo.Email=t.giaydiduongUpdate.email,t.applicantInfo.GhiChu=t.giaydiduongUpdate.ghiChu,t.applicantInfo.GioiTinh=t.giaydiduongUpdate.gioiTinh,t.applicantInfo.HoVaTen=t.giaydiduongUpdate.hoVaTen,t.applicantInfo.MaSoBHXH=t.giaydiduongUpdate.maSoBHXH,t.ngayDuKienFormatted=t.giaydiduongUpdate.ngayDangKi,t.applicantDateFormatted=t.giaydiduongUpdate.ngaySinh,t.applicantInfo.NgheNghiep=t.giaydiduongUpdate.ngheNghiep,t.applicantInfo.NhomDoiTuong=t.giaydiduongUpdate.nhomDoiTuong,t.tinhThanh=t.giaydiduongUpdate.tinhThanhMa,t.quanHuyen=t.giaydiduongUpdate.quanHuyenMa,t.xaPhuong=t.giaydiduongUpdate.phuongXaMa,t.applicantInfo.QuocTich_Ma=t.giaydiduongUpdate.quocTichMa,t.applicantInfo.SoDienThoai=t.giaydiduongUpdate.soDienThoai,t.applicantInfo.SoTheBHYT=t.giaydiduongUpdate.soTheBHYT,t.applicantInfo.TienSuDiUng=t.giaydiduongUpdate.tienSuDiUng,t.applicantInfo.TinhTrangDangKi=t.giaydiduongUpdate.tinhTrangDangKi},formatDataInput:function(){var t=this;try{if(t.tinhThanh){var a=t.listTinhThanh.find((function(a){return a.tinhThanhMa==t.tinhThanh}));t.applicantInfo.TinhThanh_Ma=t.tinhThanh,t.applicantInfo.TinhThanh_Ten=a?a["tinhThanhTen"]:""}if(t.quanHuyen){var n=t.listQuanHuyen.find((function(a){return a.quanHuyenMa==t.quanHuyen}));t.applicantInfo.QuanHuyen_Ma=t.quanHuyen,t.applicantInfo.QuanHuyen_Ten=n?n["quanHuyenTen"]:""}if(t.xaPhuong){var e=t.listXaPhuong.find((function(a){return a.phuongXaMa==t.xaPhuong}));t.applicantInfo.PhuongXa_Ma=t.xaPhuong,t.applicantInfo.PhuongXa_Ten=e?e["phuongXaTen"]:""}if(t.coSoYTe){var i=t.listCoSoYTe.find((function(a){return a.maCoSo==t.coSoYTe}));t.applicantInfo.CoSoYTe_Ma=t.coSoYTe,t.applicantInfo.CoSoYTe_Ten=i?i["tenCoSo"]:""}t.applicantInfo.NgaySinh=t.applicantDateFormatted,t.applicantInfo.NgayDangKi=t.ngayDuKienFormatted,console.log("applicantInfo",t.applicantInfo)}catch(o){t.processingAction=!1}},checkTuoi:function(){var t=this,a="",n="",e=String(t.applicantDateFormatted).trim().length,i=String(t.applicantDateFormatted).split("/"),o=(new Date).getFullYear();if(e&&4==e)n=Number(t.applicantDateFormatted),a=Number(o)-n;else if(e&&e>4&&3===i.length){var c=t.parseDate(t.applicantDateFormatted);a=Math.floor((new Date-new Date(c).getTime())/315576e5)}return a>=18},getTinhThanh:function(){var t=this,a={};t.$store.dispatch("getDanhMucTinhThanh",a).then((function(a){t.listTinhThanh=a||[],t.tinhThanh&&t.listTinhThanh.length&&t.getQuanHuyen(t.tinhThanh),t.tinhThanhLamViec&&t.listTinhThanh.length&&t.getQuanHuyen(t.tinhThanhLamViec,"noilamviec")})).catch((function(a){a&&a.response&&401==a.response.status&&t.$router.push({path:"/login"})}))},getQuanHuyen:function(t,a){var n=this;if(t){var e=n.listTinhThanh.find((function(a){return a.tinhThanhMa==t})),i={idParent:e["id"]};n.$store.dispatch("getDanhMucQuanHuyen",i).then((function(t){a?(n.listQuanHuyenLamViec=t||[],n.quanHuyenLamViec&&n.getXaPhuong(n.quanHuyenLamViec,"noilamviec")):(n.listQuanHuyen=t||[],n.quanHuyen&&n.getXaPhuong(n.quanHuyen))}))}},getXaPhuong:function(t,a){var n=this;if(t){var e=n.listQuanHuyen.find((function(a){return a.quanHuyenMa==t}));if(e){var i={idParent:e["id"]};n.$store.dispatch("getDanhMucXaPhuong",i).then((function(t){a?n.listXaPhuongLamViec=t||[]:n.listXaPhuong=t||[]}))}}},showDanhSach:function(){var t=this;t.$router.push({path:"/pages/danh-sach-dang-ky-tiem-moi"})},nextFocus:function(t){r()("#"+t).focus()},formatHoTen:function(){var t=this;if(t.applicantInfo.HoVaTen){for(var a=String(t.applicantInfo.HoVaTen).toLocaleLowerCase(),n=a.split(" "),e=0;e<n.length;e++)n[e]=n[e].charAt(0).toUpperCase()+n[e].slice(1);var i=n.join(" ");t.applicantInfo.HoVaTen=i}},convertDate:function(t){if(t){var a="";try{a=t.slice(6,8)+"/"+t.slice(4,6)+"/"+t.slice(0,4)}catch(n){}return a}return""},formatBirthDate:function(){var t=this,a=String(t.applicantDateFormatted).trim().length,n=String(t.applicantDateFormatted).split("/"),e=(new Date).getFullYear(),i=0;if(a&&4==a);else if(a&&a>4&&3===n.length&&n[2])t.applicantDateFormatted=t.translateDate(t.applicantDateFormatted);else if(a&&8===a){var o=String(t.applicantDateFormatted);t.applicantDateFormatted=o.slice(0,2)+"/"+o.slice(2,4)+"/"+o.slice(4,8)}else t.applicantDateFormatted="";if(t.applicantDateFormatted){if(4===a)i=e-Number(t.applicantDateFormatted);else{var c=t.parseDate(t.applicantDateFormatted);i=Math.floor((new Date-new Date(c).getTime())/315576e5)}i<18&&t.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Người đăng ký chưa đủ 18 tuổi",color:"error"})}},formatNgayTiem:function(){var t=this,a=String(t.ngayDuKienFormatted).trim().length,n=String(t.ngayDuKienFormatted).split("/");if(a&&a>4&&3===n.length&&n[2])t.ngayDuKienFormatted=t.translateDate(t.ngayDuKienFormatted);else if(a&&8===a){var e=String(t.ngayDuKienFormatted);t.ngayDuKienFormatted=e.slice(0,2)+"/"+e.slice(2,4)+"/"+e.slice(4,8)}else t.ngayDuKienFormatted=""},translateDate:function(t){if(!t)return null;var a=t.split("/"),n=Object(o["a"])(a,3),e=n[0],i=n[1],c=n[2];return"".concat(e.padStart(2,"0"),"/").concat(i.padStart(2,"0"),"/").concat(c)},formatDate:function(t){if(!t)return null;var a=t.split("-"),n=Object(o["a"])(a,3),e=n[0],i=n[1],c=n[2];return"".concat(c,"/").concat(i,"/").concat(e)},parseDate:function(t){if(!t)return null;console.log("date",t);var a=t.split("/"),n=Object(o["a"])(a,3),e=n[0],i=n[1],c=n[2];return console.log("date","".concat(c,"-").concat(i.padStart(2,"0"),"-").concat(e.padStart(2,"0"))),"".concat(c,"-").concat(i.padStart(2,"0"),"-").concat(e.padStart(2,"0"))},getMaxdate:function(){var t=new Date;return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0"))},getMindate:function(){var t=new Date;return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0"))}}},l=u,s=(n("4219"),n("2877")),h=n("6544"),d=n.n(h),p=n("c6a6"),g=n("8336"),y=n("ac7c"),m=n("62ad"),f=n("a523"),T=n("4bd4"),v=n("132d"),D=n("0fd9"),C=n("8654"),_=n("a844"),k=Object(s["a"])(l,e,i,!1,null,"366a23d2",null);a["default"]=k.exports;d()(k,{VAutocomplete:p["a"],VBtn:g["a"],VCheckbox:y["a"],VCol:m["a"],VContainer:f["a"],VForm:T["a"],VIcon:v["a"],VRow:D["a"],VTextField:C["a"],VTextarea:_["a"]})}}]);