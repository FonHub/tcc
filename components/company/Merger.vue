<template>
  <div >
    <!-- bar control-->
    <div class="row clearfix">
        <div class="col-sm-12 col-md-12 col-lg-12 btn_control">
            <div class="__save"><button type="button" class="btn btn-raised  waves-effect"> <i class="material-icons">save</i> </button></div>
            <div class="__new"><button type="button" class="btn btn-raised  waves-effect"> <i class="material-icons">insert_drive_file</i> </button></div>
            <div class="__close"><button type="button" class="btn btn-raised  waves-effect"> <i class="material-icons">clear</i> </button></div>
            <div class="__exit"><button type="button" class="btn btn-raised  waves-effect"> <i class="material-icons">exit_to_app</i> </button></div>
        </div>
    </div>
    <!-- bar function-->
    <div class="btn_function">
        <div class="__box">
            <div class="_update">
                <i class="material-icons">sync</i>
                <span class="function-name">Update</span>
            </div>
        </div>
        <div class="__box">
            <div class="_add">
                <i class="material-icons">add</i>
                <span class="function-name">Add</span>
            </div>
        </div>
        <div class="__box">
            <div class="_remove">
                <i class="material-icons">remove</i>
                <span class="function-name">Remove</span>
            </div>
        </div>
    </div>
    <!-- form -->
    <form class="form-horizontal __companymerger">
        <div class="block-header">
            <h2>ข้อมูลบริษัทควบ</h2>
        </div>
        <div class="row clearfix">
            <div class="col-lg-6 col-md-6"> <b>วันที่</b>
                <div class="input-group">
                    <div class="form-line">
                        <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ.">
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6"> <b>เลขทะเบียนนิติบุคคคล</b>
                <div class="input-group">
                    <div class="form-line">
                        <input type="text" class="form-control" placeholder="000-2223-25">
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-6 col-md-6"> <b>ชื่อบริษัท</b>
                <div class="input-group">
                    <div class="form-line">
                        <select class="form-control show-tick">
                            <optgroup label="เลือกบริษัท">
                                <option>บริษัทเทพมหานคร</option>
                                <option>บริษัทบุรีการช่อง</option>
                                <option>บริษัทนคร ฟิล์ม</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6"> <b>กรณีต้องการใช้ข้อมูลบริษัทนี้</b>
                <div class="row clearfix">
                    <div class="col-lg-3 col-md-3">
                        <div class="input-group">
                            <input type="checkbox" id="md_checkbox_21" class="filled-in chk-col-red _red-vitality" checked />
                            <label for="md_checkbox_21">ชื่อบริษัท</label>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <input type="checkbox" id="md_checkbox_22" class="filled-in chk-col-red" checked />
                        <label for="md_checkbox_22">ที่อยู่บริษัท</label>
                    </div>
                </div>
            </div>
        </div>


        <div class="btn-control">
            <a href="#save"></a><button type="button" class="btn btn-raised btn-default __redvitality waves-effect"> บันทึก </button>
            <a href="#cancel"></a><button type="button" class="btn  btn-raised bg-grey waves-effect"> ยกเลิก </button>
        </div>
    </form>
</div>
</template>