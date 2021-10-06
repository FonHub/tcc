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
        <div class="__box">
            <div class="_copy" style="margin-top: 10px; " >
                <i class="material-icons">content_copy</i>
                <span class="function-name">Copy</span>
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
    <!-- table -->
    <div class="body table-responsive stock_list">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th  style="width:120px;">Company</th>
                      <th>ทะเบียน</th>
                      <th>Print <br> Running</th>
                      <th>จองหุ้น <br> /รับโอน</th>
                      <th>Pay Type</th>
                      <th>Start No.</th>
                      <th>End No.</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>ใบหุ้นลงวันที่</th>
                      <th>วันลงทะเบียน</th>
                      <th>ใบหุ้นเลขที่</th>
                      <th>วันประชุม</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>บริษัท พัฒนา ธุรกิจ 1 </td>
                      <td>1</td>
                      <td>1</td>
                      <td>จองหุ้น</td>
                      <td>1</td>
                      <td>1</td>
                      <td>2500</td>
                      <td>00.00</td>
                      <td>9</td>
                      <td>06 ก.พ. 2518</td>
                      <td>24 ธ.ค. 2514</td>
                      <td>1</td>
                      <td>19 เม.ย. 2512</td>
                      <td>
                        <div class="input-group">
                            <input type="checkbox" id="md_checkbox_21" class="filled-in chk-col-red _red-vitality" checked />
                            <label for="md_checkbox_21"></label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>บริษัท กลุ่มทีซีซี ธุรกิจ  </td>
                      <td>1</td>
                      <td>1</td>
                      <td>จองหุ้น</td>
                      <td>1</td>
                      <td>2501</td>
                      <td>9998</td>
                      <td>00.00</td>
                      <td>9</td>
                      <td>06 ก.พ. 2518</td>
                      <td>24 ธ.ค. 2514</td>
                      <td>1</td>
                      <td>19 เม.ย. 2512</td>
                      <td>
                        <div class="input-group">
                            <input type="checkbox" id="md_checkbox_21" class="filled-in chk-col-red _red-vitality" checked />
                            <label for="md_checkbox_21"></label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
    </div>

    <!-- Modal Large Size -->
    <div class="modal fade" id="largeModalStockLot" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg box__director" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="largeModalLabel">Create Meeting Date</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal box__director">
              <div class="row clearfix">
                <div class="col-lg-3 col-md-3"> <b>วันที่ประชุม</b>
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
                <div class="col-lg-6 col-md-6"> <b>ประเภทการประชุม</b>
                  <div class="input-group">
                    <div class="form-line">
                        <select class="form-control show-tick">
                            <optgroup label="เลือกประเภทการประชุม">
                                <option>จองหุ้น</option>
                                <option>รับโอน</option>
                            </optgroup>
                        </select>
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