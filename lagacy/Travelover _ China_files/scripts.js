var appMaster = {

    preLoader: function(){
        imageSources = []
        $('img').each(function() {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if($(imageSources).load()){
            $('.pre-loader').fadeOut('slow');
        }
    },

    smoothScroll: function() {
        // Smooth Scrolling
        $('a[href*=#]:not([href=#carousel-example-generic])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - $('.navbar').outerHeight()
                    }, 1000);
                    return false;
                }
            }
        });
    },

    reviewsCarousel: function() {
        // Reviews Carousel
        $('.review-filtering').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
    },

    screensCarousel: function() {
    	$('#slick-hospital').slick();
    },

    animateScript: function() {
        $('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'100%'});
        $('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'100%'});
        $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});
        $('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'100%'});
        $('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});
    },

    scrollMenu: function(){
        var num = 50; //number of pixels before modifying styles

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('nav').addClass('scrolled');

            } else {
                $('nav').removeClass('scrolled');
            }
        });
    },
    placeHold: function(){
        // run Placeholdem on all elements with placeholders
        Placeholdem(document.querySelectorAll('[placeholder]'));
    },
    googleMap: function() {
    	var $latitude = 37.530807, $longitude = 126.898342, $map_zoom = 16;
		var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
		var $marker_url = (is_internetExplorer11) ? 'images/map-marker.png' : 'images/map-marker.svg';
		var style = [ {
			"stylers": [ {
				"hue": "#00aaff"
			}, {
				"saturation": -100
			}, {
				"gamma": 2.15
			}, {
				"lightness": 12
			} ]
		} ];
		var map_options = {
			center: new google.maps.LatLng($latitude, $longitude),
			zoom: $map_zoom,
			panControl: true,
			zoomControl: true,
			mapTypeControl: false,
			streetViewControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style,
		};
		var map = new google.maps.Map(document.getElementById('travelover-korea'), map_options);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng($latitude, $longitude),
			map: map,
			visible: true,
			//icon: $marker_url,
			_: null
		});
		
		map_options.center = new google.maps.LatLng(39.996854, 116.464136);
		
		var mapChina = new google.maps.Map(document.getElementById('travelover-china'), map_options);
		var markerChina = new google.maps.Marker({
			position: new google.maps.LatLng(39.996854, 116.464136),
			map: mapChina,
			visible: true
		});
    },
    
    height: function(selector, height) {
    	try {
    		$(selector).height(height + 9);
    		//$(selector).height($($(selector)[0].contentDocument).height());
    	} catch (e) {
    		console.log(e);
    	}
    },
    
    scrollTo: function(selector) {
    	var target = $(selector); 
		$('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
    },
    
    counterUp: function() {
    	if ( $.fn.counterUp ) {
			$( '.counter-up' ).counterUp({
				time: 1000,
			});
		};
    },
    
    headerCarousel: function() {
    	$('#slick-header').slick({
    		//dots: true,
    		//arrows: false,
    		//fade: true,
    		autoplay: true,
    		autoplaySpeed: 3000
    	});	
    },
    
    hospitalJvectormap: function() {
    	$('#jvm-hospital').vectorMap({
			map: 'cn_mill',
		
			backgroundColor: '#00000000',
		
			zoomOnScroll: false,
		
			regionStyle: {
				initial: {
					fill: '#ea9db3',
					"fill-opacity": 1,
					stroke: 'none',
					"stroke-width": 0,
					"stroke-opacity": 1
				},
				hover: {
					"fill-opacity": 0.8,
					cursor: 'pointer'
				},
				selected: {
					fill: 'yellow'
				},
				selectedHover: {}
			},
			
			markers: [ {
				latLng: [ 39.996853, 116.460718 ],
				name: '케어병원'
			}, {
				latLng: [ 40.002337, 116.469003 ],
				name: '한미국제병원'
			}, {
				latLng: [ 40.011060, 116.458217 ],
				name: '신세기부녀아동병원'
			}, {
				latLng: [ 39.872096, 116.450266 ],
				name: '아이얼안과병원'
			}, {
				latLng: [ 40.002395, 116.467340 ],
				name: '기은병원'
			}, {
				latLng: [ 39.949698, 116.465916 ],
				name: '북경국제의료센터'
			}, {
				latLng: [ 39.965197, 116.472736 ],
				name: '동문중의원'
			}, {
				latLng: [ 39.996907, 116.473089 ],
				name: '산얼병원'
			}, {
				latLng: [ 39.887286, 116.467406 ],
				name: '푸화병원'
			}, {
				latLng: [ 39.875223, 116.404681 ],
				name: '티엔탄 푸화병원'
			}, {
				latLng: [ 31.226457, 121.573102 ],
				name: '루이똥병원(서동)'
			}, {
				latLng: [ 31.177718, 121.379238 ],
				name: '민항구중의원'
			}, {
				latLng: [ 31.207813, 121.376665 ],
				name: '교통대부속 동인병원'
			}, {
				latLng: [ 39.875305, 116.404585 ],
				name: '푸화병원'
			}, {
				latLng: [ 23.126105, 113.320569 ],
				name: '신영국제종합병원'
			}, {
				latLng: [ 22.492393, 113.942009 ],
				name: '하이안청 의료센터'
			}, {
				latLng: [ 22.492334, 113.941945 ],
				name: '써커우 의료센터'
			}, {
				latLng: [ 22.492398, 113.940645 ],
				name: '띠왕 의료센터'
			}, {
				latLng: [ 22.533448, 114.056738 ],
				name: '회전중심 의원'
			}, {
				latLng: [ 37.466613, 121.431961 ],
				name: '명강내과'
			}, {
				latLng: [ 37.566843, 121.270938 ],
				name: '경제기술개발구병원'
			}, {
				latLng: [ 23.101903, 113.318620 ],
				name: '주 광저우 대한민국 총영사관'
			}, {
				latLng: [ 31.204403, 121.401585 ],
				name: '주 상하이 대한민국 총영사관'
			}, {
				latLng: [ 41.783889, 123.426787 ],
				name: '주 선양 대한민국 총영사관'
			}, {
				latLng: [ 34.235189, 108.894506 ],
				name: '주 시안 대한민국 총영사관'
			}, {
				latLng: [ 30.590052, 114.274887 ],
				name: '주 우한 대한민국 총영사관'
			}, {
				latLng: [ 30.649103, 104.060958 ],
				name: '주 청뚜 총영사관'
			}, {
				latLng: [ 36.088682, 120.449749 ],
				name: '주 칭다오 총영사관'
			}, {
				latLng: [ 22.280192, 114.163991 ],
				name: '주 홍콩 대한민국 총영사관'
			}, {
				latLng: [ 38.923659, 121.651868 ],
				name: '주 다롄 대한민국 출장소'
			} ],
			
			zoomOnScroll: false,
			
			markerStyle: {
				initial: {
					fill: '#F8E23B',
					stroke: '#383f47'
				}
			},
			
			series: {
				markers: [{
					attribute: 'image',
					scale: {
						'영사관': 'http://google-maps-icons.googlecode.com/files/embassy.png'
					},
					values: {
						'1': '협약병원',
						'2': '협약병원',
						'3': '협약병원',
						'4': '협약병원',
						'5': '협약병원',
						'6': '협약병원',
						'7': '협약병원',
						'8': '협약병원',
						'9': '협약병원',
						'10': '협약병원',
						'11': '협약병원',
						'12': '협약병원',
						'13': '협약병원',
						'14': '협약병원',
						'15': '협약병원',
						'16': '협약병원',
						'17': '협약병원',
						'18': '협약병원',
						'19': '협약병원',
						'20': '협약병원',
						'21': '협약병원',
						'22': '영사관',
						'23': '영사관',
						'24': '영사관',
						'25': '영사관',
						'26': '영사관',
						'27': '영사관',
						'28': '영사관',
						'29': '영사관',
						'30': '영사관'
					},
					legend: {
						horizontal: true
					}
				}],
				
				regions: [ {
					scale: {
						'협약': '#dc425c',
						'예정': '#ea9db3'
					},
					attribute: 'fill',
					values: {
						"CN-11": '협약',
						"CN-31": '협약',
						"CN-50": '협약',
						"CN-44": '협약',
						"CN-32": '협약',
						"CN-21": '협약',
						"CN-37": '협약',
						"CN-42": '협약',
						"CN-51": '협약'
					},
					legend: {
						horizontal: true
					}
				} ]
			},
		
			onRegionClick: function(e, code) {
				console.log('onRegionClick', this, arguments);
				
				var modal = $('#' + code);
				
				if (modal.size() === 0) {
					return;
				}
				
				modal.modal('show');
			},
			
			_: null
		});
    },
    
    newsCarousel: function() {
    	$('#slick-news').slick();
    },
    
    simpleTextMail: function(e) {

    	var f = $(e.target);
    	var d = f.serialize();
    	var l = $('.pre-loader').css('opacity', 0.8);
    	
    	console.log('data:', d);
    	
    	l.show();
    	
    	$.ajax({
    		url: 'simpleTextMail.php',
    		method: 'POST',
    		data: d,
    		success: function(data) {
    			l.hide();
    			if (data === 'OK') {
//				console.log(data);
    				alert('성공하였습니다.');

					//form 초기화
					$(e.target).each(function() {   
						if(this.attr  != "hidden") this.reset();  
					});  

    			} else {
    				alert('실패하였습니다. 잠시 후 다시 시도해주세요.');
    			}
    		}
    	});
    	
    	e.preventDefault();
    },
    
    galleryCarousel: function() {
    	$('.slick-gallery').slick({
    		init: function(slick) {
    			console.log('init');
    		},
    		
    		reInit: function(slick) {
    			console.log('reInit');
    		}
    	});
    	
    	$('#gallery .btn').on('click', function(e) {
    		var target = $(e.delegateTarget);
    		var category = target.data('category');
    		
    		console.log('category', category);
    		
    		$('.slick-gallery').slickFilter('.' + category);
    		
    		e.preventDefault();
    	});
    },
    
    _: null

}; // AppMaster


$(document).ready(function() {
	appMaster.headerCarousel();

    appMaster.smoothScroll();

    appMaster.reviewsCarousel();

    appMaster.screensCarousel();

    appMaster.animateScript();

    //appMaster.scrollMenu();

    appMaster.placeHold();
    
    //appMaster.googleMap();
    
    appMaster.counterUp();

    appMaster.hospitalJvectormap();
    
    appMaster.newsCarousel();
    
    appMaster.galleryCarousel();
});
