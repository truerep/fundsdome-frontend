const HomePageContent = `
<body class="custom-cursor">

    <div class="custom-cursor__cursor"></div>
    <div class="custom-cursor__cursor-two"></div>

    <div class="page-wrapper">

        <header class="main-header sticky-header sticky-header--normal">
            <div class="container-fluid">
                <div class="main-header__inner">
                    <div class="main-header__logo">
                        <a href="http://fundsdome.com">
                            <img src="https://ik.imagekit.io/sahildhingra/fundsdome-logo.jpeg" alt="Cleenhearts HTML" width="159">
                        </a>
                    </div><!-- /.main-header__logo -->
                    <div class="main-header__right">
                        <nav class="main-header__nav main-menu">
                            <ul class="main-menu__list">
                                <li class="current">
                                    <a href="https://fundsdome.com" target="_top">Home</a>
                                </li>
                                <li>
                                    <a href="https://fundsdome.com/campaigns" target="_top">Campaigns</a>
                                </li>
                                <li>
                                    <a href="https://fundsdome.com/events" target="_top">Events</a>
                                </li>
                                <li>
                                    <a href="https://app.fundsdome.com" class="btn-primary" target="_top">Login</a>
                                </li>
                            </ul>
                        </nav><!-- /.main-header__nav -->
                        <div class="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div><!-- /.mobile-nav__toggler -->
                        <!-- <a href="donate.html" class="cleenhearts-btn main-header__btn">
                            <div class="cleenhearts-btn__icon-box">
                                <div class="cleenhearts-btn__icon-box__inner"><span class="icon-donate"></span></div>
                            </div>
                            <span class="cleenhearts-btn__text">donate now</span>
                        </a> -->
                        <!-- /.thm-btn main-header__btn -->
                    </div><!-- /.main-header__right -->
                </div><!-- /.main-header__inner -->
            </div><!-- /.container -->
        </header><!-- /.main-header -->
        <!-- main-slider-start -->
        <section class="main-slider-one">
            <div class="main-slider-one__wrapper">
                <div class="main-slider-one__carousel cleenhearts-owl__carousel owl-carousel" data-owl-options='{
                    "loop": true,
                    "animateOut": "fadeOut",
                    "animateIn": "fadeIn",
                    "items": 1,
                    "autoplay": true,
                    "autoplayTimeout": 7000,
                    "smartSpeed": 1000,
                    "nav": false,
                    "navText": ["<span class=\\"icon-left-arrow\\"></span>", "<span class=\\"icon-right-arrow\\"></span>"],
                    "dots": true,
                    "margin": 0
                }
                '>
                    <div class="item">
                        <div class="main-slider-one__item">
                            <div class="main-slider-one__bg" style="background-image: url(assets/images/backgrounds/slider-1-1.jpg);"></div>
                            <div class="main-slider-one__shape-one" style="background-image: url(assets/images/shapes/slider-1-shape-1.png);"></div>
                            <div class="main-slider-one__shape-two" style="background-image: url(assets/images/shapes/slider-1-shape-2.png);"></div>
                            <div class="main-slider-one__content">
                                <h5 class="main-slider-one__sub-title">Give a helping hand for a child</h5>
                                <!-- slider-sub-title -->
                                <h2 class="main-slider-one__title">
                                    <span class="main-slider-one__title__text">lend a helping hand</span><br>
                                    <span class="main-slider-one__title__text">to who those need it</span>
                                </h2><!-- slider-title -->
                                <div class="main-slider-one__btn">
                                    <a href="become-a-volunteer.html" class="cleenhearts-btn">
                                        <div class="cleenhearts-btn__icon-box">
                                            <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                        </div>
                                        <span class="cleenhearts-btn__text">join with us</span>
                                    </a><!-- slider-btn -->
                                    <div class="main-slider-one__author">
                                        <img src="assets/images/resources/slider-author-1.png" alt="cleenhearts">
                                        <img src="assets/images/resources/slider-author-2.png" alt="cleenhearts">
                                        <img src="assets/images/resources/slider-author-3.png" alt="cleenhearts">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- item -->
                    <div class="item">
                        <div class="main-slider-one__item">
                            <div class="main-slider-one__bg" style="background-image: url(assets/images/backgrounds/slider-1-2.jpg);"></div>
                            <div class="main-slider-one__shape-one" style="background-image: url(assets/images/shapes/slider-1-shape-1.png);"></div>
                            <div class="main-slider-one__shape-two" style="background-image: url(assets/images/shapes/slider-1-shape-2.png);"></div>
                            <div class="main-slider-one__content">
                                <h5 class="main-slider-one__sub-title">Give a helping hand for a child</h5>
                                <!-- slider-sub-title -->
                                <h2 class="main-slider-one__title">
                                    <span class="main-slider-one__title__text">lend a helping hand</span><br>
                                    <span class="main-slider-one__title__text">to who those need it</span>
                                </h2><!-- slider-title -->
                                <div class="main-slider-one__btn">
                                    <a href="become-a-volunteer.html" class="cleenhearts-btn">
                                        <div class="cleenhearts-btn__icon-box">
                                            <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                        </div>
                                        <span class="cleenhearts-btn__text">join with us</span>
                                    </a><!-- slider-btn -->
                                    <div class="main-slider-one__author">
                                        <img src="assets/images/resources/slider-author-1.png" alt="cleenhearts">
                                        <img src="assets/images/resources/slider-author-2.png" alt="cleenhearts">
                                        <img src="assets/images/resources/slider-author-3.png" alt="cleenhearts">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- item -->
                    <div class="item">
                        <div class="main-slider-one__item">
                            <div class="main-slider-one__bg" style="background-image: url(assets/images/backgrounds/slider-1-3.jpg);"></div>
                            <div class="main-slider-one__shape-one" style="background-image: url(assets/images/shapes/slider-1-shape-1.png);"></div>
                            <div class="main-slider-one__shape-two" style="background-image: url(assets/images/shapes/slider-1-shape-2.png);"></div>
                            <div class="main-slider-one__content">
                                <h5 class="main-slider-one__sub-title">Give a helping hand for a child</h5>
                                <!-- slider-sub-title -->
                                <h2 class="main-slider-one__title">
                                    <span class="main-slider-one__title__text">lend a helping hand</span><br>
                                    <span class="main-slider-one__title__text">to who those need it</span>
                                </h2><!-- slider-title -->
                                <div class="main-slider-one__btn">
                                    <a href="become-a-volunteer.html" class="cleenhearts-btn">
                                        <div class="cleenhearts-btn__icon-box">
                                            <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                        </div>
                                        <span class="cleenhearts-btn__text">join with us</span>
                                    </a><!-- slider-btn -->
                                    <div class="main-slider-one__author">
                                        <img src="assets/images/resources/slider-author-1.png" alt="cleenhearts">
                                        <img src="assets/images/resources/slider-author-2.png" alt="cleenhearts">
                                        <img src="assets/images/resources/slider-author-3.png" alt="cleenhearts">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- item -->
                </div>
            </div>
        </section>
        <!-- main-slider-end -->

        <section class="about-one about-one--home section-space">
            <div class="about-one__bg">
                <div class="about-one__bg__border"></div><!-- /.about-one__bg__border -->
                <div class="about-one__bg__inner" style="background-image: url('assets/images/shapes/about-shape-1-1.png');"></div><!-- /.about-one__left__bg__inner -->
            </div><!-- /.about-one__left__bg -->
            <div class="container">
                <div class="row gutter-y-50">
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div class="about-one__left">
                            <div class="about-one__image">
                                <img src="assets/images/about/about-1-1.png" alt="about" class="about-one__image__one">
                                <div class="about-one__video" style="background-image: url('assets/images/about/about-1-2.png');">
                                    <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" class="about-one__video__btn video-button video-popup">
                                        <span class="icon-play"></span>
                                        <i class="video-button__ripple"></i>
                                    </a><!-- /.about-one__video__btn -->
                                </div><!-- /.about-one__video -->
                                <div class="about-one__profile volunteer-profile">
                                    <div class="volunteer-profile__inner">
                                        <img src="assets/images/resources/robert-joe-kerry.png" alt="Robert Joe Kerry" class="volunteer-profile__image">
                                        <div class="volunteer-profile__info">
                                            <h4 class="volunteer-profile__name"><a href="volunteer-details.html">Robert Joe Kerry</a></h4><!-- /.volunteer-profile__name -->
                                            <p class="volunteer-profile__designation">Founder</p><!-- /.volunteer-profile__designation -->
                                        </div><!-- /.volunteer-profile__info -->
                                    </div><!-- /.volunteer-profile__inner -->
                                </div><!-- /.about-one__profile -->
                            </div><!-- /.about-one__image -->
                        </div><!-- /.about-one__left -->
                    </div>
                    <div class="col-xl-6">
                        <div class="about-one__content">
                            <div class="sec-title">

                                <h6 class="sec-title__tagline @@extraClassName">ABOUT FUNDSDOME</h6><!-- /.sec-title__tagline -->

                                <h3 class="sec-title__title">Helping Each Other can Make World <span class="sec-title__title__inner">Better</span></h3><!-- /.sec-title__title -->
                            </div><!-- /.sec-title -->
                            <div class="about-one__text-box wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div class="about-one__text-box__image">
                                    <img src="assets/images/about/about-1-3.jpg" alt="about">
                                </div><!-- /.about-one__text-box__image -->
                                <p class="about-one__text">We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.</p>
                            </div><!-- /.about-one__text-box -->
                            <div class="about-one__wrapper">
                                <div class="row gutter-y-40">
                                    <div class="col-lg-4 col-sm-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div class="about-one__donate about-one__donate--one">
                                            <div class="about-one__donate__icon">
                                                <span class="icon-team"></span>
                                            </div><!-- /.about-one__donate__icon -->
                                            <h4 class="about-one__donate__title">join our team</h4><!-- /.about-one__donate__title -->
                                            <div class="about-one__donate__text">
                                                <span>6,472</span>
                                            </div><!-- /.about-one__donate__text -->
                                        </div><!-- /.about-one__donate -->
                                    </div><!-- /.col-lg-4 col-sm-4 -->
                                    <div class="col-lg-4 col-sm-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div class="about-one__donate about-one__donate--two">
                                            <div class="about-one__donate__icon">
                                                <span class="icon-donation"></span>
                                            </div><!-- /.about-one__donate__icon -->
                                            <h4 class="about-one__donate__title">donate now</h4><!-- /.about-one__donate__title -->
                                            <div class="about-one__donate__text">
                                                <span>$38,768</span>
                                            </div><!-- /.about-one__donate__text -->
                                        </div><!-- /.about-one__donate -->
                                    </div><!-- /.col-lg-4 col-sm-4 -->
                                    <div class="col-lg-4 col-sm-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <div class="about-one__donate about-one__donate--three">
                                            <div class="about-one__donate__icon">
                                                <span class="icon-money"></span>
                                            </div><!-- /.about-one__donate__icon -->
                                            <h4 class="about-one__donate__title">total fund Raised</h4><!-- /.about-one__donate__title -->
                                            <div class="about-one__donate__text">
                                                <span>1,193,210</span>
                                            </div><!-- /.about-one__donate__text -->
                                        </div><!-- /.about-one__donate -->
                                    </div><!-- /.col-lg-4 col-sm-4 -->
                                </div><!-- /.row -->
                            </div><!-- /.about-one__wrapper -->
                            <div class="contact-information">
                                <a href="http://app.fundsdome.com" class="contact-information__btn cleenhearts-btn">
                                    <div class="cleenhearts-btn__icon-box">
                                        <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                    </div>
                                    <span class="cleenhearts-btn__text">more about us</span>
                                </a><!-- /.contact-information__btn -->
                                <div class="contact-information__phone">
                                    <div class="contact-information__phone__icon">
                                        <span class="icon-phone"></span>
                                    </div><!-- /.contact-information__phone__icon -->
                                    <div class="contact-information__phone__text">
                                        <span>call any time</span>
                                        <h5><a href="tel:+912659302003">+91 2659 302 003</a></h5>
                                    </div><!-- /.contact-information__phone__text -->
                                </div><!-- /.contact-information__phone -->
                            </div><!-- /.contact-information -->
                        </div><!-- /.about-one__content -->
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container -->
            <img src="assets/images/shapes/about-shape-1-2.png" alt="cleenhearts" class="about-one__hand">
        </section><!-- /.about-one section-space -->

        <section class="help-donate-one section-space-top">
            <div class="help-donate-one__bg cleenhearts-jarallax" data-jarallax data-speed="0.3" data-imgPosition="50% -100%" style="background-image: url(assets/images/backgrounds/help-donate-bg-1-1.jpg);"></div><!-- /.cta-one__bg -->
            <div class="help-donate-one__shape-one" style="background-image: url(assets/images/shapes/shape-1.png);"></div><!-- /.cta-one__shape-one -->
            <div class="help-donate-one__shape-two" style="background-image: url(assets/images/shapes/shape-2.png);"></div><!-- /.cta-one__shape-two -->
            <div class="container">
                <div class="sec-title">
                    <h6 class="sec-title__tagline sec-title__tagline--center">HELP & DONATE US</h6><!-- /.sec-title__tagline -->
                </div><!-- /.sec-title -->
            </div><!-- /.container -->
            <div class="help-donate-one__slide">
                <span class="help-donate-one__text help-donate-one__text--one">medical</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--two">education</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--one">foods</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--two">health</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--one">support</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--two">donation</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--one">medical</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--two">education</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--one">foods</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--two">health</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--one">support</span><!-- /.help-donate-one__text -->
                <img src="assets/images/resources/help-donate-1-1.png" alt="help-donate" class="help-donate-one__image">
                <span class="help-donate-one__text help-donate-one__text--two">donation</span><!-- /.help-donate-one__text -->
            </div><!-- /.help-donate-one__slide -->
        </section><!-- /.help-donate-one section-space-top -->



        <section class="donations-one donations-carousel section-space-bottom">
            <div class="container">
                <div class="donations-one__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--basic-nav owl-theme owl-carousel" data-owl-options='{
                    "items": 3,
                    "margin": 30,
                    "smartSpeed": 700,
                    "loop":true,
                    "autoplay": 6000,
                    "nav":true,
                    "dots":false,
                    "navText": ["<span class=\\"icon-arrow-left\\"></span>","<span class=\\"icon-arrow-right\\"></span>"],
                    "responsive":{
                        "0":{
                            "items": 1,
                            "margin": 20
                        },
                        "576":{
                            "items": 1,
                            "margin": 30
                        },
                        "768":{
                            "items": 2,
                            "margin": 30
                        },
                        "992":{
                            "items": 2,
                            "margin": 30
                        },
                        "1200":{
                            "items": 3,
                            "margin": 30
                        }
                    }
                }'>
                    <div class="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div class="donation-card @@extraClassName">
                            <div class="donation-card__bg" style="background-image: url('assets/images/backgrounds/donation-bg-1-1.png');">
                            </div><!-- /.donation-card__bg -->
                            <a href="http://fundsdome.com/campaigns" class="donation-card__image">
                                <img src="assets/images/donations/donation-1-1.jpg" alt="Give African Children's Good medical support">
                                <div class="donation-card__category">Medical</div><!-- /.donation-card__category -->
                            </a><!-- /.donation-card__image -->
                            <div class="donation-card__content">
                                <div class="donation-card__progress">
                                    <div class="progress-box">
                                        <div class="progress-box__bar">
                                            <div class="progress-box__bar__inner count-bar--noappear" data-percent='90%'>
                                                <div class="progress-box__number count-text">90%</div>
                                            </div>
                                        </div><!-- /.progress-box__bar -->
                                    </div><!-- /.progress-box -->
                                    <div class="donation-card__progress__bottom">
                                        <h5 class="donation-card__progress__title">Raised $<span>80,050</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                        <h5 class="donation-card__progress__title">goal $<span>90,000</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                    </div><!-- /.donation-card__progress__bottom -->
                                </div><!-- /.donation-card__progress -->
                                <h3 class="donation-card__title"><a href="http://fundsdome.com/campaigns">Give African Children's Good medical support</a></h3>
                                <!-- /.donation-card__title -->
                                <a href="http://fundsdome.com/campaigns" class="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base">
                                    <div class="cleenhearts-btn__icon-box">
                                        <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                    </div>
                                    <span class="cleenhearts-btn__text">donation details</span>
                                </a><!-- /.donation-card__btn -->
                            </div><!-- /.donation-card__content -->
                        </div><!-- /.donation-card -->
                    </div><!-- /.item -->
                    <div class="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="donation-card @@extraClassName">
                            <div class="donation-card__bg" style="background-image: url('assets/images/backgrounds/donation-bg-1-1.png');">
                            </div><!-- /.donation-card__bg -->
                            <a href="http://fundsdome.com/campaigns" class="donation-card__image">
                                <img src="assets/images/donations/donation-1-2.jpg" alt="Let’s education for children get good life">
                                <div class="donation-card__category">Education</div><!-- /.donation-card__category -->
                            </a><!-- /.donation-card__image -->
                            <div class="donation-card__content">
                                <div class="donation-card__progress">
                                    <div class="progress-box">
                                        <div class="progress-box__bar">
                                            <div class="progress-box__bar__inner count-bar--noappear" data-percent='65%'>
                                                <div class="progress-box__number count-text">65%</div>
                                            </div>
                                        </div><!-- /.progress-box__bar -->
                                    </div><!-- /.progress-box -->
                                    <div class="donation-card__progress__bottom">
                                        <h5 class="donation-card__progress__title">Raised $<span>80,050</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                        <h5 class="donation-card__progress__title">goal $<span>90,000</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                    </div><!-- /.donation-card__progress__bottom -->
                                </div><!-- /.donation-card__progress -->
                                <h3 class="donation-card__title"><a href="http://fundsdome.com/campaigns">Let’s education for children get good life</a></h3>
                                <!-- /.donation-card__title -->
                                <a href="http://fundsdome.com/campaigns" class="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base">
                                    <div class="cleenhearts-btn__icon-box">
                                        <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                    </div>
                                    <span class="cleenhearts-btn__text">donation details</span>
                                </a><!-- /.donation-card__btn -->
                            </div><!-- /.donation-card__content -->
                        </div><!-- /.donation-card -->
                    </div><!-- /.item -->
                    <div class="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                        <div class="donation-card @@extraClassName">
                            <div class="donation-card__bg" style="background-image: url('assets/images/backgrounds/donation-bg-1-1.png');">
                            </div><!-- /.donation-card__bg -->
                            <a href="http://fundsdome.com/campaigns" class="donation-card__image">
                                <img src="assets/images/donations/donation-1-3.jpg" alt="Raise Funds For Clean & Healthy Food">
                                <div class="donation-card__category">Foods</div><!-- /.donation-card__category -->
                            </a><!-- /.donation-card__image -->
                            <div class="donation-card__content">
                                <div class="donation-card__progress">
                                    <div class="progress-box">
                                        <div class="progress-box__bar">
                                            <div class="progress-box__bar__inner count-bar--noappear" data-percent='75%'>
                                                <div class="progress-box__number count-text">75%</div>
                                            </div>
                                        </div><!-- /.progress-box__bar -->
                                    </div><!-- /.progress-box -->
                                    <div class="donation-card__progress__bottom">
                                        <h5 class="donation-card__progress__title">Raised $<span>80,050</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                        <h5 class="donation-card__progress__title">goal $<span>90,000</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                    </div><!-- /.donation-card__progress__bottom -->
                                </div><!-- /.donation-card__progress -->
                                <h3 class="donation-card__title"><a href="http://fundsdome.com/campaigns">Raise Funds For Clean & Healthy Food</a></h3>
                                <!-- /.donation-card__title -->
                                <a href="http://fundsdome.com/campaigns" class="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base">
                                    <div class="cleenhearts-btn__icon-box">
                                        <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                    </div>
                                    <span class="cleenhearts-btn__text">donation details</span>
                                </a><!-- /.donation-card__btn -->
                            </div><!-- /.donation-card__content -->
                        </div><!-- /.donation-card -->
                    </div><!-- /.item -->
                    <div class="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div class="donation-card @@extraClassName">
                            <div class="donation-card__bg" style="background-image: url('assets/images/backgrounds/donation-bg-1-1.png');">
                            </div><!-- /.donation-card__bg -->
                            <a href="http://fundsdome.com/campaigns" class="donation-card__image">
                                <img src="assets/images/donations/donation-1-4.jpg" alt="Quisque dictum eget accumsan dignissim. Quisque">
                                <div class="donation-card__category">Medical</div><!-- /.donation-card__category -->
                            </a><!-- /.donation-card__image -->
                            <div class="donation-card__content">
                                <div class="donation-card__progress">
                                    <div class="progress-box">
                                        <div class="progress-box__bar">
                                            <div class="progress-box__bar__inner count-bar--noappear" data-percent='90%'>
                                                <div class="progress-box__number count-text">90%</div>
                                            </div>
                                        </div><!-- /.progress-box__bar -->
                                    </div><!-- /.progress-box -->
                                    <div class="donation-card__progress__bottom">
                                        <h5 class="donation-card__progress__title">Raised $<span>80,050</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                        <h5 class="donation-card__progress__title">goal $<span>90,000</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                    </div><!-- /.donation-card__progress__bottom -->
                                </div><!-- /.donation-card__progress -->
                                <h3 class="donation-card__title"><a href="http://fundsdome.com/campaigns">Quisque dictum eget accumsan dignissim. Quisque</a></h3>
                                <!-- /.donation-card__title -->
                                <a href="http://fundsdome.com/campaigns" class="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base">
                                    <div class="cleenhearts-btn__icon-box">
                                        <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                    </div>
                                    <span class="cleenhearts-btn__text">donation details</span>
                                </a><!-- /.donation-card__btn -->
                            </div><!-- /.donation-card__content -->
                        </div><!-- /.donation-card -->
                    </div><!-- /.item -->
                    <div class="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="donation-card @@extraClassName">
                            <div class="donation-card__bg" style="background-image: url('assets/images/backgrounds/donation-bg-1-1.png');">
                            </div><!-- /.donation-card__bg -->
                            <a href="http://fundsdome.com/campaigns" class="donation-card__image">
                                <img src="assets/images/donations/donation-1-5.jpg" alt="Maecenas enim orci, condime ntum non risus">
                                <div class="donation-card__category">Education</div><!-- /.donation-card__category -->
                            </a><!-- /.donation-card__image -->
                            <div class="donation-card__content">
                                <div class="donation-card__progress">
                                    <div class="progress-box">
                                        <div class="progress-box__bar">
                                            <div class="progress-box__bar__inner count-bar--noappear" data-percent='65%'>
                                                <div class="progress-box__number count-text">65%</div>
                                            </div>
                                        </div><!-- /.progress-box__bar -->
                                    </div><!-- /.progress-box -->
                                    <div class="donation-card__progress__bottom">
                                        <h5 class="donation-card__progress__title">Raised $<span>80,050</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                        <h5 class="donation-card__progress__title">goal $<span>90,000</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                    </div><!-- /.donation-card__progress__bottom -->
                                </div><!-- /.donation-card__progress -->
                                <h3 class="donation-card__title"><a href="http://fundsdome.com/campaigns">Maecenas enim orci, condime ntum non risus</a></h3>
                                <!-- /.donation-card__title -->
                                <a href="http://fundsdome.com/campaigns" class="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base">
                                    <div class="cleenhearts-btn__icon-box">
                                        <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                    </div>
                                    <span class="cleenhearts-btn__text">donation details</span>
                                </a><!-- /.donation-card__btn -->
                            </div><!-- /.donation-card__content -->
                        </div><!-- /.donation-card -->
                    </div><!-- /.item -->
                    <div class="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                        <div class="donation-card @@extraClassName">
                            <div class="donation-card__bg" style="background-image: url('assets/images/backgrounds/donation-bg-1-1.png');">
                            </div><!-- /.donation-card__bg -->
                            <a href="http://fundsdome.com/campaigns" class="donation-card__image">
                                <img src="assets/images/donations/donation-1-6.jpg" alt="Mauris maximus neque vel euismod sagittis. Vestibulum">
                                <div class="donation-card__category">Foods</div><!-- /.donation-card__category -->
                            </a><!-- /.donation-card__image -->
                            <div class="donation-card__content">
                                <div class="donation-card__progress">
                                    <div class="progress-box">
                                        <div class="progress-box__bar">
                                            <div class="progress-box__bar__inner count-bar--noappear" data-percent='75%'>
                                                <div class="progress-box__number count-text">75%</div>
                                            </div>
                                        </div><!-- /.progress-box__bar -->
                                    </div><!-- /.progress-box -->
                                    <div class="donation-card__progress__bottom">
                                        <h5 class="donation-card__progress__title">Raised $<span>80,050</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                        <h5 class="donation-card__progress__title">goal $<span>90,000</span></h5>
                                        <!-- /.donation-card__progress__title -->
                                    </div><!-- /.donation-card__progress__bottom -->
                                </div><!-- /.donation-card__progress -->
                                <h3 class="donation-card__title"><a href="http://fundsdome.com/campaigns">Mauris maximus neque vel euismod sagittis. Vestibulum</a></h3>
                                <!-- /.donation-card__title -->
                                <a href="http://fundsdome.com/campaigns" class="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base">
                                    <div class="cleenhearts-btn__icon-box">
                                        <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                    </div>
                                    <span class="cleenhearts-btn__text">donation details</span>
                                </a><!-- /.donation-card__btn -->
                            </div><!-- /.donation-card__content -->
                        </div><!-- /.donation-card -->
                    </div><!-- /.item -->
                </div><!-- /.donations-one__carousel -->
                <div class="donations-one__row row gutter-y-30">
                    <div class="col-xl-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div class="donation-information">
                            <div class="donation-information__bg" style='background-image: url(assets/images/resources/donation-information-bg-1-1.jpg)'></div><!-- /.donation-information__bg -->
                            <div class="donation-information__content">
                                <h3 class="donation-information__title">Make the Most Out of Tax Time</h3><!-- /.donation-information__title -->
                                <p class="donation-information__text">We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.</p><!-- /.donation-information__text -->
                                <ul class="donation-information__list">
                                    <li>
                                        <i class="fas fa-check"></i>
                                        <span>Donate Money</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        <span>handle with care</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        <span>Donate Money</span>
                                    </li>
                                </ul><!-- /.donation-information__list -->
                                <a href="http://app.fundsdome.com" class="cleenhearts-btn cleenhearts-btn--border">
                                    <div class="cleenhearts-btn__icon-box">
                                        <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                    </div>
                                    <span class="cleenhearts-btn__text">read more</span>
                                </a>
                            </div><!-- /.donation-information__content -->
                        </div><!-- /.donation-information -->
                    </div><!-- /.col-xl-6 -->
                    <div class="col-xl-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="gift-card">
                            <div class="gift-card__bg" style='background-image: url(assets/images/resources/gift-bg-1-1.jpg)'></div><!-- /.gift-card__bg -->
                            <div class="gift-card__content">
                                <h3 class="gift-card__title">Make a donate now</h3><!-- /.gift-card__title -->
                                <p class="gift-card__text">We help companies develop powerful corporate social responsibility, grantmaking, and employee</p><!-- /.gift-card__text -->
                                <div class="gift-card__amount">
                                    <form action="#" class="gift-card__form">
                                        <label for="custom_amount" class="gift-card__form__title">Custom</label>
                                        <input type="text" value="$25" name="custom-amount" id="custom_amount" class="gift-card__form__input" placeholder="Amount">
                                    </form><!-- /.gift-card__form -->
                                    <button type="button" class="gift-card__btn active">$<span class="gift-card__btn__text">25</span></button><!-- /.gift-card__btn -->
                                    <button type="button" class="gift-card__btn">$<span class="gift-card__btn__text">50</span></button><!-- /.gift-card__btn -->
                                    <button type="button" class="gift-card__btn">$<span class="gift-card__btn__text">99</span></button><!-- /.gift-card__btn -->
                                </div><!-- /.gift-card__amount -->
                                <a href="http://fundsdome.com/events" class="cleenhearts-btn cleenhearts-btn--border">
                                    <div class="cleenhearts-btn__icon-box">
                                        <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                    </div>
                                    <span class="cleenhearts-btn__text">donate now</span>
                                </a>
                            </div><!-- /.gift-card__content -->
                        </div><!-- /.gift-card -->
                    </div><!-- /.col-xl-6 -->
                </div><!-- /.row -->
            </div><!-- /.container -->
        </section><!-- /.donations-one donations-carousel section-space-bottom -->

        <section class="inspiring-one section-space" style="background-image: url('assets/images/backgrounds/inspiring-bg-1-1.png');">
            <div class="container">
                <div class="row gutter-y-50">
                    <div class="col-xl-6">
                        <div class="sec-title">

                            <h6 class="sec-title__tagline @@extraClassName">WHO ARE WE</h6><!-- /.sec-title__tagline -->

                            <h3 class="sec-title__title">Inspiring and Helping for Better <span class="sec-title__title__inner">Lifestyle</span></h3><!-- /.sec-title__title -->
                        </div><!-- /.sec-title -->
                        <p class="inspiring-one__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p><!-- /.inspiring-one__text -->
                        <div class="inspiring-one__inner">
                            <div class="inspiring-one__inner__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                                <h4 class="inspiring-one__inner__title">Become A
                                    Volunteer</h4><!-- /.inspiring-one__inner__title -->
                                <div class="inspiring-one__inner__icon">
                                    <span class="icon-unity"></span>
                                </div><!-- /.inspiring-one__inner__icon -->
                            </div><!-- /.inspiring-one__inner__content -->
                            <div class="inspiring-one__inner__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <h4 class="inspiring-one__inner__title">medical &
                                    health</h4><!-- /.inspiring-one__inner__title -->
                                <div class="inspiring-one__inner__icon">
                                    <span class="icon-healthcare"></span>
                                </div><!-- /.inspiring-one__inner__icon -->
                            </div><!-- /.inspiring-one__inner__content -->
                        </div><!-- /.inspiring-one__inner -->
                    </div><!-- /.col-xl-6 -->
                    <div class="col-xl-6">
                        <div class="inspiring-one__image">
                            <div class="inspiring-one__image__inner inspiring-one__image__inner--one wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="00ms">
                                <img src="assets/images/inspiring/inspiring-1-1.jpg" alt="inspiring">
                            </div><!-- /.inspiring-one__image__one -->
                            <div class="inspiring-one__image__inner inspiring-one__image__inner--two wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <img src="assets/images/inspiring/inspiring-1-2.jpg" alt="inspiring">
                            </div><!-- /.inspiring-one__image__two -->
                        </div><!-- /.inspiring-one__image -->
                    </div><!-- /.col-xl-6 -->
                </div><!-- /.row -->
            </div><!-- /.container -->
            <div class="inspiring-one__shapes">
                <div class="inspiring-one__shape inspiring-one__shape--one"></div><!-- /.inspiring-one__shape__one -->
                <div class="inspiring-one__shape inspiring-one__shape--two"></div><!-- /.inspiring-one__shape__one -->
            </div><!-- /.inspiring-one__shape -->
        </section><!-- /.inspiring-one-one section-space -->

        <section class="events-two section-space" id="events">
            <div class="container">
                <div class="sec-title">

                    <h6 class="sec-title__tagline sec-title__tagline--center">WORLDWIDE NON PROFIT CHARITY</h6><!-- /.sec-title__tagline -->

                    <h3 class="sec-title__title">Join Upcoming Events Replays & <span class="sec-title__title__inner">Webinars</span></h3><!-- /.sec-title__title -->
                </div><!-- /.sec-title -->

                <div class="events-two__accordion cleenhearts-accordion" data-grp-name="cleenhearts-accordion">
                    <div class="accordion active">
                        <div class="accordion-title">
                            <div class="accordion-title__bg" style="background-image: url('assets/images/events/event-bg-2-1.jpg');"></div><!-- /.accordion-title__bg -->
                            <div class="events-two__content">
                                <div class="events-two__content__left">
                                    <div class="events-two__time">
                                        <i class="events-two__time__icon fa fa-clock"></i>
                                        <span class="events-two__time__text">10:00 aM - 2.00 PM</span>
                                    </div><!-- /.events-two__time -->
                                    <h3 class="events-two__title">Let’s education for children get good life</h3><!-- /.events-two__title -->
                                </div><!-- /.events-two__content__left -->
                                <div class="events-two__right">
                                    <ul class="events-two__meta">
                                        <li>
                                            <h5><span class="icon-location"></span> Vanue</h5>
                                            <address>350 5th AveNew York, NY 10118 United States</address>
                                        </li>
                                    </ul><!-- /.events-two__meta -->
                                </div><!-- /.events-two__right -->
                            </div><!-- /.events-two__content -->
                            <span class="accordion-title__icon"></span><!-- /.accordion-title__icon -->
                        </div><!-- /.accordian-title -->
                        <div class="accordion-content">
                            <div class="inner">
                                <div class="event-card-four">
                                    <a href="event-details-right.html" class="event-card-four__image">
                                        <img src="assets/images/events/event-1-1.jpg" alt="Let’s education for children get good life">
                                        <div class="event-card-four__date">
                                            <span>03</span>
                                            <span>Sep</span>
                                        </div><!-- /.event-card-four__date -->
                                    </a><!-- /.event-card-four__image -->
                                    <div class="event-card-four__content">
                                        <div class="event-card-four__time">
                                            <i class="event-card-four__time__icon fa fa-clock"></i>10:00 aM - 2.00 PM
                                        </div><!-- /.event-card-four__time -->
                                        <h4 class="event-card-four__title"><a href="event-details-right.html">Let’s education for children get good life</a></h4><!-- /.event-card-four__title -->
                                        <div class="event-card-four__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut
                                            odit aut fugit, sed quia consequuntur.</div><!-- /.event-card-four__text -->
                                        <ul class="event-card-four__meta">
                                            <li>
                                                <h5 class="event-card-four__meta__title">Organizer</h5>
                                                Ashton Porter
                                            </li>
                                            <li>
                                                <h5 class="event-card-four__meta__title"><span class="icon-location"></span> Vanue</h5>
                                                350 5th AveNew York, NY 10118 United States
                                            </li>
                                        </ul><!-- /.event-card-four__meta -->
                                    </div><!-- /.event-card-four__content -->
                                </div><!-- /.event-card-four -->
                                <span class="accordion-title__icon"></span><!-- /.accordion-title__icon -->
                            </div><!-- /.accordian-content -->
                        </div>
                    </div><!-- /.accordian-item -->
                    <div class="accordion">
                        <div class="accordion-title">
                            <div class="accordion-title__bg" style="background-image: url('assets/images/events/event-bg-2-1.jpg');"></div><!-- /.accordion-title__bg -->
                            <div class="events-two__content">
                                <div class="events-two__content__left">
                                    <div class="events-two__time">
                                        <i class="events-two__time__icon fa fa-clock"></i>
                                        <span class="events-two__time__text">10:00 aM - 2.00 PM</span>
                                    </div><!-- /.events-two__time -->
                                    <h3 class="events-two__title">Start a fundraiser for yourself in World</h3><!-- /.events-two__title -->
                                </div><!-- /.events-two__content__left -->
                                <div class="events-two__right">
                                    <ul class="events-two__meta">
                                        <li>
                                            <h5><span class="icon-location"></span> Vanue</h5>
                                            <address>350 5th AveNew York, NY 10118 United States</address>
                                        </li>
                                    </ul><!-- /.events-two__meta -->
                                </div><!-- /.events-two__right -->
                            </div><!-- /.events-two__content -->
                            <span class="accordion-title__icon"></span><!-- /.accordion-title__icon -->
                        </div><!-- /.accordian-title -->
                        <div class="accordion-content">
                            <div class="inner">
                                <div class="event-card-four">
                                    <a href="event-details-right.html" class="event-card-four__image">
                                        <img src="assets/images/events/event-1-2.jpg" alt="Start a fundraiser for yourself in World">
                                        <div class="event-card-four__date">
                                            <span>03</span>
                                            <span>Sep</span>
                                        </div><!-- /.event-card-four__date -->
                                    </a><!-- /.event-card-four__image -->
                                    <div class="event-card-four__content">
                                        <div class="event-card-four__time">
                                            <i class="event-card-four__time__icon fa fa-clock"></i>10:00 aM - 2.00 PM
                                        </div><!-- /.event-card-four__time -->
                                        <h4 class="event-card-four__title"><a href="event-details-right.html">Start a fundraiser for yourself in World</a></h4><!-- /.event-card-four__title -->
                                        <div class="event-card-four__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut
                                            odit aut fugit, sed quia consequuntur.</div><!-- /.event-card-four__text -->
                                        <ul class="event-card-four__meta">
                                            <li>
                                                <h5 class="event-card-four__meta__title">Organizer</h5>
                                                Ashton Porter
                                            </li>
                                            <li>
                                                <h5 class="event-card-four__meta__title"><span class="icon-location"></span> Vanue</h5>
                                                350 5th AveNew York, NY 10118 United States
                                            </li>
                                        </ul><!-- /.event-card-four__meta -->
                                    </div><!-- /.event-card-four__content -->
                                </div><!-- /.event-card-four -->
                                <span class="accordion-title__icon"></span><!-- /.accordion-title__icon -->
                            </div><!-- /.accordian-content -->
                        </div>
                    </div><!-- /.accordian-item -->
                    <div class="accordion">
                        <div class="accordion-title">
                            <div class="accordion-title__bg" style="background-image: url('assets/images/events/event-bg-2-1.jpg');"></div><!-- /.accordion-title__bg -->
                            <div class="events-two__content">
                                <div class="events-two__content__left">
                                    <div class="events-two__time">
                                        <i class="events-two__time__icon fa fa-clock"></i>
                                        <span class="events-two__time__text">10:00 aM - 2.00 PM</span>
                                    </div><!-- /.events-two__time -->
                                    <h3 class="events-two__title">Directly support Coaching fundraisers</h3><!-- /.events-two__title -->
                                </div><!-- /.events-two__content__left -->
                                <div class="events-two__right">
                                    <ul class="events-two__meta">
                                        <li>
                                            <h5><span class="icon-location"></span> Vanue</h5>
                                            <address>350 5th AveNew York, NY 10118 United States</address>
                                        </li>
                                    </ul><!-- /.events-two__meta -->
                                </div><!-- /.events-two__right -->
                            </div><!-- /.events-two__content -->
                            <span class="accordion-title__icon"></span><!-- /.accordion-title__icon -->
                        </div><!-- /.accordian-title -->
                        <div class="accordion-content">
                            <div class="inner">
                                <div class="event-card-four">
                                    <a href="event-details-right.html" class="event-card-four__image">
                                        <img src="assets/images/events/event-1-3.jpg" alt="Directly support Coaching fundraisers">
                                        <div class="event-card-four__date">
                                            <span>03</span>
                                            <span>Sep</span>
                                        </div><!-- /.event-card-four__date -->
                                    </a><!-- /.event-card-four__image -->
                                    <div class="event-card-four__content">
                                        <div class="event-card-four__time">
                                            <i class="event-card-four__time__icon fa fa-clock"></i>10:00 aM - 2.00 PM
                                        </div><!-- /.event-card-four__time -->
                                        <h4 class="event-card-four__title"><a href="event-details-right.html">Directly support Coaching fundraisers</a></h4><!-- /.event-card-four__title -->
                                        <div class="event-card-four__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut
                                            odit aut fugit, sed quia consequuntur.</div><!-- /.event-card-four__text -->
                                        <ul class="event-card-four__meta">
                                            <li>
                                                <h5 class="event-card-four__meta__title">Organizer</h5>
                                                Ashton Porter
                                            </li>
                                            <li>
                                                <h5 class="event-card-four__meta__title"><span class="icon-location"></span> Vanue</h5>
                                                350 5th AveNew York, NY 10118 United States
                                            </li>
                                        </ul><!-- /.event-card-four__meta -->
                                    </div><!-- /.event-card-four__content -->
                                </div><!-- /.event-card-four -->
                                <span class="accordion-title__icon"></span><!-- /.accordion-title__icon -->
                            </div><!-- /.accordian-content -->
                        </div>
                    </div><!-- /.accordian-item -->
                </div><!-- /.events-two__accordion cleenhearts-accordion -->
            </div><!-- /.container -->
        </section><!-- /.events-two section-space-top -->

        <div class="support-one section-space">
            <div class="container">
                <div class="sec-title">

                    <h6 class="sec-title__tagline sec-title__tagline--center">Worldwide non profit charity</h6><!-- /.sec-title__tagline -->

                    <h3 class="sec-title__title">Give a Helping Hand a For Needy <span class="sec-title__title__inner">People</span></h3><!-- /.sec-title__title -->
                </div><!-- /.sec-title -->
                <div class="row gutter-y-30">
                    <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div class="support-card">
                            <a href="donate.html" class="support-card__image">
                                <img src="assets/images/support/support-1-1.jpg" alt="Foods Support">
                            </a><!-- /.support-card__image -->
                            <a href="donate.html" class="support-card__content">
                                <div class="support-card__content__inner">
                                    <h3 class="support-card__title">Foods Support</h3><!-- /.support-card__title -->
                                    <div class="support-card__collected"><span>Collected $2.5M</span></div><!-- /.support-card__collected -->
                                </div><!-- /.support-card__content__inner -->
                            </a><!-- /.support-card__content -->
                        </div><!-- /.support-card -->
                    </div><!-- /.col-xl-6 col-lg-6 -->
                    <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="support-card">
                            <a href="donate.html" class="support-card__image">
                                <img src="assets/images/support/support-1-2.jpg" alt="Sports Support">
                            </a><!-- /.support-card__image -->
                            <a href="donate.html" class="support-card__content">
                                <div class="support-card__content__inner">
                                    <h3 class="support-card__title">Sports Support</h3><!-- /.support-card__title -->
                                    <div class="support-card__collected"><span>Collected $2.5M</span></div><!-- /.support-card__collected -->
                                </div><!-- /.support-card__content__inner -->
                            </a><!-- /.support-card__content -->
                        </div><!-- /.support-card -->
                    </div><!-- /.col-xl-6 col-lg-6 -->
                    <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div class="support-card support-card--direction">
                            <a href="donate.html" class="support-card__content">
                                <div class="support-card__content__inner">
                                    <h3 class="support-card__title">Medical Support</h3><!-- /.support-card__title -->
                                    <div class="support-card__collected"><span>Collected $2.5M</span></div><!-- /.support-card__collected -->
                                </div><!-- /.support-card__content__inner -->
                            </a><!-- /.support-card__content -->
                            <a href="donate.html" class="support-card__image">
                                <img src="assets/images/support/support-1-3.jpg" alt="Medical Support">
                            </a><!-- /.support-card__image -->
                        </div><!-- /.support-card -->
                    </div><!-- /.col-xl-6 col-lg-6 -->
                    <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="support-card support-card--direction">
                            <a href="donate.html" class="support-card__content">
                                <div class="support-card__content__inner">
                                    <h3 class="support-card__title">Education Support</h3><!-- /.support-card__title -->
                                    <div class="support-card__collected"><span>Collected $2.5M</span></div><!-- /.support-card__collected -->
                                </div><!-- /.support-card__content__inner -->
                            </a><!-- /.support-card__content -->
                            <a href="donate.html" class="support-card__image">
                                <img src="assets/images/support/support-1-4.jpg" alt="Education Support">
                            </a><!-- /.support-card__image -->
                        </div><!-- /.support-card -->
                    </div><!-- /.col-xl-6 col-lg-6 -->
                </div><!-- /.row -->
            </div><!-- /.container -->
            <div class="support-one__shape">
                <img src="assets/images/shapes/support-shape-hand-1-1.png" alt="shape-hand" class="support-one__shape__one">
                <img src="assets/images/shapes/support-shape-hand-1-2.png" alt="shape-hand" class="support-one__shape__two">
            </div><!-- /.support-one__shape -->
        </div><!-- /.support-one section-space -->

        <section class="help-people" style="background-image: url('assets/images/backgrounds/help-people-bg-1.png');">
            <div class="container">
                <div class="row">
                    <div class="help-people__images col-xl-6">
                        <div class="help-people__images__inner">
                            <img src="assets/images/help-people/help-people-1-1.png" alt="help-people" class="wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="800ms">
                            <img src="assets/images/help-people/help-people-1-2.png" alt="help-people" class="wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <img src="assets/images/help-people/help-people-1-3.png" alt="help-people" class="wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="00ms">
                        </div><!-- /.help-people__images__inner -->
                    </div><!-- /.col-xl-6 -->
                    <div class="help-people__content col-xl-6">
                        <div class="help-people__content__inner">
                            <div class="sec-title">

                                <h6 class="sec-title__tagline @@extraClassName">Help people now</h6><!-- /.sec-title__tagline -->

                                <h3 class="sec-title__title">Charity For The People You Care <span class="sec-title__title__inner">About</span></h3><!-- /.sec-title__title -->
                            </div><!-- /.sec-title -->
                            <p class="help-people__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p><!-- /.help-people__text -->
                            <div class="help-people__content__bottom">
                                <a href="http://app.fundsdome.com" class="cleenhearts-btn">
                                    <div class="cleenhearts-btn__icon-box">
                                        <div class="cleenhearts-btn__icon-box__inner"><span class="icon-duble-arrow"></span></div>
                                    </div>
                                    <span class="cleenhearts-btn__text">Organize Campaign</span>
                                </a><!-- /.cleenhearts-btn -->
                                <div class="volunteer-group">
                                    <a href="volunteer-details.html" class="volunteer-group__link">
                                        <img src="assets/images/volunteer/volunteer-image-1.png" alt="volunteer" class="volunteer-group__image">
                                    </a><!-- /.volunteer-group__link -->
                                    <a href="volunteer-details.html" class="volunteer-group__link">
                                        <img src="assets/images/volunteer/volunteer-image-2.png" alt="volunteer" class="volunteer-group__image">
                                    </a><!-- /.volunteer-group__link -->
                                    <a href="volunteer-details.html" class="volunteer-group__link">
                                        <img src="assets/images/volunteer/volunteer-image-3.png" alt="volunteer" class="volunteer-group__image">
                                    </a><!-- /.volunteer-group__link -->
                                </div><!-- /.volunteer-group -->
                            </div><!-- /.help-people__content__bottom -->
                        </div><!-- /.help-people__content__inner -->
                    </div><!-- /.col-xl-6 -->
                </div><!-- /.row -->
            </div><!-- /.container -->
            <div class="help-people__shape">
                <img src="assets/images/shapes/help-people-shape-1.png" alt="help-people" class="help-people__shape__one">
            </div><!-- /.help-people__shape -->
        </section><!-- /.help-people -->

        <footer class="main-footer background-white2">
            <div class="main-footer__top">
                <div class="container">
                    <div class="row gutter-y-30">
                        <div class="col-md-12 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                            <div class="footer-widget footer-widget--about">
                                <a href="index.html" class="footer-widget__logo">
                                    <img src="https://ik.imagekit.io/sahildhingra/fundsdome-logo.jpeg" width="159" alt="Cleenhearts HTML Template">
                                </a>
                                <p class="footer-widget__about-text">Wimply dummy text of the priatype industry orem Ipsum has Maecenas quis eros at ante</p>
                            </div><!-- /.footer-widget -->
                            <a href="https://www.google.com/maps/@23.506657,90.3443647,7z?entry=ttu" class="footer-widget__map">
                                <span class="footer-widget__map__text">View Map</span>
                                <span class="icon-paper-plane"></span>
                            </a>
                        </div><!-- /.col-md-12 col-xl-3 -->
                        <div class="col-xl-3 col-md-5 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                            <div class="footer-widget footer-widget--contact">
                                <h2 class="footer-widget__title">Get in touch!</h2><!-- /.footer-widget__title -->
                                <ul class="list-unstyled footer-widget__info">
                                    <li> <span class="icon-location"></span>
                                        <address>901 N Pitt Str., Suite 170 Alexandria, USA</address>
                                    </li>
                                    <li> <span class="icon-phone"></span><a href="tel:(406)555-0120">(406) 555-0120</a></li>
                                    <li> <span class="icon-envelope"></span><a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                                </ul><!-- /.list-unstyled -->
                            </div><!-- /.footer-widget -->
                        </div><!-- /.col-xl-3 col-md-5 -->
                        <div class="col-md-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <div class="footer-widget footer-widget--links">
                                <h2 class="footer-widget__title">Quick Links</h2><!-- /.footer-widget__title -->
                                <ul class="list-unstyled footer-widget__links">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="donate-right.html">Give Donation</a></li>
                                    <li><a href="donate-right.html">Education Support</a></li>
                                    <li><a href="events-list.html">Our Campaign</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul><!-- /.list-unstyled footer-widget__links -->
                            </div><!-- /.footer-widget -->
                        </div><!-- /.col-md-3 -->
                        <div class="col-md-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                            <div class="footer-widget footer-widget--gallery">
                                <h2 class="footer-widget__title">Our Gallery</h2><!-- /.footer-widget__title -->
                                <div class="footer-widget__gallery">
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-1.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-2.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-3.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-4.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-5.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                    <a href="gallery.html" class="footer-widget__gallery__link">
                                        <img src="assets/images/gallery/footer-widget-gallery-img-6.jpg" alt="footer-widget-gallery">
                                        <span class="footer-widget__gallery__icon icon-plus"></span>
                                    </a><!-- /.footer-widget__gallery__link -->
                                </div><!-- /.footer-widget__gallery -->
                            </div><!-- /.footer-widget -->
                        </div><!-- /.col-md-4 col-xl-3 -->
                    </div><!-- /.row -->
                </div><!-- /.container -->
                <div class="main-footer__top__shape-box">
                    <img src="assets/images/shapes/footer-shape-hand-1-1.png" alt="hand" class="main-footer__top__shape-one">
                    <img src="assets/images/shapes/footer-shape-hand-1-2.png" alt="hand" class="main-footer__top__shape-two">
                </div><!-- /.main-footer__top__shape-box -->
            </div><!-- /.main-footer__top -->
            <div class="main-footer__bottom">
                <div class="main-footer__bottom__bg" style="background: url('assets/images/backgrounds/footer-bottom-bg-1-2.png');"></div><!-- /.main-footer__bottom-bg -->
                <div class="container">
                    <div class="main-footer__bottom__inner">
                        <p class="main-footer__copyright">
                            &copy; Copyright <span class="dynamic-year"></span> Fundsdome All Rights Reserved.
                        </p>
                    </div><!-- /.main-footer__inner -->
                </div><!-- /.container -->
            </div><!-- /.main-footer__bottom -->
        </footer><!-- /.main-footer -->


    </div><!-- /.page-wrapper -->

    <div class="mobile-nav__wrapper">
        <div class="mobile-nav__overlay mobile-nav__toggler"></div>
        <!-- /.mobile-nav__overlay -->
        <div class="mobile-nav__content">
            <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

            <div class="logo-box">
                <a href="index.html" aria-label="logo image"><img src="assets/images/logo-light.png" width="155" alt="" /></a>
            </div>
            <!-- /.logo-box -->
            <div class="mobile-nav__container"></div>
            <!-- /.mobile-nav__container -->

            <ul class="mobile-nav__contact list-unstyled">
                <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:needhelp@cleenhearts.com">needhelp@cleenhearts.com</a>
                </li>
                <li>
                    <i class="fa fa-phone-alt"></i>
                    <a href="tel:(406)555-0120">(406) 555-0120</a>
                </li>
            </ul><!-- /.mobile-nav__contact -->
            <div class="mobile-nav__social">
                <a href="https://facebook.com/">
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                    <span class="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com/">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                    <span class="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com/" aria-hidden="true">
                    <i class="fab fa-linkedin-in"></i>
                    <span class="sr-only">Linkedin</span>
                </a>
                <a href="https://youtube.com/" aria-hidden="true">
                    <i class="fab fa-youtube"></i>
                    <span class="sr-only">Youtube</span>
                </a>
            </div><!-- /.mobile-nav__social -->
        </div>
        <!-- /.mobile-nav__content -->
    </div>
    <!-- /.mobile-nav__wrapper -->
    <div class="search-popup">
        <div class="search-popup__overlay search-toggler"></div>
        <!-- /.search-popup__overlay -->
        <div class="search-popup__content">
            <form role="search" method="get" class="search-popup__form" action="#">
                <input type="text" id="search" placeholder="Search Here..." />
                <button type="submit" aria-label="search submit" class="cleenhearts-btn cleenhearts-btn--base">
                    <span><i class="icon-magnifying-glass"></i></span>
                </button>
            </form>
        </div>
        <!-- /.search-popup__content -->
    </div>
    <!-- /.search-popup -->

    <a href="#" data-target="html" class="scroll-to-target scroll-to-top">
        <span class="scroll-to-top__text">back top</span>
        <span class="scroll-to-top__wrapper"><span class="scroll-to-top__inner"></span></span>
    </a>

    <aside class="sidebar-one">
        <div class="sidebar-one__overlay sidebar-btn__toggler"></div><!-- /.siderbar-ovarlay -->
        <div class="sidebar-one__content">
            <span class="sidebar-one__close sidebar-btn__toggler"><i class="fa fa-times"></i></span>
            <div class="sidebar-one__logo sidebar-one__item">
                <a href="index.html" aria-label="logo image"><img src="assets/images/logo-light.png" width="155" alt="logo-dark" /></a>
            </div><!-- /.sidebar-one__logo -->
            <div class="sidebar-one__about sidebar-one__item">
                <p class="sidebar-one__about__text">Wimply dummy text of the priatype industry orem Ipsum has Maecenas quis eros at ante</p>
            </div><!-- /.sidebar-one__about -->
            <div class="sidebar-one__information sidebar-one__item">
                <h4 class="sidebar-one__title">Information</h4>
                <ul class="sidebar-one__information__list">
                    <li>
                        <span class="sidebar-one__information__icon icon-location"></span>
                        <address class="sidebar-one__information__address">
                            <p class="sidebar-one__information__text">85 Ketch Harbour RoadBensalem, PA 19020</p>
                        </address>
                    </li>
                    <li>
                        <i class="sidebar-one__information__icon icon-envelope"></i>
                        <p class="sidebar-one__information__text"><a href="mailto:needhelp@fundsdome.com">needhelp@fundsdome.com</a></p>
                    </li>
                    <li>
                        <span class="sidebar-one__information__icon icon-phone"></span>
                        <p class="sidebar-one__information__text"><a href="tel:(406)555-0120">(406) 555-0120</a></p>
                    </li>
                </ul>
            </div><!-- /.sidebar-one__information -->
            <div class="sidebar-one__socila social-link sidebar-one__item">
                <a href="https://facebook.com/">
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                    <span class="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com/">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                    <span class="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com/" aria-hidden="true">
                    <i class="fab fa-linkedin-in"></i>
                    <span class="sr-only">Linkedin</span>
                </a>
                <a href="https://youtube.com/" aria-hidden="true">
                    <i class="fab fa-youtube"></i>
                    <span class="sr-only">Youtube</span>
                </a>
            </div><!-- /sidebar-one__socila -->
            <div class="sidebar-one__newsletter sidebar-one__item">
                <label class="sidebar-one__title" for="sidebar-email">Newsletter Subscribe</label>
                <form action="#" class="sidebar-one__newsletter__inner mc-form" data-url="MAILCHIMP_FORM_URL">
                    <input type="email" name="sidebar-email" id="sidebar-email" class="sidebar-one__newsletter__input" placeholder="Email Address">
                    <button type="submit" class="sidebar-one__newsletter__btn"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </form>
                <div class="mc-form__response"></div><!-- /.mc-form__response -->
            </div><!-- /.sidebar-one__form -->
        </div><!-- /.sidebar__content -->
    </aside><!-- /.sidebar-one -->

</body>

</html>
`;

export default HomePageContent;