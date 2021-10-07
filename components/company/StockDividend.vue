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
    <form class="form-horizontal _account">
        
        <div class="row clearfix">
            
            <div class="col-lg-2 col-md-2">
                <div><b>Securities Code  </b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="0000">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div><b>บริษัท </b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="ชื่อนิติบุคคล">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div><b>ทุนจดทะเบียน (บาท) </b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="0000000">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
           <div class="col-lg-4 col-md-4">
                <div><b>Quantity</b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="0000000">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div><b>Rate</b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="000001 - 500000">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div><b>Dividend Amt</b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="100000000">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-4 col-md-4">
                <div><b>Announced Date</b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ. ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-4 col-md-4">
                <div><b>XD Date</b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ. ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-4 col-md-4">
                <div><b>Settlement Date</b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ. ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-4 col-md-4">
                <div><b>Payment Date</b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ. ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-4 col-md-4">
                <div><b>Payment Settlement  Date</b>
                    <div class="input-group">
                        <div class="form-line">
                            <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ. ">
                        </div>
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