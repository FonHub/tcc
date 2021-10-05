<template>
  <nav class="navbar">
    <div class="col-12">
        <div class="navbar-header">
            <a href="javascript:void(0);" class="bars"></a>
            <a class="navbar-brand" href="../view/index.php"><img class="imglogo-brand" src="~/assets/images/TCC-logo.png"
                    alt="TCC GROUP"></a>
        </div>
        <ul class="nav navbar-nav navbar-left">
            <li><a href="javascript:void(0);" class="ls-toggle-btn" data-close="true"><i class="zmdi zmdi-swap"></i></a>
            </li>
            <li class="dropdown menu-app hidden-sm-down"><a href="javascript:void(0);" class="dropdown-toggle"
                    data-toggle="dropdown" role="button"> <i class="zmdi zmdi-apps"></i> </a>
                <ul class="dropdown-menu slideDown">
                    <li class="body">
                        <ul class="menu">
                            <li><a href="javascript:void(0)"><i
                                        class="zmdi zmdi-accounts-list"></i><span>ข้อมูลบริษัท</span></a></li>
                            <li><a href="javascript:void(0)"><i
                                        class="zmdi zmdi-calendar-note"></i><span>การประชุม</span></a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="javascript:void(0);" class="mega-menu xs-hide" data-close="true"><i
                        class="zmdi zmdi-power"></i></a></li>
            <li><a href="javascript:void(0);" class="js-right-sidebar" data-close="true"><i
                        class="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
        </ul>
    </div>
</nav>
</template>