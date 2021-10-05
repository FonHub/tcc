<template>
  <div >
    <!-- bar control-->
    <div class="row clearfix">
      <div class="col-sm-12 col-md-12 col-lg-12 btn_control">
        <div class="__save">
          <button type="button" class="btn btn-raised waves-effect">
            <i class="material-icons">save</i>
          </button>
        </div>
        <div class="__new">
          <button type="button" class="btn btn-raised waves-effect">
            <i class="material-icons">insert_drive_file</i>
          </button>
        </div>
        <div class="__close">
          <button type="button" class="btn btn-raised waves-effect">
            <i class="material-icons">clear</i>
          </button>
        </div>
        <div class="__exit">
          <button type="button" class="btn btn-raised waves-effect">
            <i class="material-icons">exit_to_app</i>
          </button>
        </div>
      </div>
    </div>
    <!-- form -->
    <form class="form-horizontal _AddHistory">
      <div class="row clearfix">
        <div class="col-lg-3 col-md-3">
          <div>
            <b>การเปลี่ยนแปลงครั้งที่</b>
            <div class="input-group">
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <b>วันที่เริ่มต้น</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5">
          <b>วันที่สิ้นสุด</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12">
          <b>ที่อยู่ภาษาไทย (1)</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12">
          <b>ที่อยู่ภาษาไทย (2)</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12">
          <b>ที่อยู่ภาษาอังกฤษ (1)</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12">
          <b>ที่อยู่ภาษาอังกฤษ (2)</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-lg-3 col-md-3">
          <b>รหัสไปรษณีย์</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <b>จังหวัด</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <b>อำเภอ</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <b>ตำบล</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-lg-6 col-md-6">
          <b>เบอร์โทรศัพท์</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <b>เบอร์โทรสาร</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-lg-6 col-md-6">
          <b>แนบเอกสาร</b>
          <div class="input-group">
            <div>
              <input
                type="text"
                class="form-control disabled"
                placeholder="disabled"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="btn-control">
        <a href="#save"></a
        ><button
          type="button"
          class="btn btn-raised btn-default __redvitality waves-effect"
        >
          บันทึก
        </button>
        <a href="#cancel"></a
        ><button type="button" class="btn btn-raised bg-grey waves-effect">
          ยกเลิก
        </button>
      </div>
    </form>
  </div>
</template>