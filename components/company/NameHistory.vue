<template>
    <div>
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
                <button type="button" class="btn btn-default" data-toggle="modal" data-target="#syncNamecompany">
                    <i class="material-icons">add</i>
                    <span class="function-name">Add</span>
                </button>
            </div>
        </div>
    </div>
    <!-- form -->
    <form class="form-horizontal _namehistory">
        <div class="row clearfix">
            <div class="col-lg-2 col-md-2">
                <div class="w-100px"><b>หมายเลขครั้ง</b>
                    <div class="input-group">
                        <div class="form-line ">
                            <input type="text" class="form-control disabled" placeholder="Disabled" disabled>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-5"> <b>วันที่เริ่มต้น</b>
                <div class="input-group">
                    <div class="form-line ">
                        <input type="text" class="form-control disabled" placeholder="Disabled" disabled>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-5"> <b>วันที่สิ้นสุด</b>
                <div class="input-group">
                    <div class="form-line ">
                        <input type="text" class="form-control disabled" placeholder="Disabled" disabled>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-6 col-md-6"> <b>ชื่อเดิมภาษาไทย</b>
                <div class="input-group">
                    <div class="form-line ">
                        <input type="text" class="form-control disabled" placeholder="Disabled" disabled>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6"> <b>ชื่อเดิมภาษาอังกฤษ</b>
                <div class="input-group">
                    <div class="form-line ">
                        <input type="text" class="form-control disabled" placeholder="Disabled" disabled>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-6 col-md-6"> <b>เอกสารแนบ</b>
                <div class="input-group ">
                    <div class="form-line">
                        <input type="text" class="form-control disabled" placeholder="Disabled" disabled>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6"> <b>หมายเหตุ</b>
                <div class="input-group">
                    <div class="form-line ">
                        <input type="text" class="form-control disabled" placeholder="Disabled" disabled>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

<!-- Modal Large Size -->
<div class="modal fade" id="syncNamecompany" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg box__director" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="syncNamecompany">เปลี่ยนแปลงชื่อบริษัท</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal _namehistory">
                    <div class="row clearfix">
                        <div class="col-lg-2 col-md-2">
                            <div class="w-100px"><b>หมายเลขครั้ง</b>
                                <div class="input-group">
                                    <div class="form-line">
                                        <input type="text" class="form-control disabled" placeholder="1" disabled>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5"> <b>วันที่เริ่มต้น</b>
                            <div class="input-group">
                                <div class="form-line">
                                    <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ. ">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5"> <b>วันที่สิ้นสุด</b>
                            <div class="input-group">
                                <div class="form-line">
                                    <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ. ">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-lg-6 col-md-6"> <b>ชื่อเดิมภาษาไทย</b>
                            <div class="input-group">
                                <div class="form-line">
                                    <input type="text" class="form-control" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6"> <b>ชื่อเดิมภาษาอังกฤษ</b>
                            <div class="input-group">
                                <div class="form-line">
                                    <input type="text" class="form-control" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-lg-6 col-md-6"> <b>เอกสารแนบ</b>
                            <div class="input-group">
                                <div class="form-line">
                                    <input type="text" class="form-control" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6"> <b>หมายเหตุ</b>
                            <div class="input-group">
                                <div class="form-line">
                                    <input type="text" class="form-control" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a href="#save"></a><button type="button" class="btn btn-raised btn-default __redvitality waves-effect"> บันทึก </button>
                <a href="#cancel"></a><button type="button" class="btn  btn-raised bg-grey waves-effect"> ยกเลิก </button>
                <button type="button" class="btn btn-link waves-effect" data-dismiss="modal">ปิด</button>
            </div>
        </div>
    </div>
</div>
    </div>
</template>