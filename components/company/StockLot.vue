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
    <!-- table -->
    <div class="body table-responsive stock_list">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th style="width: 60px"></th>
                      <th>Company</th>
                      <th>Print Running</th>
                      <th>จองหุ้น/รับโอน</th>
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
                      <td>0000</td>
                      <td>บริษัท พัฒนา ธุรกิจ 1 </td>
                      <td>1</td>
                      <td>1</td>
                      <td>จองหุ้น</td>
                      <td>1</td>
                      <td>1</td>
                      <td>2500</td>
                      <td>00.00</td>
                      <td>99900</td>
                      <td>06 ก.พ. 2518</td>
                      <td>24 ธ.ค. 2514</td>
                      <td>1</td>
                      <td>19 เม.ย. 2519</td>
                      <td>
                        <input type="checkbox" id="md_checkbox_21" class="filled-in chk-col-red _red-vitality" checked />
                      </td>
                    </tr>
                    <tr>
                      <td>0000</td>
                      <td>บริษัท พัฒนา ธุรกิจ 2 </td>
                      <td>1</td>
                      <td>1</td>
                      <td>จองหุ้น</td>
                      <td>1</td>
                      <td>2501</td>
                      <td>9998</td>
                      <td>00.00</td>
                      <td>99900</td>
                      <td>06 ก.พ. 2518</td>
                      <td>24 ธ.ค. 2514</td>
                      <td>1</td>
                      <td>19 เม.ย. 2519</td>
                      <td>
                        <input type="checkbox" id="md_checkbox_21" class="filled-in chk-col-red _red-vitality" checked />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
    
</div>
</template>