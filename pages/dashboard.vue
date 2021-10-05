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
            <h2>
              Dashboard
              <small class="text-muted">Welcome to TCC Application</small>
            </h2>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12">
            <ul class="breadcrumb float-md-right">
              <li class="breadcrumb-item">
                <a href="#index"><i class="zmdi zmdi-home"></i> Dashboard</a>
              </li>
              <li class="breadcrumb-item active">Home</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <!-- company -->
        <div class="row clearfix">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="card">
              <div class="header">
                <div class="header-status">
                  <h3>รายการทะบียนบริษัทเพิ่มล่าสุดทั้งหมด</h3>
                  <span>302,240</span>
                </div>
                <ul class="header-dropdown m-r--5">
                  <button
                    type="button"
                    class="btn btn-raised btn-default waves-effect"
                  >
                    <i class="material-icons">add</i>
                  </button>
                  <li class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="zmdi zmdi-more-vert"></i>
                    </a>
                    <ul class="dropdown-menu slideUp">
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
                      <th style="width: 60px">Code</th>
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
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>เลขทะเบียนนิติบุคคล (13 หลัก)</td>
                      <td>ชื่อกลุ่มธุรกิจหลัก</td>
                      <td>สถานะบริษัท</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>เลขทะเบียนนิติบุคคล (13 หลัก)</td>
                      <td>ชื่อกลุ่มธุรกิจหลัก</td>
                      <td>สถานะบริษัท</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>เลขทะเบียนนิติบุคคล (13 หลัก)</td>
                      <td>ชื่อกลุ่มธุรกิจหลัก</td>
                      <td>สถานะบริษัท</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>เลขทะเบียนนิติบุคคล (13 หลัก)</td>
                      <td>ชื่อกลุ่มธุรกิจหลัก</td>
                      <td>สถานะบริษัท</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- stock -->
        <div class="row clearfix">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="card">
              <div class="header">
                <div class="header-status">
                  <h3>รายการทะบียนหุ้นเพิ่มล่าสุดทั้งหมด</h3>
                  <span>302,240</span>
                </div>
                <ul class="header-dropdown m-r--5">
                  <button
                    type="button"
                    class="btn btn-raised btn-default waves-effect"
                  >
                    <i class="material-icons">add</i>
                  </button>
                  <li class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="zmdi zmdi-more-vert"></i>
                    </a>
                    <ul class="dropdown-menu slideUp">
                      <li><a href="javascript:void(0);">Action</a></li>
                      <li><a href="javascript:void(0);">Another action</a></li>
                      <li><a href="javascript:void(0);">Something else</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="body table-responsive stock_list">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th style="width: 60px">Symbol</th>
                      <th>Date</th>
                      <th>NameThai</th>
                      <th>NameEng</th>
                      <th>Currency</th>
                      <th>Market</th>
                      <th>Country</th>
                      <th>ทุนจดทะเบียน (บาท)</th>
                      <th>จำนวนหุ้นทั้งหมด</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>BHT</td>
                      <td>Thai</td>
                      <td>Thailand</td>
                      <td>00.00</td>
                      <td>00.00</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>BHT</td>
                      <td>Thai</td>
                      <td>Thailand</td>
                      <td>00.00</td>
                      <td>00.00</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>BHT</td>
                      <td>Thai</td>
                      <td>Thailand</td>
                      <td>00.00</td>
                      <td>00.00</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>BHT</td>
                      <td>Thai</td>
                      <td>Thailand</td>
                      <td>00.00</td>
                      <td>00.00</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>BHT</td>
                      <td>Thai</td>
                      <td>Thailand</td>
                      <td>00.00</td>
                      <td>00.00</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- stock market-->
        <div class="row clearfix">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="card">
              <div class="header">
                <div class="header-status">
                  <h3>รายการทะบียนหุ้นตลาดเพิ่มล่าสุดทั้งหมด</h3>
                  <span>302,240</span>
                </div>
                <ul class="header-dropdown m-r--5">
                  <button
                    type="button"
                    class="btn btn-raised btn-default waves-effect"
                  >
                    <i class="material-icons">add</i>
                  </button>
                  <li class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="zmdi zmdi-more-vert"></i>
                    </a>
                    <ul class="dropdown-menu slideUp">
                      <li><a href="javascript:void(0);">Action</a></li>
                      <li><a href="javascript:void(0);">Another action</a></li>
                      <li><a href="javascript:void(0);">Something else</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="body table-responsive market-list">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th style="width: 60px">Symbol</th>
                      <th>Date</th>
                      <th>บริษัทเจ้าของหุ้น(Company)</th>
                      <th>บริษัทผู้ถือหุ้น (Company)</th>
                      <th>Currency</th>
                      <th>Market</th>
                      <th>ทุนจดทะเบียน</th>
                      <th>หุ้นทั้งหมด</th>
                      <th>สถานะ</th>
                      <th>ที่เก็บใบหุ้น</th>
                      <th>จำนวนหุ้น</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>BHT</td>
                      <td>Thai</td>
                      <td>00.00</td>
                      <td>00.00</td>
                      <td>จำนำ</td>
                      <td>ผู้รับจำนำ</td>
                      <td>00.00</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>BHT</td>
                      <td>Thai</td>
                      <td>00.00</td>
                      <td>00.00</td>
                      <td>ปลอดจำนำ</td>
                      <td>Office</td>
                      <td>00.00</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>BHT</td>
                      <td>Thai</td>
                      <td>00.00</td>
                      <td>00.00</td>
                      <td>ปลอดจำนำ</td>
                      <td>บริษัทหลักทรัพย์</td>
                      <td>00.00</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>BHT</td>
                      <td>Thai</td>
                      <td>00.00</td>
                      <td>00.00</td>
                      <td>ปลอดจำนำ</td>
                      <td>บริษัทหลักทรัพย์</td>
                      <td>00.00</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>วัน-เดือน-ปี พ.ศ.</td>
                      <td>ชื่อนิติบุคคล</td>
                      <td>Carasco Petroloum, Inc</td>
                      <td>BHT</td>
                      <td>Thai</td>
                      <td>00.00</td>
                      <td>00.00</td>
                      <td>ปลอดจำนำ</td>
                      <td>บริษัทหลักทรัพย์</td>
                      <td>00.00</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-raised btn-default waves-effect"
                        >
                          <i class="material-icons">mode_edit</i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- footer -->
        <div class="row clearfix">
          <div class="col-lg-12">
            <div class="card">
              <div class="body">
                <p class="m-b-0">
                  © 2021 <a href="#index" target="black">TCC GROUP</a>
                </p>
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
</style>