<template>
<div>
    iv>
    <Topbar />
    <Leftsidebar />
    <Rightsidebar />
    <!-- Main Content -->
    <section class="content home">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2>Dashboard
                        <small class="text-muted">Welcome to TCC Application</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="../view/index.php"><i class="zmdi zmdi-home"></i> Dashboard</a></li>
                        <li class="breadcrumb-item active">ทะเบียนบริษัท</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <!-- search-->
            <section class="sec-search">
                <div class="row clearfix">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="card">
                            <div class="header">
                                <h2>ค้นหา</h2>
                            </div>
                            <div class="body">
                                <form class="form-horizontal __search">
                                    <div class="col-sm-12">
                                        <div class="input-group"> <span class="input-group-addon"> <i class="material-icons">search</i></span>
                                            <div class="form-line">
                                                <input type="text" class="form-control" placeholder="พิมพ์รหัสบริษัท/ผู้ถือหุ้น,ชื่อบริษัท/ผู้ถือหุ้นภาษาไทย,ชื่อบริษัท/ผู้ถือหุ้นภาษาอังกฤษ,ชื่อค้นหาบริษัท/ผู้ถือหุ้น,เลขทะเบียนนิติบุคคล">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                            <div class="row clearfix">
                                                <div class="col-sm-3 form-control-label">
                                                    <label for="email_address_2">จาก</label>
                                                </div>
                                                <div class="col-sm-9">
                                                    <div class="form-group">
                                                        <div class="form-line">
                                                            <input type="text" class="form-control date" placeholder="30/07/2017">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                            <div class="row clearfix">
                                                <div class="col-sm-3 form-control-label">
                                                    <label for="email_address_2">ถึง</label>
                                                </div>
                                                <div class="col-sm-9">
                                                    <div class="form-group">
                                                        <div class="form-line">
                                                            <input type="text" class="form-control date" placeholder="30/07/2021">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="form-line">
                                                <select class="form-control show-tick">
                                                    <optgroup label="กลุ่มธุรกิจหลัก">
                                                        <option>ไพรเวท คอมพานี</option>
                                                        <option>ไทยเบฟเวอเรจ</option>
                                                        <option>อาคเนย์</option>
                                                        <option>แอสเสท เวิรด์ คอร์ป</option>
                                                        <option>เบอร์ลี่ ยุคเกอร์</option>
                                                        <option>อื่นๆ </option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="form-line">
                                                <select class="form-control show-tick">
                                                    <optgroup label="ประเภทประกอบการ">
                                                        <option>กลุ่มบริษัทลงทุน</option>
                                                        <option>กลุ่มทีซีซี แลนด์ </option>
                                                        <option>กลุ่มบริษัทบุคคล</option>
                                                        <option>กลุ่มทีซีซี แอสเซ็ทส์</option>
                                                        <option>อื่นๆ </option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                            <div class="form-line">
                                                <select class="form-control show-tick">
                                                    <optgroup label="สถานะบริษัท">
                                                        <option>นายทะเบียน</option>
                                                        <option>ทะเบียนหุ้นกลาง</option>
                                                        <option>นายทะเบียน - หน่วยงานอื่น</option>
                                                        <option>ควบกิจการ</option>
                                                        <option>โอนกิจการ </option>
                                                        <option>รับโอนกิจการ</option>
                                                        <option>อยู่ระหว่างชำระบัญชี</option>
                                                        <option>เสร็จการชำระบัญชี</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-control">
                                        <button type="button" class="btn btn-raised btn-default __redvitality waves-effect">ค้นหา</button>
                                        <a class="btn btn-raised btn-default __gold waves-effect" href="../view/company_AddEdit.php">เพิ่มใหม่</a>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- company -->
            <div id="company_status">
                <div class="row clearfix">
                    <div class="col-sm-12 col-md-12 col-lg-12">

                        <div class="card">
                            <div class="header">
                                <div class="header-status">
                                    <h3>รายการทะบียนบริษัทเพิ่มล่าสุดทั้งหมด</h3>
                                    <span>302,240</span>
                                </div>
                                <ul class="header-dropdown m-r--5">
                                    <button type="button" class="btn btn-raised btn-default waves-effect"> <i class="material-icons">add</i></button>
                                    <li class="dropdown"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                        <ul class="dropdown-menu slideUp ">
                                            <li><a href="javascript:void(0);">Action</a></li>
                                            <li><a href="javascript:void(0);">Another action</a></li>
                                            <li><a href="javascript:void(0);">Something else</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="body table-responsive company-list">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th style="width:60px;">Code</th>
                                            <th>Date</th>
                                            <th>NameThai</th>
                                            <th>NameEng</th>
                                            <th>TaxNo</th>
                                            <th>Group</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>123</td>
                                            <td>วัน-เดือน-ปี พ.ศ.</td>
                                            <td>ชื่อนิติบุคคล</td>
                                            <td>Carasco Petroloum, Inc</td>
                                            <td>เลขทะเบียนนิติบุคคล (13 หลัก)</td>
                                            <td>ชื่อกลุ่มธุรกิจหลัก</td>
                                            <td>สถานะบริษัท</td>
                                            <td><a href="../view/company_AddEdit.php"><button type="button" class="btn btn-raised btn-default waves-effect"> <i class="material-icons">mode_edit</i></button></a></td>
                                        </tr>
                                        <tr>
                                            <td>123</td>
                                            <td>วัน-เดือน-ปี พ.ศ.</td>
                                            <td>ชื่อนิติบุคคล</td>
                                            <td>Carasco Petroloum, Inc</td>
                                            <td>เลขทะเบียนนิติบุคคล (13 หลัก)</td>
                                            <td>ชื่อกลุ่มธุรกิจหลัก</td>
                                            <td>สถานะบริษัท</td>
                                            <td><a href="../view/company_AddEdit.php"><button type="button" class="btn btn-raised btn-default waves-effect"> <i class="material-icons">mode_edit</i></button></a></td>
                                        </tr>
                                        <tr>
                                            <td>123</td>
                                            <td>วัน-เดือน-ปี พ.ศ.</td>
                                            <td>ชื่อนิติบุคคล</td>
                                            <td>Carasco Petroloum, Inc</td>
                                            <td>เลขทะเบียนนิติบุคคล (13 หลัก)</td>
                                            <td>ชื่อกลุ่มธุรกิจหลัก</td>
                                            <td>สถานะบริษัท</td>
                                            <td><a href="../view/company_AddEdit.php"><button type="button" class="btn btn-raised btn-default waves-effect"> <i class="material-icons">mode_edit</i></button></a></td>
                                        </tr>
                                        <tr>
                                            <td>123</td>
                                            <td>วัน-เดือน-ปี พ.ศ.</td>
                                            <td>ชื่อนิติบุคคล</td>
                                            <td>Carasco Petroloum, Inc</td>
                                            <td>เลขทะเบียนนิติบุคคล (13 หลัก)</td>
                                            <td>ชื่อกลุ่มธุรกิจหลัก</td>
                                            <td>สถานะบริษัท</td>
                                            <td><a href="../view/company_AddEdit.php"><button type="button" class="btn btn-raised btn-default waves-effect"> <i class="material-icons">mode_edit</i></button></a></td>
                                        </tr>
                                        <tr>
                                            <td>123</td>
                                            <td>วัน-เดือน-ปี พ.ศ.</td>
                                            <td>ชื่อนิติบุคคล</td>
                                            <td>Carasco Petroloum, Inc</td>
                                            <td>เลขทะเบียนนิติบุคคล (13 หลัก)</td>
                                            <td>ชื่อกลุ่มธุรกิจหลัก</td>
                                            <td>สถานะบริษัท</td>
                                            <td><a href="../view/company_AddEdit.php"><button type="button" class="btn btn-raised btn-default waves-effect"> <i class="material-icons">mode_edit</i></button></a></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- footer -->
            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="body">
                            <p class="m-b-0">© 2021 <a href="#index" target="black">TCC GROUP</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    
</template>
<script>
import Topbar from '@/components/Topbar'
import Leftsidebar from '@/components/Leftsidebar'
import Rightsidebar from '@/components/Rightsidebar'
export default {
  components: {
    Topbar,
    Leftsidebar,
    Rightsidebar,
  },
  head:{
      script: [
    {
      body: true,
      async: true,
      type: 'text/javascript',
      src: '/bundles/libscripts.bundle.js',
    },
    {
      body: true,
      async: true,
      type: 'text/javascript',
      src: '/bundles/vendorscripts.bundle.js',
    },
    {
      body: true,

      async: true,
      type: 'text/javascript',
      src: '/bundles/jvectormap.bundle.js',
    },
    {
      body: true,
      async: true,
      type: 'text/javascript',
      src: '/bundles/morrisscripts.bundle.js',
    },
    {
      body: true,
      async: true,
      type: 'text/javascript',
      src: '/bundles/sparkline.bundle.js',
    },
    {
      body: true,
      async: true,
      type: 'text/javascript',
      src: '/bundles/knob.bundle.js',
    },
    {
      body: true,
      async: true,
      type: 'text/javascript',
      src: '/bundles/mainscripts.bundle.js',
    },
    {
      body: true,
      async: true,
      type: 'text/javascript',
      src: '/js/pages/index.js',
    },
    {
      body: true,
      async: true,
      type: 'text/javascript',
      src: '/js/pages/charts/jquery-knob.min.js',
    },
  ],
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
<style >
@import '@/assets/plugins/bootstrap-select/css/bootstrap-select.css';
;</style>
