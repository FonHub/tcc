<template>
  <aside id="rightsidebar" class="right-sidebar">
        <ul class="nav nav-tabs">
            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#settings">ตั้งค่า</a></li>
        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane in active in active slideRight" id="settings">
                <div class="settings slim_scroll">
                    <p class="text-left">การตั้งค่าทั่วไป</p>
                    <ul class="setting-list">
                        <li><span>Report Panel Usage</span>
                            <div class="switch">
                                <label><input type="checkbox" checked><span class="lever"></span></label>
                            </div>
                        </li>
                    </ul>
                    <p class="text-left">การตั้งค่าระบบ</p>
                    <ul class="setting-list">
                        <li><span>Auto Updates</span>
                            <div class="switch">
                                <label><input type="checkbox" checked><span class="lever"></span></label>
                            </div>
                        </li>
                    </ul>
                    <p class="text-left">การตั้งค่าผู้ใช้งาน</p>
                    <ul class="setting-list">
                        <li><span>Profiles</span>
                            <div class="switch">
                                <label><input type="checkbox"><span class="lever"></span></label>
                            </div>
                        </li>
                        <li><span>Permission</span>
                            <div class="switch">
                                <label><input type="checkbox" checked><span class="lever"></span></label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>