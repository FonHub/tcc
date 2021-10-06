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
        <div class="_update">
          <i class="material-icons">sync</i>
          <span class="function-name">Update</span>
        </div>
      </div>

      <div class="__box">
        <div class="_copy" style="margin-top: 10px">
          <i class="material-icons">content_copy</i>
          <span class="function-name">Copy</span>
        </div>
      </div>
      <div class="__box">
        <div class="_Sell">
          <button
            type="button"
            class="btn btn-default"
            data-toggle="modal"
            data-target="#largeModalStockNo"
            style="margin-top: 10px"
          >
            <i class="material-icons">trending_flat</i>
            <span class="function-name">Sell</span>
          </button>
        </div>
      </div>
      <div class="__box">
        <div class="_print" style="margin-top: 15px">
          <i class="material-icons">print</i>
          <span class="function-name">Print</span>
        </div>
      </div>
    </div>
    <!-- table -->
    <div class="body table-responsive stock_list">
      <table class="table table-hover">
        <thead>
          <tr>
            <th style="width: 120px">Company</th>
            <th>ทะเบียน</th>
            <th>
              Print <br />
              Running
            </th>
            <th>
              จองหุ้น <br />
              /รับโอน
            </th>
            <th>Pay Type</th>
            <th>Start No.</th>
            <th>End No.</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>ใบหุ้นลงวันที่</th>
            <th>วันลงทะเบียน</th>
            <th>วันประชุม</th>
            <th>วันขาดประชุม</th>
            <th>ใบหุ้นเลขที่</th>
            <th>Sell To</th>
            <th>Sell <br /> Start No.</th>
            <th>Sell <br /> End No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>บริษัท พัฒนา ธุรกิจ 1</td>
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
            <td>19 เม.ย. 2512</td>
            <td>19 เม.ย. 2512</td>
            <td>3</td>
            <td>บริษัทสอง</td>
            <td>1000</td>
            <td>2999</td>
            <td>
              <div class="input-group">
                <input
                  type="checkbox"
                  id="md_checkbox_21"
                  class="filled-in chk-col-red _red-vitality"
                  checked
                />
                <label for="md_checkbox_21"></label>
              </div>
            </td>
          </tr>
          <tr>
            <td>บริษัท พัฒนา ธุรกิจ 1</td>
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
            <td>19 เม.ย. 2512</td>
            <td>19 เม.ย. 2512</td>
            <td>3</td>
            <td>บริษัทสอง</td>
            <td>1000</td>
            <td>2999</td>
            <td>
              <div class="input-group">
                <input
                  type="checkbox"
                  id="md_checkbox_21"
                  class="filled-in chk-col-red _red-vitality"
                  checked
                />
                <label for="md_checkbox_21"></label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Large Size -->
    <div class="modal fade" id="largeModalStockNo" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg box__director" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="largeModalLabel">
              Create Sell
            </h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal box__director">
              <div class="btn_function">
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
              <div class="row clearfix">
                  <div class="col-lg-2 col-md-2">
                  <b>ใบหุ้นเลขที่</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="0000 "
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <b>ใบหุ้นลงวันที่</b>
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
              </div> <!-- row -->
              <div class="row clearfix">
                  <div class="col-lg-4 col-md-4">
                  <b>Sell To</b>
                  <div class="input-group">
                    <div class="form-line">
                      <select class="form-control show-tick">
                          <optgroup label="กรุณาเลือก">
                              <option> บริษัท 1</option>
                              <option> บุคคล 1</option>
                            </optgroup>
                       </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <b>Sell Start No.</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="0001"
                      />
                    </div>
                  </div>
                </div>  
                <div class="col-lg-4 col-md-4">
                  <b>Sell End No.</b>
                  <div class="input-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="1000"
                      />
                    </div>
                  </div>
                </div>               
              </div> <!-- row -->
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