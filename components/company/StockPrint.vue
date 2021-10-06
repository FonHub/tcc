<template>
  <div>
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
    <!-- bar function-->
    <div class="btn_function">
      
      <div class="__box">
        <div class="_print" style="margin-top: 15px">
          <i class="material-icons">print</i>
          <span class="function-name">Print</span>
        </div>
      </div>
    </div>
     <!-- form -->
      <form class="form-horizontal box__director">
          <div class="row clearfix">
              <div class="col-lg-3 col-md-3">
              <b>รูปแบบการพิมพ์</b>
              <div class="input-group">
                <div class="form-line">
                  <select class="form-control show-tick">
                    <optgroup label="รูปแบบที่">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </optgroup>
                  </select>
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