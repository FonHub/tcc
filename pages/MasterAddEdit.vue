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
              Master
              <small class="text-muted">Welcome to TCC Application</small>
            </h2>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12">
            <ul class="breadcrumb float-md-right">
              <li class="breadcrumb-item">
                <a href="/"><i class="zmdi zmdi-home"></i> Dashboard</a>
              </li>
              <li class="breadcrumb-item"><a href="/stock"></a> Master</li>
              <li class="breadcrumb-item active">เพิ่มข้อมูล</li>
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
                  <div class="body">
                      <div id="company_detail">
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
                  <!-- form -->
                  <form class="form-horizontal __docLocation">
                    <div class="row clearfix">
                        <div class="col-lg-2 col-md-2">
                        <b>IDCode</b>
                        <div class="input-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="000"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <b>MainGroup</b>
                        <div class="input-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ชื่อกลุ่ม"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-lg-2 col-md-2">
                        <b>IDCode</b>
                        <div class="input-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="000"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <b>SubGroup</b>
                        <div class="input-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ชื่อกลุ่ม"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-lg-2 col-md-2">
                        <b>IDCode</b>
                        <div class="input-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="000"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <b>Sector</b>
                        <div class="input-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ชื่อกลุ่ม"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-4">
                        <b>Office</b>
                        <div class="input-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ชื่อกลุ่ม"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <b>บริษัทหลักทรัพย์</b>
                        <div class="input-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ชื่อกลุ่ม"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <b>สถาบันการเงิน</b>
                        <div class="input-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ชื่อกลุ่ม"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="btn-control">
                      <a href="#save"></a
                      ><button
                        type="button"
                        class="
                          btn btn-raised btn-default
                          __redvitality
                          waves-effect
                        "
                      >
                        บันทึก
                      </button>
                      <a href="#cancel"></a
                      ><button
                        type="button"
                        class="btn btn-raised bg-grey waves-effect"
                      >
                        ยกเลิก
                      </button>
                    </div>
                  </form>
                </div>
                  </div>
                
              </div>
            </div>
          </div>
        </section>

        <!-- footer -->
        <div class="row clearfix">
          <div class="col-lg-12">
            <div class="card">
              <div class="body">
                <p class="m-b-0">
                  © 2021 <a href="/" target="black">TCC GROUP</a>
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
  head: {
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

