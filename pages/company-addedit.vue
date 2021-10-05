<template>
<div>
    
    <Topbar />
    <Leftsidebar />
    <Rightsidebar />
    <!-- Main Content -->
    <section class="content home">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2>ข้อมูลบริษัท
                        <small class="text-muted">Welcome to TCC Application</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="/"><i class="zmdi zmdi-home"></i> Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="../view/company.php"></a> ทะเบียนบริษัท</li>
                        <li class="breadcrumb-item active">ทะเบียนบริษัท</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <!-- main info-->
            <section class="sec-maininfo">
                <div class="row clearfix">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="card">
                            <div class="header">
                                <h2>ข้อมูลบริษัท </h2>
                            </div>
                            <div class="body">
                                <div class="col-lg-2 col-md-2 __Status">
                                    <div class="boxname_inner">
                                        <h3>CompanyStatus</h3>
                                        <div class="alert alert-company">
                                            <h2>นายทะเบียน</h2>
                                        </div>
                                    </div>
                                </div>
                                <form class="form-horizontal __info">
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-6"> <b>TaxNo</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control ip" placeholder="เลขทะเบียนนิติบุคคล (13 หลัก)">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-6"> <b>ชื่อบริษัทภาษาไทย</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control ip" placeholder="ชื่อนิติบุคคล">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6"> <b>ชื่อบริษัทภาษาอังกฤษ</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control ip" placeholder="Company Inc">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-5 col-md-5"> <b>Group</b>
                                            <div class="input-group">
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
                                        </div>
                                        <div class="col-lg-5 col-md-5"> <b>Sub Group</b>
                                            <div class="input-group">
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
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-2 col-md-2"> <b>Vat/Non Vat</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control ip" placeholder="00%">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-5"> <b>Register Date <small>(วันที่ขึ้นทะเบียนนิติบุคคล)</small></b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control date" placeholder="วัน-เดือน-ปี พ.ศ.">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-5"> <b>End Date </b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control date" placeholder="วัน-เดือน-ปี พ.ศ.">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-control">
                                        <a href="#symbol"></a><button type="button" class="btn btn-raised btn-default __redvitality waves-effect"> Update to Securities</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- company detail-->
            <div id="company_detail">
                <div class="row clearfix">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="card">
                            <div class="body">
                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs">
                                    <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#HeadAdd">Head Address</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#BranchAdd">Branch Address</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Director">Director</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Merger">Merger</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Liquidate">Liquidate</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#NameHistory">Name History</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#AddHistory">Address History</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Account">Account</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#DocLocation">Doc.location</a></li>
                                </ul>
                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <!-- Tab panes 1-->
                                    <Tap_headadd />
                                    <!-- <?php include('../view/companyaddedit_tap-1.php'); ?>
                                     Tab panes 2-->
                                    <!-- <?php include('../view/companyaddedit_tap-2.php'); ?>
                                     Tab panes 3-->
                                    <!-- <?php include('../view/companyaddedit_tap-3.php'); ?> -->
                                    <!-- Tab panes 4-->
                                    <!-- <?php include('../view/companyaddedit_tap-4.php'); ?> -->
                                    <!-- Tab panes 5-->
                                    <!-- <?php include('../view/companyaddedit_tap-5.php'); ?> -->
                                    <!-- Tab panes 6-->
                                    <!-- <?php include('../view/companyaddedit_tap-6.php'); ?> -->
                                    <!-- Tab panes 7-->
                                    <!-- <?php include('../view/companyaddedit_tap-7.php'); ?>
                                     Tab panes 8-->
                                    <!-- <?php include('../view/companyaddedit_tap-8.php'); ?> -->
                                    <!-- Tab panes 9-->
                                    <!-- <?php include('../view/companyaddedit_tap-9.php'); ?> --> -->
                                </div>
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
                            <p class="m-b-0">© 2021 <a href="/" target="black">TCC GROUP</a> </p>
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
import Tap_headadd from '@/components/company/Tap_headadd'
export default {
  components: {
    Topbar,
    Leftsidebar,
    Rightsidebar,
    Tap_headadd,
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

<style>
@import '@/assets/plugins/bootstrap-select/css/bootstrap-select.css';
</style>

