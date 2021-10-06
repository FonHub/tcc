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
                    <h2>ทะเบียนหุ้น
                        <small class="text-muted">Welcome to TCC Application</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="/"><i class="zmdi zmdi-home"></i> Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="/stock"></a> ทะเบียนหุ้น</li>
                        <li class="breadcrumb-item active">ข้อมูลหุ้น</li>
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
                                <h2>ข้อมูลหุ้น </h2>
                            </div>
                            <div class="body">
                               
                                <form class="form-horizontal __info">
                                    <div class="row clearfix">
                                        <div class="col-lg-2 col-md-2"> <b>Symbol</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="TCC">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6"> <b>TaxNo</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="เลขทะเบียนนิติบุคคล (13 หลัก)">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-6"> <b>ชื่อบริษัทภาษาไทย</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="ชื่อนิติบุคคล">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6"> <b>ชื่อบริษัทภาษาอังกฤษ</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="Company Inc">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-6"> <b>Sector</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <select class="form-control show-tick">
                                                        <optgroup label="Sector">
                                                            <option>Sector 1</option>
                                                            <option>Sector 2 </option>
                                                            <option>อาคเนย์</option>
                                                            <option>แอสเสท เวิรด์ คอร์ป</option>
                                                            <option>เบอร์ลี่ ยุคเกอร์</option>
                                                            <option>อื่นๆ </option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-2"> <b>Type</b>
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
                                        <div class="col-lg-3 col-md-3"> <b>Type Name</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <select class="form-control show-tick">
                                                        <optgroup label="กรุณาเลือก">
                                                            <option>หุ้นสามัญ</option>
                                                            <option>หุ้น 2 </option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-2 col-md-2"> <b>Number of Share</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="00.00">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-2"> <b>Par Value</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="0000.000">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-2"> <b>NBV</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="0000.000">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3"> <b>Market</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <select class="form-control show-tick">
                                                        <optgroup label="กรุณาเลือก">
                                                            <option>ไทย</option>
                                                            <option>ต่างประเทศ </option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3"> <b>Provice</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control date" placeholder="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-3 col-md-3"> <b>Group</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <select class="form-control show-tick">
                                                        <optgroup label="กรุณาเลือก">
                                                            <option>กลุ่ม 1</option>
                                                            <option>กลุ่ม 2 </option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3"> <b>SubGroup</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <select class="form-control show-tick">
                                                        <optgroup label="กรุณาเลือก">
                                                            <option>กลุ่ม 1</option>
                                                            <option>กลุ่ม 2 </option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>                                            
                                        </div>
                                        <div class="col-lg-3 col-md-3"> <b>Currency</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <select class="form-control show-tick">
                                                        <optgroup label="กรุณาเลือก">
                                                            <option>TH</option>
                                                            <option>$</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3"> <b>Country</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <select class="form-control show-tick">
                                                        <optgroup label="กรุณาเลือก">
                                                            <option>ไทย</option>
                                                            <option>ต่างประเทศ </option>
                                                        </optgroup>
                                                    </select>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-3 col-md-3"> <b>Register Date</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ. ">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3"> <b>  Register Amount<span>(สำหรับ บอจ.)</span></b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="1,000,000.00">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3"> <b>Start Date</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ. ">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3"> <b>End Date</b>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control" placeholder="วัน-เดือน-ปี พ.ศ. ">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- stock detail-->
            <div id="company_detail">
                <div class="row clearfix">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="card">
                            <div class="body">
                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs">
                                    <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#HeadAdd">Basic</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Lot">Lot</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#StockNo">StockNo</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Print">Print</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Meeting">Meeting</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Director">Director</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#NameHistory">Name History</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#AddHistory">Address History</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Investment">Investment</a></li>
                                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Dividend">Dividend</a></li>
                                </ul>
                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <!-- Tab panes 1-->
                                    <div  role="tabpanel" class="tab-pane in active" id="HeadAdd">
                                        <TapHeadAdd />
                                    </div>
                                    
                                    <div role="tabpanel" class="tab-pane" id="Lot"> 
                                      <StockLot /> 
                                    </div>
                                    <div  role="tabpanel" class="tab-pane" id="StockNo">
                                         <Director />
                                    </div>
                                   <div role="tabpanel" class="tab-pane" id="Print">
                                        <Merger />
                                   </div>
                                   <div role="tabpanel" class="tab-pane " id="Meeting">
                                       <Liquidate />
                                   </div>
                                   <div role="tabpanel" class="tab-pane" id="Director">
                                       <NameHistory />
                                   </div>
                                   <div role="tabpanel" class="tab-pane" id="NameHistory">
                                       <AddressHistory />
                                   </div>
                                   <div role="tabpanel" class="tab-pane" id="AddHistory">
                                       <Account />
                                   </div>
                                   <div role="tabpanel" class="tab-pane" id="Investment">
                                       <DocLocation />
                                   </div>                                    
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
import TapHeadAdd from '@/components/company/TapHeadAdd'
import StockLot from '@/components/company/StockLot'
import Director from '@/components/company/Director'
import Merger from '@/components/company/Merger'
import Liquidate from '@/components/company/Liquidate'
import NameHistory from '@/components/company/NameHistory'
import AddressHistory from '@/components/company/AddressHistory'
import Account from '@/components/company/Account'
import DocLocation from '@/components/company/DocLocation'

export default {
  components: {
    Topbar,
    Leftsidebar,
    Rightsidebar,
    TapHeadAdd,
    StockLot,
    Director,
    Merger,
    Liquidate,
    NameHistory,
    AddressHistory,
    Account,
    DocLocation
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

