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
              ทะเบียนบุคคล
              <small class="text-muted">Welcome to TCC Application</small>
            </h2>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12">
            <ul class="breadcrumb float-md-right">
              <li class="breadcrumb-item">
                <a href="/"><i class="zmdi zmdi-home"></i> Dashboard</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/Person"></a> ทะเบียนบุคคล
              </li>
              <li class="breadcrumb-item active">ข้อมูลบุคคล</li>
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
                  <h2>ข้อมูลบุคคล</h2>
                </div>
                <div class="body">
                  <form class="form-horizontal __info">
                    <div class="row clearfix">
                      <div class="col-lg-6 col-md-6">
                        <b>เลขบัตรประชาชน หรือ หมายเลขพาสปอร์ต</b>
                        <div class="input-group">
                          <div class="form-line">
                            <input
                              type="text"
                              class="form-control ip"
                              placeholder="000-0000-0-0-00"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row clearfix">
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
                    <div  class="row clearfix"> 
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
                        <div class="col-lg-3 col-md-3">
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

