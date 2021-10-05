<template>
  <div>
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
    <form class="form-horizontal __docLocation">
        <div class="row clearfix">
            <div class="col-lg-4 col-md-4"> <b>ประเภทเอกสารที่จัดเก็บ</b>
                <div class="input-group">
                    <div class="form-line">
                        <input type="text" class="form-control" placeholder="สัญญาซื้อขายหุ้น">
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2"> <b>เลขลำดับเอกสาร</b>
                <div class="input-group">
                    <div class="form-line">
                        <input type="text" class="form-control" placeholder="000">
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-4 col-md-4"> <b>สถานที่เก็บเอกสาร</b>
                <div class="input-group">
                    <div class="form-line">
                        <select class="form-control show-tick">
                            <optgroup label="กรุณาเลือก">
                                <option>อาคารสุรวงศ์</option>
                                <option>ห้อง A</option>
                                <option>ห้อง B</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4"> <b>หมายเลขตู้เอกสาร</b>
                <div class="input-group">
                    <div class="form-line">
                        <select class="form-control show-tick">
                            <optgroup label="กรุณาเลือก">
                                <option>A01</option>
                                <option>B02</option>
                                <option>C02</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4"> <b>เลขลำดับเอกสาร</b>
                <div class="input-group">
                    <div class="form-line">
                        <input type="text" class="form-control" placeholder="000">
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12"> <b>หมายเหตุ</b>
                <div class="input-group">
                    <div class="form-line">
                        <input type="text" class="form-control" placeholder="">
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