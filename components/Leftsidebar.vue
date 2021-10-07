<template>
  <aside id="leftsidebar" class="sidebar">
    <!-- User Info -->
    <div class="user-info">
        <div class="info-container">
            <div class="name" data-toggle="dropdown">John Doe</div>
            <div class="btn-group user-helper-dropdown">
                <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" role="button"> keyboard_arrow_down </i>
                <ul class="dropdown-menu slideUp">
                    <li><a href="#profile"><i class="material-icons">person</i>Profile</a></li>
                    <li><a href="#sign-in"><i class="material-icons">input</i>Sign Out</a></li>
                </ul>
            </div>
            <div class="email">john.doe@example.com</div>
        </div>
    </div>
    <!-- #User Info -->
    <!-- Menu -->
    <div class="menu">
        <ul class="list">
            <li class=""><a href="/Person"><i class="zmdi zmdi-account"></i><span>ทะเบียนบุคคล</span></a></li>
            <li class="active open"><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-home"></i><span>ทะเบียนบริษัท</span></a>
                <ul class="ml-menu">
                    <li class="active"><a href="/company">ข้อมูลบริษัท</a></li>
                    <li><a href="/companyNameHistory">ประวัติการเปลี่ยนแปลงชื่อบริษัท</a></li>
                    <li><a href="/companyAddressHistory">ประวัติการเปลี่ยนแปลงที่อยู่บริษัท</a></li>
                    <li><a href="/companyMerger">การควบบริษัท</a></li>
                    <li><a href="/companyLiquidate">การชำระบัญชี</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-trending-up"></i><span>ทะเบียนหุ้น</span> </a>
                <ul class="ml-menu">
                    <li><a href="/stock">ข้อมูลหุ้น</a></li>
                    <li><a href="/StockLot">บริษัทเจ้าของหุ้น</a></li>
                    <li><a href="/StockNo">รายละเอียดใบหุ้น</a></li>
                    <li><a href="/stockMeeting">รายละเอียดการประชุม</a></li>
                    <li><a href="/stockDirector">รายละเอียดกรรมการ</a></li>
                    <li><a href="/companyNameHistory">ประวัติการเปลี่ยนชื่อ</a></li>
                    <li><a href="/companyAddressHistory">ประวัติการเปลี่ยนที่อยู่</a></li>
                    <li><a href="/stockInvestment">เงินลงทุน</a></li>
                    <li><a href="/StockDividend">เงินปันผล</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-grid"></i><span>หุ้นตลาด</span> </a>
                <ul class="ml-menu">
                    <li><a href="/stockMarket">ข้อมูลหุ้นตลาด</a></li>
                    <li><a href="/stockMarket">บริษัทเจ้าของหุ้น(Company)</a></li>
                    <li><a href="/stockMarket">บริษัทผู้ถือหุ้น (Company)</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-view-module"></i><span>Master</span> </a>
                <ul class="ml-menu">
                    <li><a href="/Master"> <span>ข้อมูล Group และ Sub Group</span> </a></li>
                    <li><a href="/Master" class="menu-toggle"> <span>ข้อมูล Sector</span> </a>
                        <ul class="ml-menu">
                            <li><a href="/Master"> <span>Office</span> </a></li>
                            <li><a href="/Master"> <span>บริษัทหลักทรัพย์</span> </a></li>
                            <li><a href="/Master"> <span>สถาบันการเงิน</span> </a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-folder-outline"></i><span>รายงานบริษัท</span> </a>
                <ul class="ml-menu">
                    <li><a href="javascript:void(0);">บอจ. 5</a></li>
                    <li><a href="javascript:void(0);">บมจ. 6</a></li>
                    <li><a href="javascript:void(0);">ข้อมูลพื้นฐานและกรรมการ</a></li>
                    <li><a href="javascript:void(0);">ประวัติการเป็นกรรมการ</a></li>
                    <li><a href="javascript:void(0);">รายงานชื่อเดิมของบริษัท</a></li>
                    <li><a href="javascript:void(0);">รายงานควบบริษัท</a></li>
                    <li><a href="javascript:void(0);">รายงานสรุปจำนวนบริษัท</a></li>
                    <li><a href="javascript:void(0);">รายงานเงินลงทุน</a></li>
                    <li><a href="javascript:void(0);">รายงานการชำระบัญชี</a></li>
                    <li><a href="javascript:void(0);">รายงานบริษัทชำระเงินไม่ครบ</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-folder"></i><span>รายงานหุ้น</span> </a>
                <ul class="ml-menu">
                    <li><a href="javascript:void(0);">รายงานใบหุ้น</a></li>
                    <li><a href="javascript:void(0);">สมุดทะเบียนหุ้น</a></li>
                    <li><a href="javascript:void(0);">รายงานการเก็บใบหุ้น</a></li>
                    <li><a href="javascript:void(0);">รายงานการจำนำหุ้น</a></li>
                    <li><a href="javascript:void(0);">รายงานสรุปรวม</a></li>
                    <li><a href="javascript:void(0)">รายงานสรุปผู้ถือหุ้น</a></li>
                    <li><a href="javascript:void(0);">การจัดพิมพ์สัญญาซื้อขายหุ้น</a></li>
                    <li><a href="javascript:void(0);">บัญชีรายชื่อผู้ถือหุ้น</a></li>
                    <li><a href="javascript:void(0);">โครงสร้างการถือหุ้น</a></li>
                    <li><a href="javascript:void(0);">Template ผู้ถือหุ้น</a></li>
                    <li><a href="javascript:void(0);">Chartโครงสร้างการถือหุ้น</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <!-- #Menu -->
</aside>
</template>