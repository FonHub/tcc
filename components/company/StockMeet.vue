<template>
  <div>
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
        <div class="__box" >
            <div class="_calendar" >
              <button
              type="button"
              class="btn btn-default"
              data-toggle="modal"
              data-target="#largeModalStockLot"
              style="margin-top: 10px; padding: 0;"
            >
                <i class="material-icons">perm_contact_calendar</i>
                <span class="function-name">Meeting</span>
            </button>
            </div>
        </div>
      </div>
      <!-- form -->
      <form class="form-horizontal box__director">
          <div class="row clearfix">
              <div class="col-lg-3 col-md-3">
                  <b>Meeting Date</b>
                 <div class="input-group">
                 <div class="form-line">
                  <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ." />
                </div>
              </div>
              </div>
          </div>
        <div class="row clearfix">
          <div class="col-lg-2 col-md-2">
            
            <div class="w-100px">
              <b>Meeting Type</b>
              <div class="input-group">
                <div class="form-line">
                  <select class="form-control show-tick">
                    <optgroup label="กลุ่ม">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
            <div class="w-100px">
              <b>Meeting No.</b>
              <div class="input-group">
                <div class="form-line">
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
            </div>
            
          </div>
          <div class="col-lg-5 col-md-5">
            <div>
              <b>กรรมการ 1</b>
              <div class="input-group">
                <div class="form-line">
                  <select class="form-control show-tick">
                    <optgroup label="กลุ่ม">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-5">
            <div>
              <b>กรรมการ 2 </b>
              <div class="input-group">
                <div class="form-line">
                  <select class="form-control show-tick">
                    <optgroup label="กลุ่ม">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="row clearfix">
          <div class="col-lg-1 col-md-1">
            <b>Status</b>
            <div class="input-group">
              <input
                name="group5"
                type="radio"
                id="radio_30"
                class="with-gap radio-col-red"
                checked=""
              />
              <label for="radio_30">Active</label>
            </div>
          </div>
          <div class="col-lg-1 col-md-1">
              <div class="w-100px">
              <b>Running</b>
              <div class="input-group">
                <div class="form-line disabled">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="0000"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2">
            <b>% การเรียกชำระ  </b>
            <div class="input-group">
              <div class="form-line">
                <input
                  type="text"
                  class="form-control"
                  placeholder="00%"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <b>ยอดชำระ <small> (%เรียกชำระXRegisterAmount)</small></b>
            <div class="input-group">
              <div class="form-line">
                <input
                  type="text"
                  class="form-control"
                  placeholder="000000.00 "
                />
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2">
            <b>Number Of Share </b>
            <div class="input-group">
              <div class="form-line">
                <input type="text" class="form-control" placeholder="000000.00" />
              </div>
            </div>
          </div>
          <div class="col-lg-1 col-md-1">
            <b>Par Value </b>
            <div class="input-group">
              <div class="form-line">
                <input type="text" class="form-control" placeholder="00" />
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2">
            <b>Register Amount</b>
            <div class="input-group">
              <div class="form-line">
                <input type="text" class="form-control" placeholder="00" />
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

    <!-- Modal Large Size -->
    <div class="modal fade" id="largeModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg box__director" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="largeModalLabel">Create Director</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal box__director">
              <div class="row clearfix">
                <div class="col-lg-3 col-md-3">
                  <div class="w-100px">
                    <b>หมายเลข</b>
                    <div class="input-group">
                      <div class="form-line disabled">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="0000"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div class="w-100px">
                    <b>กลุ่ม</b>
                    <div class="input-group">
                      <div class="form-line">
                        <select class="form-control show-tick">
                          <optgroup label="กลุ่ม">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="w-100px">
                    <b>Running</b>
                    <div class="input-group">
                      <div class="form-line">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div>
                    <b>คำนำหน้าชื่อ</b>
                    <div class="input-group">
                      <div class="form-line">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <div>
                    <b>ชื่อ </b>
                    <div class="input-group">
                      <div class="form-line">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <div>
                    <b>นามสกุล </b>
                    <div class="input-group">
                      <div class="form-line">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row clearfix">
                <div class="col-lg-1 col-md-1">
                  <b>Status</b>
                  <div class="input-group">
                    <div class="switch">
                      <label
                        >Active<input type="checkbox" checked /><span
                          class="lever"
                        ></span
                      ></label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <b>วันที่เป็นกรรมการ</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="วัน-เดือน-ปี พ.ศ. "
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <b>วันที่สิ้นสุด</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="วัน-เดือน-ปี พ.ศ. "
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <b>Nationality</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="สัญชาติ"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <b>Occupation</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="อาชีพ"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row clearfix">
                <div class="col-lg-6 col-md-6">
                  <b>เลขบัตรประชาชน หรือ หมายเลขพาสปอร์ต</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="000-0000-0-0-00"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <b>บริษัท</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="ชื่อบริษัท "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row clearfix">
                <div class="col-lg-12 col-md-12">
                  <b>ที่อยู่ (1)</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row clearfix">
                <div class="col-lg-12 col-md-12">
                  <b>ที่อยู่ (2)</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row clearfix">
                <div class="col-lg-3 col-md-3">
                  <b>รหัสไปรษณีย์</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="00000"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <b>จังหวัด</b>
                  <div class="input-group">
                    <div class="form-line">
                      <select class="form-control show-tick">
                        <optgroup label="จังหวัด">
                          <option>กรุงเทพมหานคร</option>
                          <option>นนทบุรี</option>
                          <option>นครราชสีมา</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <b>อำเภอ</b>
                  <div class="input-group">
                    <div class="form-line">
                      <select class="form-control show-tick">
                        <optgroup label="อำเภอ">
                          <option>กงไกรลาศ</option>
                          <option>กบินทร์บุรี</option>
                          <option>กระทุ่มแบน</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <b>ตำบล</b>
                  <div class="input-group">
                    <div class="form-line">
                      <select class="form-control show-tick">
                        <optgroup label="ตำบล">
                          <option>แคราย</option>
                          <option>บางกระบือ</option>
                          <option>อัมพวา</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row clearfix">
                <div class="col-lg-6 col-md-6">
                  <b>เบอร์โทรศัพท์</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <b>เบอร์โทรสาร</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row clearfix">
                <div class="col-lg-6 col-md-6">
                  <b>แนบเอกสาร</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
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
            <button
              type="button"
              class="btn btn-link waves-effect"
              data-dismiss="modal"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>